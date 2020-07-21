function printMultiplyTableByRange (start, end) {
    if(isValid(start,end)){
       return printMultiplyTable(start,end);
    }
    return "null";
}

function isValid(start,end){
    if(start>end||start<1||start>1000||end<1||end>1000){
        return false;
    }else{
        return true;
    }
}

function printMultiplyTable(start,end){
    var result='';
    for(var i=start;i<=end;i++){
        for(var j=start;j<=i;j++){
           result+=j+'*'+i+'='+j*i+'  ';
        }
        result+='\n';
    }
    return result;
}


module.exports = printMultiplyTableByRange;
