import { parse } from "date-fns";
Object.defineProperty(String.prototype, "toDateWithJP", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function (this: string, f: string = "yyyy.MM.dd") {
      const dt = parse(this, f, new Date());
      const options: any =  { era:'long', year: 'numeric', month: 'long', day: 'numeric' };
      return new Intl.DateTimeFormat("ja-JP-u-ca-japanese", options).format(dt);
    },
  });