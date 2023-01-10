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
  console.log(Array.from([1, 2, 3])) // Uncaught TypeError: Array.from is not a function
}