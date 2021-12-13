
function AName () {
    let dateOfBirth = Number(document.getElementById("year").value);
    let monthOfBirth = Number(document.getElementById("month").value);
    let yearOfBirth = document.getElementById("year").value ;
    let genders = document.getElementsByName("gender");
  
   
    // month validation 
    function monthValidator () {
      if (monthOfBirth < 1 || monthOfBirth > 12) {
        return false;
      } else {
        return true;
      }
    }
     // date validation
     function dateValidator () {
        if (dateOfBirth < 1 || dateOfBirth > 31) {
          return false;
        } else {
          return true;
        }