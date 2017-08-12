function tribleMutiply(num){
    return num*num*num;
}
function flowerNum(n){
    var unit, decade, hundreds;
    var res = [];
    for(var i = 100; i < n; i++){
        unit = (i%100)%10;
        decade = (parseInt(i/10))%10;
        hundreds = parseInt(i/100);
        if(tribleMutiply(unit)+tribleMutiply(decade)+tribleMutiply(hundreds) === i){
            res.push(i);
        }
    }
    return res;
}
var Number = 1000;
console.log(Number +"以内的水仙花数字有：\n"+flowerNum(Number));
