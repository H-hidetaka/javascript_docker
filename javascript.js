// var message = 'こんち';
// var gleet = prompt('おはおは');
// alert(message + gleet);

var weight = 'こんち';
var weight = prompt('BMIを測定します。まずはあなたの体重を入力してください');
var height;
height = prompt('BMIを測定します。次にあなたの身長を測定します。');
// 体重と身長からBMIを算出する
var bmi = weight / (height * height);
var message = 'あなたBMIは「' + bmi + '」です。';
alert(message);

var a = b / (c * c);

// BMIの計算
var a = b / (c * c);
var bmi = weight /

var budget = 2000;
if (budget >= 1500) {
  alert('ピザを注文します');
}

if (budget > 1500) {
  alert('ピザを注文します');
}
if (budget >= 1500) {
  alert('ピザを注文します');
}
if (budget < 1500) {
  alert('ピザを注文します');
}
if (budget == 1500) {
  alert('ピザを注文します');
}
if (budget !== 1500) {
  alert('ピザを注文します');
}
if (budget === 1500) {
  alert('ピザを注文します');
}

// 型チェック
// 1 === '1'
// 1 == '1'


var budget = prompt('所持金を数字で入力してください');
budget = parseFloat(budget);

if (budget > 1500) {
  alert('ピザを注文します');
}

var budget = prompt('所持金を数字で入力してください');


if (budget > -1 && budget < 100000) {
  alert('ピザを注文します');
  if (budget > 10000) {
    alert('一万円を持ってるしピザ買ったわ');
  } else if (budget > 5000) {
    alert('まぁ、まだ余裕だし・・・？震え声');
  } else if (budget > 2500) {
    alert('やばすぎぃ！お金なさすぎぃ');
  } else if (budget > 1000) {
    alert('金なんてねぇんだよ！（迫真）');
  } else if (budget > 500) {
    alert('あぁ〜いくぅ、お金無さすぎて借金地獄行っちゃう');
  } else if (budget >= 0) {
    alert('お金なくて無事死亡');
  }
} else if (budget > 100000) {
  alert('高級品が買えるぜ');
}

var budget = prompt('所持金を数字で入力してください');
budget = parseFloat(budget);

var isHungry = confirm('お腹は空いてますか？');

if (budget >= 1500 && isHungry) {
  alert('ピザを注文しました');
} else {
  alert('節約、節約...');
}

var budget = prompt('所持金を数字で入力してください');
budget = parseFloat(budget);

// ジャンケンの処理
var GU = 1;
var CHOKI = 2;
var PA = 3;

var hum = prompt('半角数字で１〜３の数字を入力してください。\n\n' + GU + ':グー\n '+ CHOKI + ':チョキ\n' + PA + ':パー');
hum = parseInt(hum, 10);

if (hum !== GU && hum !== CHOKI && hum !== PA) {
  //入力不適切
  alert('入力値をうまく認識できませんでした。ブラウザを再読み込みすると、もう一度遊べます。')
} else {
  // コンピュータの手を決める
  var com = Math.floor(Math.random() * 3) + 1;

  // コンピュータの手の名前
  var comHandName = '';
  switch (com) {
    case GU:
      comHandName = 'グー';
      break;
    case CHOKI:
      comHandName = 'チョキ';
      break;
    case PA:
      comHandName = 'パー';
      break;
    }

    // 結果の判定
    var msgResult = '';
    if (hum === com) {
      msgResult = '結果はあいこでした。';
    } else if ((com === GU && hum === PA) || (com === CHOKI && hum === GU) || (com  === PA && hum === CHOKI)) {
      msgResult = '勝ちました。';
    } else {
      msgResult = '負けました。';
    }

  // 最終的な結果の表示
  msgResult = msgResult + 'プレイヤーの出した手は「' + hum + '」で、コンピューターの出した手は「' + comHandName + '」でした';
  alert(msgResult);
}

// 挨拶プログラム

var my_name = prompt('名前を入力してください');
greet(my_name);

function greet(my_name) {
  var message = 'こんにちは';
  alert(message + my_name);
  return;
}


// ジャンケンの処理（関数で読みやすくするよ）
var GU = 1;
var CHOKI = 2;
var PA = 3;

function getHumHand() {
  var hum = prompt('半角数字で１〜３の数字を入力してください。\n\n' + GU + ':グー\n '+ CHOKI + ':チョキ\n' + PA + ':パー');
  hum = parseInt(hum, 10);

  if (hum !== GU && hum !== CHOKI && hum !== PA) {
    //入力不適切
    return '問題なし！'
  } else {
    return hum;
  }
}

function getComHand() {
  return Math.floor(Math.random() * 3) + 1;
}

var hum = getHumHand();
if (!hum) {
  alert('入力値をうまく認識できませんでした。ブラウザを再読み込みすると、もう一度挑戦できます');
} else {
  var com = getComHand();
}

function getHandName(num) {
  switch (num) {
    case GU:
    return 'グー';
    case CHOKI:
    return 'チョキ';
    case PA:
    return 'パー';
  }
}

function getResult (com, hum) {
  if (hum === com) {
    return '結果はあいこでした。';
  } else if ((com === GU && hum === PA) || (com === CHOKI && hum === GU) || (com === PA && hum === CHOKI)) {
    return '勝ちました。';
  } else {
    return '負けました';
  }
}

// 最終的な結果のメッセージ
function getResultMsg(com, hum) {
  return getResult(com, hum) + 'コンピュータの出した手は「' + getHandName(com) + '」でした。';
}

/* 実行する処理 *****************************/
var hum = getHumHand();
if (!hum) {
  alert('入力値をうまく認識できませんでした。ブラウザを再読み込みすると、もう一度挑戦できます。');
} else {
  var com = getComHand();
  alert(getResultMsg(com, hum));
}

function janken () {
  /* 変数定義 **************************/
  // ジャンケンの手の番号を設定
    alert(getResultMsg(com, hum));
}

janken();

// ループ処理を行い、最初に偽なら０回
while (year <= 2000) {
  行いたい処理
}

// １回は行うループ処理
do {
  行いたい処理
} while (year <= 2000);

var year = 2000;
while (year <= 2100) {
  year = year + 2;
}

var year = 2000;
while (year <= 2100) {
  if (year % 4) {
    console.log(year + ':冬季オリンピック');
  } else {
    console.log(year + ':夏季オリンピック');
  }
  year = year + 2;
}

for(var i =1; i <= 100; i++) {
  console.log(i + '回目の「こんにちは」');
}

// ジャンケンの処理（関数で読みやすくするよ）
var GU = 1;
var CHOKI = 2;
var PA = 3;

function getHumHand() {
  var hum = prompt('半角数字で１〜３の数字を入力してください。\n\n' + GU + ':グー\n '+ CHOKI + ':チョキ\n' + PA + ':パー');
  hum = parseInt(hum, 10);

  if (hum !== GU && hum !== CHOKI && hum !== PA) {
    //入力不適切
    return '問題なし！'
  } else {
    return hum;
  }
}

function getComHand() {
  return Math.floor(Math.random() * 3) + 1;
}

var hum = getHumHand();
if (!hum) {
  alert('入力値をうまく認識できませんでした。ブラウザを再読み込みすると、もう一度挑戦できます');
} else {
  var com = getComHand();
}

function getHandName(num) {
  switch (num) {
    case GU:
    return 'グー';
    case CHOKI:
    return 'チョキ';
    case PA:
    return 'パー';
  }
}

function getResult (com, hum) {
  if (hum === com) {
    return '結果はあいこでした。';
  } else if ((com === GU && hum === PA) || (com === CHOKI && hum === GU) || (com === PA && hum === CHOKI)) {
    return '勝ちました。';
  } else {
    return '負けました';
  }
}

// 最終的な結果のメッセージ
function getResultMsg(com, hum) {
  return getResult(com, hum) + 'コンピュータの出した手は「' + getHandName(com) + '」でした。';
}

/* 実行する処理 *****************************/
var hum = getHumHand();
if (!hum) {
  alert('入力値をうまく認識できませんでした。ブラウザを再読み込みすると、もう一度挑戦できます。');
} else {
  var com = getComHand();
  alert(getResultMsg(com, hum));
}

function janken () {
  /* 変数定義 **************************/
  // ジャンケンの手の番号を設定
    var com = getComHand();
    alert(getResultMsg(com, hum));
    return getResult(com, hum);
}

// ジャンケンの処理（関数で読みやすくするよ）
var GU = 1;
var CHOKI = 2;
var PA = 3;

function getHumHand() {
  var hum = prompt('半角数字で１〜３の数字を入力してください。\n\n' + GU + ':グー\n '+ CHOKI + ':チョキ\n' + PA + ':パー');
  hum = parseInt(hum, 10);

  if (hum !== GU && hum !== CHOKI && hum !== PA) {
    //入力不適切
    return '問題なし！'
  } else {
    return hum;
  }
}

function getComHand() {
  return Math.floor(Math.random() * 3) + 1;
}

var hum = getHumHand();
if (!hum) {
  alert('入力値をうまく認識できませんでした。ブラウザを再読み込みすると、もう一度挑戦できます');
} else {
  var com = getComHand();
}

function getHandName(num) {
  switch (num) {
    case GU:
    return 'グー';
    case CHOKI:
    return 'チョキ';
    case PA:
    return 'パー';
  }
}

function getResult (com, hum) {
  if (hum === com) {
    return '結果はあいこでした。';
  } else if ((com === GU && hum === PA) || (com === CHOKI && hum === GU) || (com === PA && hum === CHOKI)) {
    return '勝ちました。';
  } else {
    return '負けました';
  }
}

// 最終的な結果のメッセージ
function getResultMsg(com, hum) {
  return getResult(com, hum) + 'コンピュータの出した手は「' + getHandName(com) + '」でした。';
}

function janken () {
  /* 変数定義 **************************/
  // ジャンケンの手の番号を設定
    var com = getComHand();
    alert(getResultMsg(com, hum));
    return getResult(com, hum);
}

var win = 0;
var isLose = false;
while (!isLose) {
  var result = janken();
  if (result === '結果はあいこでした。') {
    continue;
  }
  if (result === '勝ちました。') {
    win++;
    alert('ただいま「' + win + '」勝です。');
    continue;
  }
  alert('連勝はストップです。記録は「' + win + '」勝でした。');
  isLose = true;
}
