function multiplication(a,b){
    var result = 0;

    for(var i=0;i<b;i++){
        result = result + a;
    }
    return result;
}

var response = multiplication(3,5);
console.log(response);