// div ID box1を取得する
var dom1 = document.getElementById("box1");
var dom2 = document.getElementById("box2");
var dom3 = document.getElementById("box3");
// alert(dom);
// alert("おはよう");
// console.log(dom);

// 取得したDOMにイベントと関数を紐づける
dom1.addEventListener("click",removeDiv);
dom2.addEventListener("click",removeDiv);
dom3.addEventListener("click",removeDiv);

// DOMを削除する関数の定義
function removeDiv() {
  // alert("OK");
  // alert(this);
  var parent = this.parentNode;
  // alert(parent);
  parent.removeChild(this);
}

// ulを取得する
var ul = document.getElementsByTagName("ul");
ul = ul[0];
// console.log(ul);

// ulにイベントと関数を紐づける
ul.addEventListener("click",setClass);

// .hitを設定する関数の定義
function setClass() {
  // console.log(event.target);
  var li = event.target;
  li.classList.toggle("hit")
}