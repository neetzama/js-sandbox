"use strict";

/*
* Number型
*/

// 2進数
console.log(0b101) // 5

// 8進数
console.log(0o211) // 137

// 16進数
console.log(0xFF) // 255

// exponent（指数）
console.log(3e4) // 30000 = 3x10*4


// Numeric Separators
// ・桁数が読み取りやすくなる
// ・_（アンダースコア）は先頭や末尾に追加できない

console.log(1_000_000_000_000); // １兆


/*
* String型
*/

// 文字列内の「'（シングルクォート）」を反映するためには「\（バックスラッシュ）」を用いてエスケープさせる必要がある。
// 別のクォートで囲む場合はエスケープさせる必要は無い。

console.log('o\'clock') // o'clock
console.log("o'clock") // o'clock

// テンプレートリテラルは \n を使用せずに改行を表現できる
const multilineStr = `複数行の
文字列を
入れたい`;
console.log(multilineStr);

/*
* プリミティブ型とオブジェクト
*/

// プリミティブ型をラッパーオブジェクトで定義すると object型 として認識される。また、オブジェクトであるため、メソッドやプロパティも
// 参照可能になる。

const strObj = new String("arsenal");
console.log("strObj:", typeof strObj); // object

// ただ、プリミティブ型であってもメソッドなどを参照したい際に、暗黙的にラッパーオブジェクトへ変換してくれる。
// そのため、明示的にラッパーオブジェクトを定義する必要は無い。

const str = "アーセナル";
console.log("str:", str.length); // 5
