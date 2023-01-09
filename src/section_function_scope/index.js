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