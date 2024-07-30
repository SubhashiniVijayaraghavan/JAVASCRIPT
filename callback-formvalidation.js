function formvalidation(){
    console.log(10);
    formvalidationcompleted();
}
function formvalidationcompleted(){
    console.log("yes you have submitted the form completely");
}
formvalidation();
//using arrow function and timesetout
function formvalidation(){
    setTimeout(()=>{
        console.log(10);
        formvalidationcompleted();

    },2000);
}
function formvalidationcompleted(){
    console.log("yes you have submitted the form completely");
}
formvalidation();
function formvalidation(fvc){
    setTimeout(()=>{
        console.log(10);
       fvc;

    },2000);
}
function formvalidationcompleted(){
    console.log("yes you have submitted the form completely");
}
formvalidation(formvalidationcompleted);
function formvalidation(fvc){
    setTimeout(()=>{
        console.log(10);
       console.log(fvc);

    },2000);
}
function formvalidationcompleted(){
    console.log("yes you have submitted the form completely");
}
formvalidation(formvalidationcompleted);
function formvalidation(fvc){
    setTimeout(()=>{
        console.log(10);
       fvc();

    },2000);
}
function formvalidationcompleted(){
    console.log("yes you have submitted the form completely");
}
formvalidation(formvalidationcompleted);

 
setTimeout
console.log("welcome");
setTimeout(function amma(){
    console.log("amma");
},2000);

