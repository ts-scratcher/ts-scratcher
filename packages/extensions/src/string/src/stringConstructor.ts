import "@ts-scratcher/object";

String.isNullOrEmpty = (str: string | undefined | null) => !str;
String.isNullOrWhiteSpace = (s: string | undefined | null) =>
  !s || s.replace(/\s/g, "").length < 1;
String.split = function (
  target: string | undefined | null,
  separator: string | RegExp,
  limit?: number
) {
  return target?.split(separator, limit) ?? [];
};
String.toBoolean = function (s, defaultValue = false) {
  if (!s) return defaultValue;
  
  s = s?.toLowerCase();

  if (s === "true") return true;
  if (s === "false") return false;

  return defaultValue;
};
