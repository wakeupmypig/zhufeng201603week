var oTab = document.getElementById("tab");
//拿到页面上唯一的id
var oLis= oTab.getElementsByTagName("li"); //context document是所有的
var oDivs= oTab.getElementsByTagName("div");
//获取我们要操作的li div
function tab(){

}
for(var i =0; i<oLis.length;i++) {
    oLis[i].zhufeng=i;
    //自定义属性
    oLis[i].onclick = function () {
        for(var j =0; j<oLis.length;j++){
            oLis[j].className="";
            oDivs[j].className="";
        }
        oLis[this.zhufeng].className="select";
        oDivs[this.zhufeng].className="select";
    }
}