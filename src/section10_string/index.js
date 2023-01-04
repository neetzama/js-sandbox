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

/*
* 文字列の検索
* 文字列の検索には主に以下の３つがある。
* ・マッチした箇所のインデックスを取得
* ・マッチした文字列の取得
* ・マッチしたかどうかの真偽値の取得
*/

// マッチした箇所のインデックスを取得
// indexOf(), lastIndexOf()メソッドがある
const str3 = "アーセナルのじゅんいはいちい";
console.log(str3.indexOf("ル")); // 4
console.log(str3.indexOf("か")); // -1
console.log(str3.lastIndexOf("ん")); // 8

// マッチした文字列の取得
const str4 = "アーセナルは怪我人が多い";
const target = "多い";
const index = str4.indexOf(target);
if(index !== -1) {
  console.log(`${target}が見つかった`);
} else {
  console.log(`${target}が見つからなかった`);
}

// マッチしたかどうかの真偽値の取得
const str5 = "アーセナルの放送が有料になった";
// 指定した文字列で始まるか
console.log(str5.startsWith("アーセ")); // true
console.log(str5.startsWith("なった")); // false
// 指定した文字列で終わるか
console.log(str5.endsWith("アーセ")); // false
console.log(str5.startsWith("なった")); // true
// 含まれているか
console.log(str5.includes("アーセ")); // true
console.log(str5.includes("なった")); // true


/*
* 正規表現オブジェクト
*/

/*
* 1. 以下は正規表現での特殊文字である。そのため、文字列として認識させるには \（バックスラッシュ）でエスケープさせる必要がある。
*    \ ^ $ . * + ? ( ) [ ] { } |
*
* 2. 以下の２パターンで表現できる。
* ・正規表現リテラル
* ・RegExpコンストラクタ
*/
const patternA = /a+/; // 正規表現リテラル
const patternB = new RegExp("a+"); // RegExpコンストラクタ

/*
* 3. 正規表現リテラルとRegExpコンストラクタの違いは正規表現が読み込まれるタイミング
* ・正規表現リテラル -> ソースコードをパースしたタイミング
* ・RegExpコンストラクタ -> 読み出されたタイミング。特徴を活かして変数と組み合わせた（動的な）正規表現が可能
*/
const funcA = () => {
  // const patternA = /[/; // SyntaxError が発生する
};
const funcB = () => {
  const patternA = new RegExp("/[/"); // funcB() が呼び出されたタイミングでエラーが発生する
};
// 変数と組み合わせたパターン
const spaceCount =  3;
const pattern = new RegExp(`\\s{${spaceCount}}`);







