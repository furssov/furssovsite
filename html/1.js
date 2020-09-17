function p1(){
    var n1,n2,n3;
    
    
    n3=document.getElementById('o1').value;
    n3=parseInt(n3);
    n1='✔';
    n2='X'; 
if (n3!=5) 
    {
        
        document.getElementById('o2').innerHTML=n2;
            
        }
    else
        {
            
             document.getElementById('o2').innerHTML=n1;
        }
}
function p2(){
    var n1,n2,n3;
    n1='✔'
    n2='X'; 
    n3=document.getElementById('o3').value;
    n3=parseInt(n3);
    if (n3!=12){
        document.getElementById('o4').innerHTML=n2;
        
    }
    else
        {
             document.getElementById('o4').innerHTML=n1;
    
} 
    

}
function p3(){
    var n1,n2,n3;
    n1='✔'
    n2='X'; 
    n3=document.getElementById('o5').value;
    n3=parseInt(n3);
    if (n3!=5){
        document.getElementById('o6').innerHTML=n2;
        
    }
    else
        {
             document.getElementById('o6').innerHTML=n1;
            
    
}
}
    function p4(){
    var n1,n2,n3;
    n1='✔'
    n2='X'; 
    n3=document.getElementById('o7').value;
    n3=parseFloat(n3);
    if (n3!=0.5){
        document.getElementById('o8').innerHTML=n2;
    
    }
    else
        {
             document.getElementById('o8').innerHTML=n1;        
    
}
    }
function p5(){

}