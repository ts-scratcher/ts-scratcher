interface StringConstructor {
  isNullOrEmpty(str: string | undefined | null): boolean;
  isNullOrWhiteSpace(str: string | undefined | null): boolean;
  split(
    target: string | undefined | null,
    separator: string | RegExp,
    limit?: number
  ): string[];
  toBoolean(value: string | undefined | null, defaultValue?: boolean): boolean;
}

interface String {
  toChangeDateString(format?: string, defaultValue?: string): string;

  isValid(format?: string): boolean;
  tryDecomposeYearAndDays(
    format?: string,
    defaultValue?: {
      year: string;
      month: string;
      day: string;
      valid?: boolean;
    }
  ): {
    year: string;
    month: string;
    day: string;
    valid: boolean;
  };
  toDefault(defaultValue?: string): string;
  toHiragana(): string;

  toNumberFormat(locales?: string, options?: Intl.NumberFormatOptions): string;
  toNumberFormatZeroEmpty(
    locales?: string,
    options?: Intl.NumberFormatOptions
  ): string;

  toDate(format: string): Date;
  toDateWithJP(format: string): Date;

  contains(s: string): boolean;
}
