       let person = prompt("Please enter your name");
       let age=prompt("please enter your age");
       let gender=prompt("please enter your gender","male or female")

       function genderf(gender){
          while  (gender != "male" && gender!="female"){
          gender= prompt("enter your gender ")

        let genderCapital = gender.toUpperCase();

         if (genderCapital == "MALE") {
             alert("Welcome to MyCoffee Mr"+" "+person);
            }
        else if(genderCapital == "FEMALE"){

             alert("Welcome to MyCoffee MS"+" "+person);
            }
         } 
      }

           genderf(gender)
           let drink=prompt('Do you like a hot or cold coffe? ')
           let drinkName=prompt('nice,what is the drink you want? ')

            alert('Please wait,your drink is being prepared')

             let order = document.getElementById("order");
             let paarq = document.createElement("p");
             let mainul = document.createElement("ul");
             let li1 = document.createElement("li");
             let li2 = document.createElement("li");
             let li3 = document.createElement("li");

            paarq.textContent=person;
            li1.textContent=gender;
            li2.textContent=age;
            li3.textContent=drink , " ",drinkName;

            mainul.appendChild(li1);
            mainul.appendChild(li2);
            mainul.appendChild(li3);
            order.appendChild(paarq);
            order.appendChild(mainul);

           let customerArray=[person,age,gender,drink,drinkName]

           for (let index = 0; index < customerArray.length; index++) {

        console.log(customerArray[index])
}