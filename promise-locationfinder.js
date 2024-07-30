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