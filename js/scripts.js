var maleNames= ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
var weekday =["Monday","Tuesday","Wednesday","Thursday","Friday"];



function generateAkan() {
  var year = document.getElementById("year").value;
  var month = document.getElementById("month").value;
  var day = document.getElementById("day").value;
  var male = document.getElementById ("male").value;
  var female = document.getElementById ("female").value;
  var century =parseInt((year.slice(0,2)));
  

  
  //let dayOfWeek=((((century/ 4)-2 *century-1)+((5*year/4))+((26*(month+1)/10))+day)%7);
 //let dayOfWeek=(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day)%7);
 //var dayOfWeek = parseInt((((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7)-5;
 //var dayOfWeek = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
//console.log(century)

let birthday = new Date(`${year}-${month}-${day}`)
  let dateString = birthday.toDateString().slice(0,3)
  let birthDate = birthday.getDay()
  console.log(dateString)


if (male == "male"){
  let name = maleNames[birthDate]
  alert ("You were born on a " +  dateString + "  So your  Akan Name will be " + name)
}
else if (female == "female"){
  let name = femaleNames[birthDate]
  alert ("You were born on a " +  dateString + "  So Your Akan Name will be is" + name)
}
else {
  alert("Please select gender")
}
if (month > 12 || month < 1){
   alert ("Invalid month")
}
if (day > 31 || month <1){
  alert ("Invalid date")
}
};