var utils = {
    /**
     * @param likeArray要转换的类数组
     * @returns {Array} 转换好的数组
     */
    nodeListToArray: function (likeArray) {
        var arr = [];//要返回的数组
        try{
            //如果高版本浏览  就走上面的，如果异常就走下面的
            arr=Array.prototype.slice.call(likeArray);
        }catch (e){
            //一个个放到数组里
            for(var i =0;i<likeArray.length;i++){
                arr[arr.length]=likeArray[i];
            }
        }
        return arr;
    },
    jsonParse: function (str) {
        /* var obj = '';
        try {
            obj =  JSON.parse(str);
        }catch (e){
            obj = eval('('+str+')');
        }*/
        //看json在window中是否存在，存在json.parse不存在就是eval
        return "JSON" in window?JSON.parse(str):eval('('+str+')');
    }
}






