"use strict";

// プロトタイプオブジェクト

/*
* Object のインスタンスは自動的に prototype という特殊なプロパティが追加されている。prototype は Object.prototype を継承している。
* Object.prototype　オブジェクトにはメソッドが定義されており、プロトタイプメソッドと呼ばれる。以下のようなプロトタイプメソッドが存在する。
* ・toString()
* ・valueOf()
* ・hasOwnProperty() ...etc
*
*/

const obj = {
  key: "value"
}
console.log(obj.toString() === Object.prototype.toString())  // true

/*
* プロトタイプメソッドとインスタンスメソッドの優先順位
* ・インスタンスメソッドが優先される
*/
const obj2 = {
  toString() {
    return "インスタンスメソッドが優先される"
  }
}
console.log(obj2.toString())  // "インスタンスメソッドが優先される"