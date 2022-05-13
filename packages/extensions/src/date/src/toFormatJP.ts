Object.defineProperty(Date.prototype, "toFormatJP", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Date, f: string) {
    const options: any =  { era:'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat("ja-JP-u-ca-japanese", options).format(this);
  },
});
