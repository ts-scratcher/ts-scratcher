require("./src/toFormat");
require("./src/toFormatZeroEmpty");
require("./src/toMoney");
require("./src/toMoneyZeroEmpty");
require("./src/toPercent");
require("./src/toPercentZeroEmpty");

interface Number {
  toFormat(locales?: string, options?: Intl.NumberFormatOptions): string;
  toFormatZeroEmpty(
    locales?: string,
    options?: Intl.NumberFormatOptions
  ): string;

  toMoney(format?: "JPY" | "USD" | "EUR1" | "EUR2"): string;
  toMoneyZeroEmpty(format?: "JPY" | "USD" | "EUR1" | "EUR2"): string;

  toPercent(option?: { locales?: string; min?: number; max?: number }): string;
  toPercentZeroEmpty(option?: {
    locales?: string;
    min?: number;
    max?: number;
  }): string;
}
