
function akanName () {
    let dateOfBirth = Number(document.getElementById ("year").value);
    let monthOfBirth = Number(document.getElementById("month").value);
    let yearOfBirth = document.getElementById("year").value ;
    let genders = document.getElementsByName("gender");
}

var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

  
   
    // month validation 
    function monthValidator () {
      if (monthOfBirth < 1 || monthOfBirth > 12) {
        alert("invalid month");
        
      } else {
        alert("true")
        
        dateOfBirth < 1 || dateOfBirth > 31) {
          alert ("invalid date");
            
        } else {
          alert("true")
        }
    };
    //gender validation
    function validate(form)
    {
        var genderM=form.gender_male.value;
        var genderF=form.gender_female.value;
    
        if(genderM.checked==false && genderF.checked==false )
           {
                alert("You must select male or female");
                return false;
           }   
     }