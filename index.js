
const topla= function(x,y){
    return x+y;
}

const cikar= function(x,y){
    return x-y;
}

const carp=function(x,y){
    return x*y;
}

const  bolme= function(x,y){
    return x/y;
}

const factor = (x,y) => {

    if(x ===1 ){
        return x;
    }

    return x * factor(x-1);
}

module.exports = {
    topla,
    cikar,
    bolme,
    carp,
    factor
}
