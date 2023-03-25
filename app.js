     // let customerName = prompt("Please enter your name");


    // let customerGender = prompt("Please enter your Gender male/female")
    // function specifyGender(customerGender) {

    // while (customerGender != "male" && customerGender != "female") {
    // customerGender = prompt("Please enter your Gender male/female")
    //     }

    // if (customerGender == "male") {
    //     alert("Welcom Mr " + customerName)
    //     } else {
    //      alert("Welcom Ms " + customerName)
    //     }
    // }
    // specifyGender(customerGender)

    // let hotColdDrink = prompt("do you want your drink hot or cold ?")

    // let typeDrink = prompt("please write the name of the drink you want")

    // alert("please wait the drink is getting prepared ")

    // if (customerGender == "male") {
    //     console.log("ok Mr " + customerName + " your order is " + hotColdDrink + " " + typeDrink)
    //     } else if (customerGender == "female") {
    //     console.log("ok Ms " + customerName + " your order is " + hotColdDrink + " " + typeDrink)
    //     } else {
    //     console.log("ok " + customerName + " your order is " + hotColdDrink + " " + typeDrink)
    // }

    // let customer = [customerName, customerGender, hotColdDrink, typeDrink]

    // for (let i = 0; i < customer.length; i++) {
    //     console.log(customer[i])
    // }

    // let userInputs = document.getElementById("user-inputs");
    // let div = document.createElement("div");
    // let paragraph = document.createElement("p");
    // let ul = document.createElement("ul");
    // let li1 = document.createElement("li");
    // let li2 = document.createElement("li");
    // let li3 = document.createElement("li");


    // userInputs.appendChild(div);
    // div.appendChild(paragraph);
    // div.appendChild(ul);
    // ul.appendChild(li1);
    // ul.appendChild(li2);
    // ul.appendChild(li3);


    // paragraph.textContent = `${customerName}`;
    // li1.textContent = ` Gender : ${customerGender}`;
    // li2.textContent = ` Age : 26`;
    // li3.textContent = ` Drink : ${hotColdDrink} ${typeDrink}`;

    let form = document.getElementById("formOrder")
    let userInputs = document.getElementById("user-inputs");

    form.addEventListener("submit", function (event) {
       event.preventDefault()
       let userName = event.target.userName.value
       let age = event.target.age.value
       let cold = event.target.cold.checked
       let hot = event.target.hot.checked
       let drinkName = event.target.drinkName.value
       let drink = ""
        if (cold) {
          drink = drink + "cold "
       }
        if (hot) {
         drink = drink + " hot"
       }
        console.log(userName, age, cold, hot, drinkName)
        render(userName,age,drink,drinkName)
       })

       function render(userName, age, drink , drinkName) {

       let h4 = document.createElement("h4")
       let pName = document.createElement("p")
       let pAge = document.createElement("p")
       let pDrink = document.createElement("p")

       h4.textContent = `"Your Order "`
       pName.textContent = `${userName}`
       pAge.textContent = `${age}`
       pDrink.textContent = `${drink} ${drinkName} `

       userInputs.appendChild(h4)
       userInputs.appendChild(pName)
       userInputs.appendChild(pAge)
       userInputs.appendChild(pDrink)
   }