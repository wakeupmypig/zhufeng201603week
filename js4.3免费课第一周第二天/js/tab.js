/*
* 操作谁获取谁
*
* */
var oTab = document.getElementById('tab');
//拿到唯一的盒子
var oLis = oTab.getElementsByTagName('li');
//拿到所有li
var oDivs = oTab.getElementsByTagName('div');
//拿到所有div;
//制定一个切换的方法
function tab(n){
    for(var i = 0;i<oDivs.length;i++){//把所有li和div都通过索引都取出来
        oLis[i].className=""; //oDivs和oLis个数都一样
        oDivs[i].className=""; //将div和li的样式都置为空
    }
    oLis[n].className = "active";
    oDivs[n].className = "active";
}
for(var i =0; i<oDivs.length;i++){
    oLis[i]["zhufeng"] = i;
    oLis[i].onclick = function () {
        //是我们点击时要执行的操作
        tab(this["zhufeng"]);
    }
}

