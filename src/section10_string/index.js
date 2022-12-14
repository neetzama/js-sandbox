"use strict";

// 文字列

/*
* 文字列とは
* ・コンピュータのメモリ上には「あ」という文字列をそのまま保存できないため、ビット列（2進数の列）に変換している。この変換作業を符号化（エンコード）という。
* ・符号化された文字にID（CodePoint）が降ってある一覧を符号化文字集合という。符号化文字集合は世界にいくつか存在する中でJavaScript（ECMAScript）はUnicodeを採用している。
* ・文字を実際にコンピュータで扱うためには CodePoint を CodeUnit に変換する必要がある。JavaScriptではUTF-16を採用している。
* ・UTF-16とは CodeUnit を符号なし（正の数）16ビット整数（0 から 65535）を使って表現する。
*/
// String.codePointAt() は文字列から CodePoint を返してくれる。
console.log("A".codePointAt(0));  // 65
console.log("🐱".codePointAt(0))  // 128049
console.log("🐱".codePointAt(1))  // 56369 <- CodeUnit を返している
// String.charCodeAt() は文字列から CodeUnit を返してくれる。0 から 65535 までの整数を返す。
console.log("A".charCodeAt(0))  // 65
console.log("A".charCodeAt(0).toString(16))  // 41 <- 65 を16進数に変換
console.log("A".charCodeAt(0).toString(2))  // 41 <- 65 を16進数に変換
console.log("🐱".charCodeAt(0))  // 55357
console.log("🐱".charCodeAt(1))  // 56369
// String.fromCharCode() は UTF-16 から文字列を返してくれる。
console.log(String.fromCharCode(65))  // "A"
console.log(String.fromCharCode(55357, 56369))  // "🐱"


/*
* String.prototype.at()
* ・文字列を相対的に取得できる
*/
const str2 = "文字列";
console.log(str2.at(0))  // "文"
console.log(str2.at(1))  // "字"
console.log(str2.at(2))  // "列"
console.log(str2.at(-1))  // "列"
console.log(str2.at(-2))  // "字"
console.log(str2.at(-3))  // "文"
console.log(str2.at(-4))  // undefined

/*
* 文字列の比較
* ・比較演算子や関係演算子は文字列の CodeUnit を比較している。
*/
const abc = "ABC";
const abd = "ABD";
console.log(abc.codePointAt(2)) // 67
console.log(abd.codePointAt(2)) // 68
console.log(abc < abd) // true