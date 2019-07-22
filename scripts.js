var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var femaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var maleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function myFunction() {
  var DD = parseFloat(document.getElementById("day").value);
  var MM = parseFloat(document.getElementById("month").value);
  var YY = parseFloat(document.getElementById("year").value);
  var CC = ((YY - 1) / 100) + 1;
  var number= (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
 
  /* convert the number of day to corresponding dayname*/
  var ee = Math.round(number);

  var gender = document.getElementById("select").value;

  
  /*  dayName and Akan-mane will be displayed at the same time */
  if ((gender === "male")&&(DD>0&&DD<=31)&&(MM>1&&MM<=12)) {
    console.log( "you are born on "+ days[ee-1] + " and your akan name is "+  maleNames[ee-1]);
    document.getElementById("name").innerHTML = "you are born on "+ days[ee-1] + " and your akan name is "+  maleNames[ee-1];
  }
  else if  ((gender === "female")&&(DD>=0&&DD<31)&&(MM>1&&MM<=12)&&(YY>1800&&YY<=2019)) {
  
    console.log( "you are born on "+ days[ee-1] + "and your akan name is "+  femaleNames[ee-1])
    document.getElementById("name").innerHTML = "you are born on "+ daya[ee-1] + " and your akan name is "+  femaleNames[ee-1];
  }
  else {
    console.log("please,enter a valid day or month!!");
    alert("enter again your birthday");
    document.getElementById("name").innerHTML = "please,enter a valid day or month!!";
  }
}




  
 
  

