var oUl = document.getElementById('oUl');
var oLis = oUl.getElementsByTagName('li');
for(var i = 0; i<oLis.length;i++){
    var oli = oLis[i];
    if(i%2){
        oli.className = 'c1';
        oli.zhufeng = 'c1';
    }else{
        oli.className = 'c0';
        oli.zhufeng = 'c0';
    }
    oli.onmouseover = function () {
        console.log(i);
        this.className = 'c3';
    };
    oli.onmouseout = function () {
        //i
        this.className = this.zhufeng;
    }
}



/* //多行三元表达式
 i%2?(oli.className = 'c1',oli.zhufeng = 'c1'):(oli.className = 'c0',oli.zhufeng = 'c0');*/


