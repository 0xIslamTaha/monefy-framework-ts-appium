export function parseBalanceToNumber(balance: string) {
  return parseFloat(balance.replace(/[^0-9.-]+/g, ''));
}
