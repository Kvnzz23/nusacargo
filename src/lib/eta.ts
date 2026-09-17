export function minutesUntilEta(etaISO: string, now: Date = new Date()): number {
  const eta = new Date(etaISO);
  const diffMs = eta.getTime() - now.getTime();
  return Math.round(diffMs / 60_000);
}