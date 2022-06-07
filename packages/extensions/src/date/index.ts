require("./src/addYears");
require("./src/addMonths");
require("./src/addDays");
require("./src/addHours");
require("./src/addMinutes");
require("./src/addSeconds");
require("./src/add");
require("./src/toFormat");
require("./src/toFormatJP");
require("./src/isValid");
require("./src/dateConstructor");
interface DateConstructor {
  dtNow(locales?: string): Date;
  today(locales?: string): Date;
}
interface Date {
  add(years: number, months: number, days: number): Date;
  addYears(amount: number): Date;
  addMonths(amount: number): Date;
  addDays(amount: number): Date;
  addHours(amount: number): Date;
  addMinutes(amount: number): Date;
  addSeconds(amount: number): Date;
  /**
   * https://date-fns.org/v2.28.0/docs/format
   * @param format
   */
  toFormat(format: string): string;
  toFormatJP(): string;
  isValid(): boolean;
}
