
function addTask() {
// テキストフィールドのDOMを取得
  // JSでの記載
  var text = document.getElementById("task");
  // jqueryでの記載
  // var text = $("#task");

// DOMから入力された文字を取り出す
  var task_text = text.value;

// div#listsのDOMを取得
  var text_lists = document.getElementById("lists");

// <p>タグを作る
  var ptag = document.createElement("p");

// テキストノードを作って取り出した文字をセット
  // JSでの記載
  var text_node = document.createTextNode(task_text);
  // jqueryでの記載
  // var text_node = document.createTextNode(task_text.val());


// 作った<p>タグにテキストノードをアペンド
  ptag.appendChild(text_node);

// div#listsのDOMに<p>タグをアペンド
  text_lists.appendChild(ptag);

}

// div#listsのDOMを取得
var textlists = document.getElementById("lists");

// DOMにイベントとremoveTask関数を紐づける
textlists.addEventListener("click",removeTask);

// クリックされた要素を削除する
function removeTask() {
  this.removeChild(event.target);
  // var parent = event.target.parentNode;
  // parent.removeChild(event.target);
}


