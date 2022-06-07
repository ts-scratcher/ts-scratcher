require("@ts-scratcher/number");
require("./src/stringConstructor");
require("./src/toChangeDateString");
require("./src/isValid");
require("./src/tryDecomposeYearAndDays");
require("./src/toDefault");
require("./src/toHiragana");
require("./src/toNumberFormat");
require("./src/toNumberFormatZeroEmpty");
require("./src/toDate");
require("./src/toDateWithJP");
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
