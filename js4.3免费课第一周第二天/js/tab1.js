var oTab = document.getElementById('tab');
var oLis = oTab.getElementsByTagName('li');
var oDivs = oTab.getElementsByTagName('div');
function tab(n){
    for(var i = 0; i<oLis.length;i++){
        oLis[i].className = "";
        oDivs[i].className = "";
    }
    oLis[n].className="active";
    oDivs[n].className="active";
}
for(var i = 0; i<oLis.length;i++){
    oLis[i].shenfenzheng = i;
    oLis[i].onmouseover = function () {
        //i点击哪个就把那个的索引传入我们的方法中
        tab(this.shenfenzheng);
    }
}

/*

for(var i = 0; i<oLis.length;i++){
    oLis[i].shenfenzheng = i;
    oLis[i].onmouseover = function () {
        for(var j = 0; j<oDivs.length;j++){
            oLis[j].className = "";
            oDivs[j].className = "";
        }
        this.className = 'active';
        oDivs[this.shenfenzheng].className="active";
    }
}
*/


//for(var i = 0; i<3;i++){
oLis[0].shengfeng = 0;
    oLis[0].onmouseover = function () {
        //i点击哪个就把那个的索引传入我们的方法中
        "tab(i);" tab(0)
    }
oLis[1].shengfeng = 1;
    oLis[1].onmouseover = function () {
        //i点击哪个就把那个的索引传入我们的方法中
        "tab(i);" tab(1)
    }
oLis[2].shengfeng = 2
    oLis[2].onmouseover = function () {
        //i点击哪个就把那个的索引传入我们的方法中
        "tab(i);"
    }
i = 3;