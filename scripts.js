function myFunction(){
  var DD=parseFloat(document.getElementById("day").value);
  var MM=parseFloat(document.getElementById("month").value);
  var YY=parseFloat(document.getElementById("year").value);
  var CC=((YY-1) / 100) + 1;
  var dayWeek= (((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;
  console.log(dayWeek);
  alert("you are born on "(dayWeek));
  document.getElementById("results").innerHTML=Math.round(dayWeek);

  var femaleNames=["kwasi", "kwadwo","kwabena" ,"kwaku", "yaw" ,"kofi", "kwame"];
  var maleNames=["Akosua", "Adwoa", "Abenaa" ,"Akua" ,"Yaa", "Afua", "Ama"];
  var gender=document.getElementsById("select").value;

  if (gender === "male") {
    console.log(maleNames[Math.round(dayWeek)]);

    document.getElementById("name").innerHTML =maleNames[Math.round(dayWeek)];
  } 
  else if (gender === "female"){
 
     console.log(femaleNames[Math.round(dayWeek)]);
    document.getElementById("name").innerHTML = femaleNames[Math.round(dayWeek)];
  }
  else {
    console.log("invalid outuput");
    alert("enter again your birthday");
  }

}



  
 
  