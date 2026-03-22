/**
 * Single place for the public Cal.com booking link (20-min strategy call).
 * Override via .env without touching code:
 *   NEXT_PUBLIC_CAL_BOOKING_URL — used on the site + emails
 *   CAL_COM_BOOKING_URL — optional override (e.g. different link for API/email only)
 */
export const DEFAULT_CAL_BOOKING_URL =
  'https://cal.com/chirag-9yxbl2/20-min-strategy-call'

export function getBookingCalUrl() {
  if (typeof process === 'undefined' || !process.env) {
    return DEFAULT_CAL_BOOKING_URL
  }
  return (
    process.env.CAL_COM_BOOKING_URL ||
    process.env.NEXT_PUBLIC_CAL_BOOKING_URL ||
    DEFAULT_CAL_BOOKING_URL
  )
}
