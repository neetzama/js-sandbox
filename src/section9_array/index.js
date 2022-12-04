"use strict";

// 配列


/*
* 疎な配列
* ・未定義な箇所がある配列のこと
* ・length としてはカウントされる
*/
const array = [1, , 3];
console.log(array.length); // 3
console.log(array[1]); // undefined


/*
* Array.prototype.at メソッド
* ・相対的なインデックスの値を取得できる
* ・末尾から数えた値を取得可能。array2[array2.length -1] と記述する必要がなくなる。
*/
const array2 = ["a", "b", "c", "d", "e"];
console.log(array2.at(0));  // "a"
console.log(array2.at(1));  // "b"

console.log(array2.at(-1));  // "e"
console.log(array2.at(-2));  // "d"