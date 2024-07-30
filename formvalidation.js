// function formvalidation(){
//     console.log(10);
//     formvalidationcompleted();
// }
// function formvalidationcompleted(){
//     console.log("yes you have submitted the form completely");
// }
// formvalidation();
//using arrow function and timesetout
// function formvalidation(){
//     setTimeout(()=>{
//         console.log(10);
//         formvalidationcompleted();

//     },2000);
// }
// function formvalidationcompleted(){
//     console.log("yes you have submitted the form completely");
// }
// formvalidation();
// function formvalidation(fvc){
//     setTimeout(()=>{
//         console.log(10);
//        fvc;

//     },2000);
// }
// function formvalidationcompleted(){
//     console.log("yes you have submitted the form completely");
// }
// formvalidation(formvalidationcompleted);
// function formvalidation(fvc){
//     setTimeout(()=>{
//         console.log(10);
//        console.log(fvc);

//     },2000);
// }
// function formvalidationcompleted(){
//     console.log("yes you have submitted the form completely");
// }
// formvalidation(formvalidationcompleted);
// function formvalidation(fvc){
//     setTimeout(()=>{
//         console.log(10);
//        fvc();

//     },2000);
// }
// function formvalidationcompleted(){
//     console.log("yes you have submitted the form completely");
// }
// formvalidation(formvalidationcompleted);

 
//setTimeout
// console.log("welcome");
// setTimeout(function amma(){
//     console.log("amma");
// },2000);
/*using normal function
function islocation (loc,time){

}*/
//using arrow function
islocation =(loc,time)=>{
    local="SKCET";
    time1=2000;
    if(loc===local && time1<=time){
        return true;
    }
    else{
        return false;
    }
}
//function locationfounder(){}
//arrow function
 locationfounder=()=> {
   return new Promise((locfound, locnotfound) => {
    time=2000;
    loc="SKCET";
    if(islocation(loc,time)){
        locfound("LOcation is found");
    }
    else{
        locnotfound("Location not found");
    }
        
    })
   
    
}
locationfounder().then(val=>{
    console.log(val);
}).catch(val=>{
    console.log(val); 
})