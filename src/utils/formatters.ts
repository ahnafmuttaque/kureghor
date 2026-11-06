export function toBanglaDigits(num: number | string): string {
  if (num === undefined || num === null) return "";
  const banglaDigits: Record<string, string> = {
    "0": "০",
    "1": "১",
    "2": "২",
    "3": "৩",
    "4": "৪",
    "5": "৫",
    "6": "৬",
    "7": "৭",
    "8": "৮",
    "9": "৯",
  };
  const formatted = Number(num).toLocaleString("en-US");
  return formatted.replace(/[0-9]/g, (w) => banglaDigits[w] || w);
}
