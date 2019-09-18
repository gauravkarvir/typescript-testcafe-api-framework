interface Options {
  locale: string;
  currency: string;
  trimDecimals: boolean;
}

export function formatNumberByLocale(locale: string, numberToFormat: number, fractionDigits: number): string {
  return numberToFormat.toLocaleString(locale, {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });
}

export const currencyFormatUSD = (
  amount: number,
  { locale = 'en-UK', currency = 'GBP', trimDecimals = true }: Partial<Options> = {},
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: trimDecimals ? 0 : undefined,
    maximumFractionDigits: trimDecimals ? 0 : undefined,
  }).format(amount);
};
