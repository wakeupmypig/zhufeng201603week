var DOM = (function () { //这个作用域不销毁
    var flag = "getComputedStyle" in window;
    return {
        listToArray: function (likeArray) {
            var arr = [];
            try{
                arr= Array.prototype.slice.call(likeArray);
            }catch (e){
                for(var i =0; i<likeArray.length;i++){
                    arr.push(likeArray[i]);
                }
            }
            return arr;
        },
        formatJSON: function (str) {
            return "JSON" in window?JSON.parse(str):eval('('+str+')');
        },
        win: function (attr,val) {
            if(typeof val=="undefined"){
                return document.documentElement[attr]||document.body[attr]
            }
            document.documentElement[attr]=val;
            document.body[attr]=val;
        },
        getCss: function (ele,attr) {
            var val = '';
            var reg = '';
            if(flag){
                val =  getComputedStyle(ele,null)[attr];
            }else{
                if(attr=="opacity"){
                    val =  ele.currentStyle["filter"];
                    reg = /^alpha\(opacity=(\d+(\.\d+)?)\)$/;
                    val = reg.test(val)?reg.exec(val)[1]/100:1;
                }else{
                    val =  ele.currentStyle[attr];
                }
            }
            reg=/^-?\d+(\.\d+)?(px|pt|em|rem|%)?$/;
            return reg.test(val)?parseFloat(val):val;
        },
        offset: function (ele) {
            var top = ele.offsetTop;
            var left = ele.offsetLeft;
            var p = ele.offsetParent;
            while (p){
                if(navigator.userAgent.indexOf("MSIE 8.0")===-1){
                    top+= p.clientTop;
                    left+= p.clientLeft;
                }
                top+= p.offsetTop;
                left+= p.offsetLeft;
                p = p.offsetParent;
            }
            return{
                top:top,
                left:left
            }
        }
    }
})();



