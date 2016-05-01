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
        },
        children:function(ele,tagName){
            var arr = [];
            if(!(/MSIE (6|7|8)/.test(navigator.userAgent))){
                arr = this.listToArray(ele.children);
            }else{
                for(var i =0; i<ele.childNodes.length;i++){
                    var cur = ele.childNodes[i];
                    if(cur.nodeType==1){
                        arr[arr.length] = cur;
                    }
                }
            }
            if(typeof tagName=="string"){
                var newArr = [];
                for(var i =0; i<arr.length;i++){
                    var cur = arr[i];
                    if(cur.nodeName==tagName.toUpperCase()){
                        newArr.push(cur);
                    }
                }
                arr = newArr;
            }
            return arr;
        }
    }
})();



