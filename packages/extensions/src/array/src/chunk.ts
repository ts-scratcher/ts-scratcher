Object.defineProperty(Array.prototype, "chunk", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Array<any>, size: number) {
    if (!size) {
      size = 1;
    }
    return this.reduce((chunks, el, i) => {
      if (i % size === 0) {
        chunks.push([el]);
      } else {
        chunks[chunks.length - 1].push(el);
      }
      return chunks;
    }, []);
  },
});
