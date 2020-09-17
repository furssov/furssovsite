function p1(){
    var n1,n2,n3;
    n1=document.getElementById('n1').value;
    n1=parseInt(n1);
    
    n2=document.getElementById('n2').value;
    n2=parseInt(n2);
    
    n3=Math.sqrt(n1*n1+n2*n2);
  
    document.getElementById('out').innerHTML=n3;
    
} 
function p2(){
    var n1,n2,n3;
    n1=document.getElementById('q1').value;
    n1=parseInt(n1);
    n2=document.getElementById('q2').value;
    n2=parseInt(n2);
   
     n3=Math.sqrt(n1*n1-n2*n2);
    document.getElementById('out1').innerHTML=n3;
}
function p4(){
    var a1,a3,cos;
    a1=document.getElementById('a1').value;
    a3=document.getElementById('a3').value;
    cos=a1/a3;
    
    document.getElementById('out3').innerHTML=cos;
    
    
}
function p5(){
    var a1,a2,tg;
    a1=document.getElementById('a1').value;
    a2=document.getElementById('a2').value;
    tg=a1/a2;
    document.getElementById('out4').innerHTML=tg;
    
}
function p3(){
    var a1,a3,sin;
    a1=document.getElementById('a1').value;
    a3=document.getElementById('a3').value;
    sin=a1/a3;
    document.getElementById('out2').innerHTML=sin;
    
}
function p6(){
    var a1,a2,ctg;
    a2=document.getElementById('a2').value;
    a1=document.getElementById('a1').value;
    ctg=a2/a1;
    document.getElementById('out5').innerHTML=ctg;
    
}
function p7(){
    var a2,a3,sin;
    a2=document.getElementById('a2').value;
    a3=document.getElementById('a3').value;
    sin=a2/a3;
    document.getElementById('out6').innerHTML=sin;
    
    
}function p8(){
    var a2,a3,cos;
    a2=document.getElementById('a2').value;
    a3=document.getElementById('a3').value;
    cos=a2/a3;
    
    document.getElementById('out7').innerHTML=cos;
    
    
}