"use strict";

// 関数とスコープ

/*
* スコープチェーン
* ・スコープは以下の順番で変数を探索する
* 　1. INNER に変数が宣言されているか。無い場合は 2. へ
* 　2. OUTER に変数が宣言されているか。無い場合は 3. へ
* 　3. 一番外側（スコープが無い箇所）に変数が宣言されているか。
*/
const x = "global";
{
  // OUTER
  const x = "outer";
  {
    // INNER
    const x = "inner";
    console.log(x); // "inner"
  }
  console.log(x); // "outer"
}
console.log(x); // "global"


/*
* グローバルスコープ
* ・グローバルスコープには自分が定義した変数の他にデフォルトでビルドインオブジェクトが宣言されている。以下2つがビルドインオブジェクトにあたる。
* 　・ECMAScript の Array や RegExp などのコンストラクタ関数や undefined などの変数、isNaN のような関数など。
* 　・実行環境（ブラウザや Node.js など）に定義されている document や module。
* ・自分が定義した変数名とビルドインオブジェクトが被った場合、自分が定義した変数が優先される。そのため、以下のようなエラーが発生する。
*/
const Array = "stringArray";
{
  // console.log(Array.from([1, 2, 3])) // Uncaught TypeError: Array.from is not a function
}

/*
* 関数スコープとvarの巻き上げ
* ・var の巻き上げを理解するには「宣言」と「代入」から構成されると考える
* 　・宣言は近い関数、またはグローバルスコープの先頭に巻き上げられる
* 　・代入は部分はそのままの位置に残る
* ・let, const は巻き上げが起きないため、読み込んだ時点でエラー（ReferenceError）を吐く。
*/
// let の場合
// console.log(x3); // Uncaught ReferenceError: Cannot access 'x3' before initialization
let x3 = "let_x3";

/*
* 1. グローバルスコープ
*/
console.log(x1); // undefined
var x1 = "var_x1";

// 上記は以下と同様のことを行っている。
// スコープの先頭に宣言が巻き上げられる
var x2;
console.log(x2); // undefined
// 代入部分がそのままの位置に残る
x2 = "var_x2";


/*
* 2. 関数の先頭に巻き上げられた場合
*/
var x5 = 100;
function a(){
  console.log( x5 ); // undefined

  var x5 = 200;
  console.log( x5 ); // 200
}
a();

// 上記は以下と同様のことを行っている。
var x6 = 100;
function a2(){
  // 最も近い関数の先頭に宣言が巻き上げられる
  var x6;
  console.log( x6 ); // undefined

  var x6 = 200;
  console.log( x6 ); // 200
}
a2();

/*
* 3. 変数の巻き上げはブロックスコープを無視した場合
*/
function fn() {
  // 内側のスコープを参照できる
  console.log(x4); // => undefined
  {
    var x4 = "varのx4";
  }
  console.log(x4); // => "varのx"
}
fn();
