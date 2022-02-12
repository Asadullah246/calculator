try{
    let result=document.querySelector("#result");

function del(){
    result.value="";
}
function calculator(x){
    result.value+=x;
}
function answer(){
    let a=eval(result.value);
    result.value=a;
}

}
catch(e){
    console.log(e);
}