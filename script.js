function show(){
    var small=document.getElementById("small");
    var medium=document.getElementById("medium");
    var large=document.getElementById("large");
    // var myarray=[small,medium,large];
    var pepper=[pyes,pno]
    var chees=[cyes,cno]
    var bill=0;
    if(small.checked){
        bill+=80;
        document.getElementById("s").innerHTML="your pizza size small  :"+bill;
    }
    if(medium.checked){
        bill+=120;
        document.getElementById("s").innerHTML="your pizza size medium  :"+bill;
    }
    if(large.checked){
        bill+=160;
        document.getElementById("s").innerHTML="your pizza size large  :"+bill;
    }
    if(pyes.checked){
        bill+=10;
        document.getElementById("p").innerHTML="you have add pepper amount:'10'";
    } 
   if(cyes.checked){
    bill+=20;
    document.getElementById("c").innerHTML="your have add chess amount:'20'";
   }


   document.getElementById("result").innerHTML="total bill amount : "+bill;

 
}
