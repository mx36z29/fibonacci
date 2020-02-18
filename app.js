'use strict';
//function fib(n) {
//    if (n === 0) {
//        return 0;
//    } else if (n === 1) {
//        return 1;
//    }
//    return fib(n - 1) + fib(n - 2);
//}
//↑これだと毎回計算結果をリセットするため、忘れてしまう。数字が上がる度「計算の数」が増えるため処理が遅い。

//console.log(fib(0));
//console.log(fib(1));
//console.log(fib(2));

//const length = 40;
//for(let i = 0; i <= length; i++){
//    console.log(i + "番目：" + fib(i));
//}


const memo = new Map();
//答えを覚えておくmemoという連想配列を作る。まだ中身は空っぽ
memo.set(0, 0);
memo.set(1, 1);
//そのmemoに0番目は0、1番目は1、という答えを入れてる
function fib(n){
//n番目の答えを知ってるかどうかのチェック。hasは「キーの値を持ってたらtrue持ってないならfalse」をチェックする関数。
    if(memo.has(n)){
        return memo.get(n);
        //もし持ってるなら、答えを返して終わり。
    }
    //知らなかった時だけ計算する。一つ前と、二つ前を足して、答えを求める。
    //n-1の一つ前も、n-2の二つ前も、memoに追加されてるので、再度計算しなくても一度の足し算で済む。
    const value = fib(n - 1) + fib(n - 2);
    //新しい答えがわかったら、memoに追加していく。そうやって答えのメモを充実させていく。
    memo.set(n, value);
    return value;
    //↑計算結果を返すためにやってる。これを返さないとmemoが追加されるだけで、計算結果を返さないため出力ができない。
}
const length = 100;
for(let i = 0; i <= length; i++){
    console.log(fib(i));
}
//記述は複雑になｔったが、記憶しておく手間を加えたことで処理が早くなる。