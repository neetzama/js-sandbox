"use strict";

// 明示的な型変換

/*
* シンボル → 文字列
*/

// 暗黙的に型変換をされることはない。そのため、toString() メソッドや Stringコンストラクタを用いて明示的に型変換させる必要がある。
// console.log("文字列と" + Symbol("シンボル")); // Uncaught TypeError: Cannot convert a Symbol value to a string

console.log("文字列と" + Symbol("シンボル").toString());
console.log("文字列と" + String(Symbol("シンボル")));


/*
* 文字列 → 数値
*/

// 主に以下を利用して文字列から数値に型変換できる
// - Numberコンストラクタ関数 ... 数字以外の文字列を渡すと NaN が返される
// - Number.parseInt ... 整数を取り出せる
// - Number.parseFloat ... 浮動少数点数を取り出せる

const num = "123.123cm";

// 10進数で表示されるように明示的に指定している
console.log(Number.parseInt(num, 10)) // 123
console.log(Number.parseFloat(num)) // 123.123
console.log(Number(num)) // NaN

// NaN について
// NaN はNumber型であり、NaNかどうかを判定する Number.NaN() メソッドが存在する。

const nan = Number("文字列");

console.log(typeof nan) // number
console.log(Number.isNaN(nan)) // true

// Number.NaN() メソッドは「NaNかどうか」のみを判定するので NaN 以外は false を返す
const str = "文字列";
console.log(Number.isNaN(str)) // false
