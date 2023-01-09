function show(){
    var small=document.getElementById("small");
    var medium=document.getElementById("medium");
    var large=document.getElementById("large");
    var your=document.getElementById("name").value;
    var myarray=[];
    var pepper=[]
    var chess=[]
    var bill=0;
    if(your===""){
        alert("please enter your name");
    }
    else{
    if(small.checked){
        myarray.push("small")
        bill+=60;
    }
    if(medium.checked){
        myarray.push("medium");
        bill+=110;
    }
  
    if(large.checked){
        myarray.push("large");
        bill+=140;
    }
    
    if(pyes.checked){
        pepper.push("add_pepper &#8377;10");
        bill+=10;
    }
    else{
        pepper.push("no_add")
    }
   if(cyes.checked){
    chess.push("add_chess &#8377; 20");
    bill+=20;
   }
   else{
    chess.push("no_add");
   }
let addrow=document.getElementById("table");
let newcell=addrow.insertRow();
let cel1=newcell.insertCell(0);
let cel2=newcell.insertCell(1);
let cel3=newcell.insertCell(2);
let cel4=newcell.insertCell(3);
let cel5=newcell.insertCell(4);
cel1.innerHTML=your;
for(let i=0;i<myarray.length;i++){
    if(myarray[i]){
        cel2.innerHTML=myarray;
    }
}   
cel3.innerHTML=pepper;
cel4.innerHTML=chess;
cel5.innerHTML="&#8377;"+bill;

    }
   document.getElementById("form").reset();
}
