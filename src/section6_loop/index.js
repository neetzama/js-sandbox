"use strict";

// ループと反復処理


/*
* for...in文
* ・オブジェクトのプロパティを反復処理をする
* ・順番が保証されていない。順番を保証したい場合は for...of や forEach() を利用する。
* ・配列の使用は非推奨
* ・デバッグ時に利用されるらしい。 https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/for...in#for...in_%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B%E7%90%86%E7%94%B1
*/
const arsenal = {
  gk: "ラムズデール",
  df: "トミヤス",
  mf: "トーマス",
  fw: "ベントナー",
};

for(const position in arsenal) {
  console.log(`${position}:`, arsenal[position])
}

// 👇非推奨
const array = [1, 2, 3];
for(const num in array) {
  console.log(`${num}:`, array[num])
}