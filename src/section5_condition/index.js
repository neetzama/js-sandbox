"use strict";

// 条件分岐

/*
* switch文
* ・break を省略すると一致した条件以降のブロックが実行されてしまう
* ・関数と組みわせて return を用いると一致した処理を実行し、switch文を抜けてくれる
*/
const position = "MF";
switch (position) {
  case "GK":
    console.log("ラムズデール");
    break;
  case "DF":
    console.log("トミヤス");
    break;
  case "MF":
    console.log("トーマス");
    break;
  case "FW":
    console.log("ベントナー");
    break;
  default:
    console.log("アルテタ");
    break;
}
// "トーマス" と出力される


switch (position) {
  case "GK":
    console.log("ラムズデール");
  case "DF":
    console.log("トミヤス");
  case "MF":
    console.log("トーマス");
  case "FW":
    console.log("ベントナー");
  default:
    console.log("アルテタ");
}
// "トーマス"
// "ベントナー"
// "アルテタ" と出力される


const fn = (position) => {
  switch (position) {
    case "GK":
      return console.log("ラムズデール");

    case "DF":
      return console.log("トミヤス");

    case "MF":
      return console.log("トーマス");

    case "FW":
      return console.log("ベントナー");

    default:
      return console.log("アルテタ");
  }
}
fn(""); // "トーマス"