"use strict";

// 文字列とUnicode

/*
* CodePoint と CodeUnit の違い
* ・CodePoint は符号位置。文字のIDのようなモノ。JavaScript はUnicodeを採用している。
* ・CodeUnit は JavaScript の文字列の構成要素（UTF-16に変換されたモノ）。String.length は CodeUnit がいくつあるかを算出している。
*
* ・CodePoint を 16ビットの CodeUnit で表現するのが UTF-16 のエンコード方式。
* ・CodeUnit が表現できる範囲は 65536種類（2*16）。Unicode に登録されている CodePoint は10万種類を超えている。そのため、一部のもの除いては CodePoint と CodeUnit が１対１で表現でき同一の値である。
*  同じ値で表現できない文字（絵文字など）はUTF-16では2つの CodeUnit で表現している。2つの CodeUnit で表現する仕組みを「サロゲートペア」と呼ぶ。
*/
const str1 = "あ";
// CodePoint を取得
console.log(str1.codePointAt(0)); // 12354
// CodeUnit を取得
console.log(str1.charCodeAt(0)); // 12354

const str2 = "🍏";
// CodePoint を取得
console.log(str2.codePointAt(0)); // 127823
// CodeUnit を取得
console.log(str2.charCodeAt(0)); // 55356
console.log(str2.charCodeAt(1)); // 57167
// String.length は CodeUnit の合計
console.log(str2.length); // 2


/*
* サロゲートペア
* ・UTF-16 は以下の範囲のをサロゲートペアに利用している。上位サロゲートと下位サロゲートの CodeUnit が並んだ場合に１つの文字列（CodePoint）として扱う。
* 　・\uD800 ~ \uDBFF：上位サロゲートの範囲
* 　・\uDC00 ~ \uDFFF：下位サロゲートの範囲
* ・CodeUnit のエスケープシーケンス（ \uXXXX ）を２つ並べればサロゲートペアを表現できる。
* ・ES2015から CodePoint のエスケープシーケンス（ \u{XXXX} ）も使用できる。
*/
const str3 = "🐶";
console.log(str3.charCodeAt(0).toString(16)); // D83D
console.log(str3.charCodeAt(1).toString(16)); // DC36
console.log("\uD83D\uDC36"); // "🐶"
// CodePoint のエスケープシーケンス
const str3CodePoint = str3.codePointAt(0) // 128054
console.log(str3CodePoint.toString(16)); // 1F436
console.log("\u{1F436}"); // "🐶"