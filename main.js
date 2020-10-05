var names=["Swati Saha","Divyanshi Saha", "Daiwik Saha", "Tapan Saha" ];
var images=["Mother.jpg", "Sister.jpg", "Greg.png", "Father.png"];
var i=0;

function ChangeName()
{
document.getElementById("image").src=images[i];
document.getElementById("familyname").innerHTML=names[i];
i++; 
if (i==4){
i=0;    
}  
}









    

