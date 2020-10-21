// 1.把水煮开
// 2.用沸水浸泡
// 3.把茶水倒进杯子
// 4.加柠檬

var Tea = function() {

}

var boilWater = function() {
    console.log("把水煮开");
}

var jingPao = function() {
    console.log("用沸水浸泡");
}

var putInCup = function() {
    console.log("把茶水倒进杯子");
}

var addLemon = function() {
    console.log("加柠檬");
}

Tea.prototype.init = function() {
    this.boilWater();
    this.jingPao();
    this.putInCup();
    this.addLemon();
}


var oneTea =new Tea();
oneTea.init();

