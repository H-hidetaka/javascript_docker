var practice = document.getElementById('practice');
practice.innerHTML = '<h1>れんしゅう</h1>';

practice.style.backgroundColor = '#999999';
practice.style.fontSize = '30px';
practice.style.color = '#FFFFFF';

//要素を追加します
var first = document.createElement('div');
first.setAttribute('id', 'first');
first.innerHTML = '<p>要素を追加</p>';
practice.insertBefore(first, null);

//さらに要素を追加します
var second = document.createElement('div');
second.setAttribute('id', 'second');
second.innerHTML = '<p>さらに要素を追加</p>';
practice.insertBefore(second, first);

// 要素を削除します
var parent = first.parentElement;
parent.removeChild(first);

//* プログラムで使用する変数の設定 *******************/
// フォームの要素を取得
var button = document.getElementById('button');
var form = document.getElementById('form');
var textarea = document.getElementById('textarea');

//* イベント処理 *******************/
// お問合せボタンを押した時
button.addEventListener('click', function() {
  // フォームを表示
  form.style.display = 'block';
});
// 文字数制限(getattributeは属性の任意の値を取得する。つまり、htmlのtextareのmaxlengthを見ている。)

var maxTextNum = textarea.getAttribute('maxlength');
// 残り時間
var reminingTimeNum = 10;


/*要素の追加 *******/
// 残り文字数を表示する要素の追加
var textMessage = document.createElement('div');
var parent = textarea.parentElement;
parent.insertBefore(textMessage, textarea);

textarea.addEventListener('keyup', function() {
  var currentTextNum = textarea.value.length;
  textMessage.innerHtml = '<p>あと「' + (maxTextNum - currentTextNum )+ '」文字入力できます。</p>';
});

// 残り時間の要素追加
var timeMessage = document.createElement('div');
var parent = insertBefore(timeMessage, null);

button.addEventListener('click' ,function(){
  //フォームを表示
  form.style.display = 'block';

  // タイマー処理で残り時間を表示
  var timerId = setInterval(function(){
    timeMessage.innerHTML = '<p>制限時間:' + reminingTimeNum + '秒</p>';
    if (reminingTimeNum <= 0) {
      alert('制限時間終了');
      clearInterval(timerId);
    }

    reminingTimeNum--;
  }, 1000);
});
// document.querySelector('.about');
// var element = document.querySelector('.about h2');

// setTimeoutメソッドによる繰り返しの処理の例
function foo () {
  //setTimeoutメソッドで1秒後に関数fooを呼び出す
  setTimeout(foo, 1000);
  console.log('繰り返し');
}
foo();

var drink = ['コーラ','オレンジジュース','烏龍茶',]
console.log(drink[0]);

// 飲料名をまとめた配列
var drink = ['コーラ','オレンジジュース','烏龍茶',]

// インデックスが[0]のデータにアクセスする
console.log(drink.length);                    // コンソールに「0」と表示される

// おみくじ作成
results = ['大吉', '吉' , '中吉' , '小吉' , '凶'];

// 配列resultsをコンソールに表示
console.log(results);

// インデックスが０の要素をコンソールに表示
console.log(results[0]);

// 配列に所属するデータをfor文で全て表示
for (var i = 0; i < results.length; i++) {
  console.log(results[i]);
}

// createElementメソッド
// タグを指定するためのメソッドで後述するsetattributeメソッドと合わせて使える
var element = document.createElement('h1')

//setattribueteメソッド
// 属性を指定するために、使用する。左に属性名、右に属性値を入れるhtmlinnerで入力する
element.setAttribute('id', 'first');

// インベントリスナーとは？
// イベント（ボタンをクリックした、キーボードのキーを押した、フォームを送信した。）などのイベントが行われた時に、対応して実行される関数を指定しておくことである。
// 基本的に無名関数を使う（関数を名前で指定する場合、その関数に引数を指定できない。）関数を使って行いたい処理を指定する方法がより一般的
// 引数の左がイベントタイプ名、右が実行したい関数
element.addEventListener('click', func);

// addEventListenerメソッドで無名関数を指定
element.addEventListener('click', function(){
  // 行いたい処理
})

// 以下addEventListenerメソッドの第１引数に使えるイベントタイプ
// click
// 要素クリック時
// dbclick
// 要素ダブルクリック時
// mouseout
// マウスポインタが要素上から出た時
// mouseover
// マウスポインタが要素上に乗った時
// mouseup
// マウスポインタを離した時
// mousedown
// マウスボタンを押しているとき
// mousemove
// マウスを動かしているとき

// キーボード操作
// keyup
// キーを離したとき
// keydown
// キーを押したとき
// keypress
// キーを押し続けている

// その他
// blur
// フォーカスが外れたとき
// focus
// フォーカスがあったとき
// change
// 内容が変更されたとき
// select
// テキストが選択されたとき
// submit
// フォームを送信しようとしたとき
// reset
// フォームがリセットされたとき
// abort
// 画像の読み込みを中断したとき
// error
// 画像の読み込み中にエラーが発生したとき
// load
// ページや画像の読み込みが完了したとき
// unload
// アンロード時（ペーじ遷移など）


// 配列に所属するデータをfor文で全て表示
for (var i = 0; i < results.length; i++) {
  console.log('index:' + i + 'データ:' + results[i]);
}

// メソッドの定義
