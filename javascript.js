    function display(x)
	 {
	    frm.txt.value=frm.txt.value+x;
		if(x=="=")
		{
			var t=evaluate(frm.txt.value);
			 if(t=="@")
				 frm.txt.value="error!";
			 else
				 frm.txt.value=t;
		}
	 }
	 function del()
	 {
	     var str=frm.txt.value;
	     frm.txt.value=str.substring(0,str.length-1);
	 }
	 function clean()
	 {
	     frm.txt.value="";
	 }
	 function evaluate(value)
	 {
		 var z;
		 var y;
		 var i=0;
		 var str=value;
		 if(!(isNaN(str[0])))
		 {
			 for(i=0;i<str.length;i++)
			 {
				 if(isNaN(str[i])&&str[i]!==".")
				 {
					 z=str.substring(0,i);
					 y=str.substring(i+1,str.length-1);
					 z=Number(z);
					 y=Number(y);
					 break;
				 }
			 }
			 if(str[i]=="+")
				 return z+y;
			 else if(str[i]=="-")
				 return z-y;
			 else if(str[i]=="*")
				 return z*y;
			 else if(str[i]=="/")
			 {
				 if(y==0)
					 return("@");
				else
				  return z/y;
			 }
			 else if(str[i]=="!")
			 {
				 var j=1;
				 while(z>0)
				 {
					 j*=(z--);
				 }
				 return j;
			 }
			 else if(str[i]=="%")
			 {
				 return z%y;
			 }
		 }
		 else
		 {
			 var z,y;
			 if(str[0]=="s"&&str[1]=="i")
			 {
				 z=str.substring(4,str.length-2);
				 return Math.sin(z);
			 }
			 else if(str[0]=="c")
			 {
				  z=str.substring(4,str.length-2);
				 return Math.cos(z);
			 }
			 else if(str[0]=="t")
			 {
				  z=str.substring(4,str.length-2);
				 return Math.tan(z);
			 }
			 else if(str[0]=="l"&&str[1]=="n")
			 {
				  z=str.substring(3,str.length-2);
				  if(z<=0)
					  return("@");
				 else 
					 return Math.log(z);
			 }
			 else if(str[0]=="l"&&str[1]=="o")
			 {
				  z=str.substring(4,str.length-2);
				  if(z<=0)
					  return("@");
				 else 
					 return Math.log(z)/Math.log(10);
			 }
			 else if(str[0]=="s"&&str[1]=="q"&&str[2]=="r"&&str[3]=="t")
			 {
				  z=str.substring(5,str.length-2);
				  if(z<0)
				  { z=Math.abs(z);
				  return (Math.sqrt(z)+"i");}
				  else 
					  return Math.sqrt(z);
			 }
			 else if(str[0]=="p")
			 {
				  var i;
				  for(i=4;i<str.length;i++)
				  {
					  if(isNaN(str[i])&&str[i]!=".")
					  {
						  z=str.substring(4,i);
					      y=str.substring(i+1,str.length-2);
						  break;
					  }
				  }
				  return Math.pow(z,y);
			 }
			 else if(str[0]=="e")
			 {
				  z=str.substring(4,str.length-2);
				 return Math.exp(z);
			 }
			 else if(str[0]=="h")
			 {
				var i;
				  for(i=4;i<str.length;i++)
				  {
					  if(isNaN(str[i])&&str[i]!=".")
					  {
						  z=str.substring(4,i);
					      y=str.substring(i+1,str.length-2);
						  break;
					  }
				  }
				return(hcf(z,y));
			 } 
			 else if(str[0]=="l"&&str[1]=="c")
			 {
				var i;
				  for(i=4;i<str.length;i++)
				  {
					  if(isNaN(str[i])&&str[i]!=".")
					  {
						  z=str.substring(4,i);
					      y=str.substring(i+1,str.length-2);
						  break;
					  }
				  }
				 return z*y/hcf(z,y);
			 }
			function hcf(a,b)
			{
               var temp;
                while(b!=0)
				{
                    temp=a%b;
					a=b;
					b=temp;
				}
				return a;
			}				
		 }
			 
	}