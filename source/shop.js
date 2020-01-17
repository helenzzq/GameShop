function noshop(){
	alert("You haven't sign in!");
	document.getElementById("signup").style.display = "block";
	document.getElementById("cover").style.display = "block";	
}
function hid(){
	document.getElementById("cover").style.display = "none";
	document.getElementById("signup").style.display = "none";
	
}
function submitFunction()
	{
	 
   if(username.value==""||password.value=="")
   {
  alert("Both fields can't be empty."  );return false;
    }
	else{
	
	if(username.value=="Helen")
	  {
	  if(password.value=="123456")
	  { alert("Login successfully!");
	   
     
	 }
	  else{
	  alert("Password do not match");return false;
	  }
	}
	  else{
	     alert("User doesn't exist");return false;
  }
		  
}
}	
function signup(){
 location.href ="signup2.html";
}



function cts(){document.getElementById("shoppingcart").style.display="none";}


/*
function shop(itemtoadd){
var itm=document.getElementById(itemtoadd);
var cl=itm.childNodes[2];
var cln=itm.cloneNode(true);
var hey=cl.cloneNode(true);
//var node=document.createElement("li");
var list=document.getElementById("shoppingcart");
var ray=document.getElementById("cart1");
ray.appendChild(cln,hey);

list.insertBefore(ray,list.childNodes[0]);
alert("Adding successfully");
document.getElementById("shoppingcart").style.display="block";

cln.childNodes[1].height=110;
cln.childNodes[1].width=100;

AddRemoveObject(itemtoadd);
}
*/




