function calculate(){
   let a = parseInt(document.getElementById('bookOne').value);
   let b = parseInt(document.getElementById('bookTwo').value);
   let c = parseInt(document.getElementById('bookThree').value);
   let d = parseInt(document.getElementById('bookFour').value);
   let e = parseInt(document.getElementById('bookFive').value);

   if(a>100 || b>100 || c>100 || d>100 || e>100){
        alert("please enter correct marks");
   }
   else{

    let total = a+b+c+d+e;
    document.getElementById("obtain").innerHTML=total;
    

    var average = total/5;
    document.getElementById("avg").innerHTML = average;

    if (total>=90) {
            document.getElementById("grade").textContent="A"
        }

    else if (total>=80) {
            document.getElementById("grade").textContent="B"
        }


    else if (total>=70) {
            document.getElementById("grade").textContent="C"
        }

    else    if (total>=60) {
            document.getElementById("grade").textContent="D"
        }

     else  {
            document.getElementById("grade").textContent="F"
        }

   }
   return false;

}