function weekDay(){
  var DD=parseFloat(document.getElementById("day").value);
  var MM=parseFloat(document.getElementById("month").value);
  var YY=parseFloat(document.getElementById("year").value);
  var CC=((YY-1)/100)+1;
  var day= ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;
  console.log(weekDay);
  document.getElementById("results").innerHTML=Math.round(weekDay);

  var femaleNames=["kwasi", "kwadwo","kwabena" ,"kwaku", "yaw" ,"kofi", "kwame"];
  var maleNames=["Akosua", "Adwoa", "Abenaa" ,"Akua" ,"Yaa", "Afua", "Ama"];
  var choice=document.getElementsById("select").value;

  if (choice === "male") {
    console.log(maleNames[Math.round(weekDay)]);

    document.getElementById("name").innerHTML =maleNames[Math.round(weekDay)];

} else if (choice === "female") {

    console.log(femaleNames[Math.round(weekDay)]);
    document.getElementById("name").innerHTML = femaleNames[Math.round(weekDay)];
} else {
    console.log("invalid outuput");
}


}


  
 
  