"use strict";

// オブジェクト


/*
* Object.freeze() メソッド
* ・変更不可のオブジェクトになる
*/
const obj = {
  key: "value"
}
Object.freeze(obj);
obj.key = "value2";  // Uncaught TypeError: Cannot assign to read only property 'key' of object '#<Object>'