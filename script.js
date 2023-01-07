function show(){
    var small=document.getElementById("small");
    var medium=document.getElementById("medium");
    var large=document.getElementById("large");
    var your=document.getElementById("name").value;
    // var myarray=[small,medium,large];
    // var pepper=[pyes,pno]
    // var chees=[cyes,cno]
    var bill=0;
    if(small.checked){
        bill+=60;
        document.getElementById("s").innerHTML="your pizza size small  :"+bill;
    }
    if(medium.checked){
        bill+=110;
        document.getElementById("s").innerHTML="your pizza size medium  :"+bill;
    }
  
    if(large.checked){
        bill+=140;
        document.getElementById("s").innerHTML="your pizza size large  :"+bill;
    }
    if(small.checked&&medium.checked){
        document.getElementById("s").innerHTML="your pizza size small,medium  :"+bill;
    }
    if(small.checked&&large.checked){
        document.getElementById("s").innerHTML="your pizza size small,large :"+bill;
    }
    if(medium.checked&&large.checked){
        document.getElementById("s").innerHTML="your pizza size medium,large  :"+bill;
    }
    document.getElementById("s").innerHTML="your pizza size small,medium,large  :"+bill;
 
    
    if(pyes.checked){
        bill+=5;
        document.getElementById("p").innerHTML="you have add pepper amount:'10'";
    } 
   if(cyes.checked){
    bill+=10;
    document.getElementById("c").innerHTML="your have add chess amount:'20'";
   }


   document.getElementById("result").innerHTML="total bill amount : "+bill;
document.getElementById("myname").innerHTML=your;
 
}
