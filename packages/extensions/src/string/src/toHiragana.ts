import {
  toHiraganaCase,
  toZenkakuCase,
  toZenkakuSpace,
  toZenkanaCase,
} from "encoding-japanese";
Object.defineProperty(String.prototype, "toHiragana", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: string) {
    const me: string = this;
    if (String.isNullOrWhiteSpace(me)) return "";
    let newValue = toZenkakuCase(me);
    newValue = toZenkanaCase(newValue);
    newValue = toZenkakuSpace(newValue);
    newValue = toHiraganaCase(newValue);
    newValue = newValue.replace(/\s/g, "");

    let kana = "";
    for (let i = 0; i < newValue.length; i++) {
      const s = newValue[i];
      if (hiragana.some((x) => x === s)) {
        kana = kana + s;
      }
    }
    return kana;
  },
});
const hiragana = [
  "あ",
  "い",
  "う",
  "え",
  "お",
  "か",
  "き",
  "く",
  "け",
  "こ",
  "さ",
  "し",
  "す",
  "せ",
  "そ",
  "た",
  "ち",
  "つ",
  "て",
  "と",
  "な",
  "に",
  "ぬ",
  "ね",
  "の",
  "は",
  "ひ",
  "ふ",
  "へ",
  "ほ",
  "ま",
  "み",
  "む",
  "め",
  "も",
  "や",
  "ゆ",
  "よ",
  "ら",
  "り",
  "る",
  "れ",
  "ろ",
  "わ",
  "ヰ",
  "ゑ",
  "を",
  "ん",
  "が",
  "ぎ",
  "ぐ",
  "げ",
  "ご",
  "ざ",
  "じ",
  "ず",
  "ぜ",
  "ぞ",
  "だ",
  "ぢ",
  "づ",
  "で",
  "ど",
  "ば",
  "び",
  "ぶ",
  "べ",
  "ぼ",
  "ぱ",
  "ぴ",
  "ぷ",
  "ぺ",
  "ぽ",
  "ぁ",
  "ぃ",
  "ぅ",
  "ぇ",
  "ぉ",
  "ゃ",
  "ゅ",
  "ょ",
  "っ",
];
