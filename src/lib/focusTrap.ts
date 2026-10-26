import type { KeyboardEvent } from 'react'

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'textarea:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

/**
 * Keeps Tab and Shift+Tab inside an open native dialog. Chrome's modal
 * dialog moves focus to the document when tabbing past the last control,
 * so we close that gap explicitly.
 */
export function trapDialogFocus(event: KeyboardEvent<HTMLDialogElement>) {
  if (event.key !== 'Tab') return

  const dialog = event.currentTarget
  const focusables = Array.from(
    dialog.querySelectorAll<HTMLElement>(focusableSelector),
  ).filter(
    (element) =>
      element.getClientRects().length > 0 &&
      !element.hasAttribute('hidden') &&
      element.getAttribute('aria-hidden') !== 'true',
  )

  if (!focusables.length) return

  const first = focusables[0]
  const last = focusables[focusables.length - 1]
  const active = document.activeElement
  const focusIsOutside = !dialog.contains(active)

  if (event.shiftKey) {
    if (active === first || focusIsOutside) {
      event.preventDefault()
      last.focus()
    }
    return
  }

  if (active === last || focusIsOutside) {
    event.preventDefault()
    first.focus()
  }
}
// 