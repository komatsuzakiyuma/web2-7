
//答えを用意

var number=Math.floor(Math.random()*3);
var answer=parseInt(wnidow.prompt('数あてゲーム。０～２の数字を入力してください！'));

var message;
if(answer===number){
    message='あたり!';
}else if(answer < nuber){
    message='残念！もっと大きいです';
}else if(number < answer){
    message = '残念！もっと小さいです';

}

//結果を表示
document.getElementById('choice').textContent = message

