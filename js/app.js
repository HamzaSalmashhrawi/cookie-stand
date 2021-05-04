'use strict';


// Work hours array

let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// constructor function :

function Storebranch(branchName, minCust, maxCust, avgSale, NocPerhour, cookiesSoldperHour, total ) {

    this.name = branchName;
     
}
// random 

function randomNoc(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//prototype random num of customers

Storebranch.prototype.minCust= function(){
    this.minCust=randomNoc(23, 65)+ 'customer';
}

// prototype to render my work

Storebranch.prototype.rWeb = function(){
    let theParent=document.getElementById('branchCookie');
    let brAnch=document.createElement('h2')
    theParent.appendChild(brAnch);
    let h2 = document.createElement('h2');
    brAnch.appendChild(h2);
    h2.textContent=this.name;
    console.log(theParent);
}


// new instance = the benefit of constructor function
let Seattle = new Storebranch('seattle');
Seattle.minCust();
console.log(Seattle);
Seattle.rWeb();


let tokyo = new Storebranch ('tokyo');
tokyo.minCust();
console.log(tokyo);


// Seattle.getRandomNoc();












// Seattle branch

// Work hours array

// let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function randomNoc(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// let Seattle = {
//     name: 'Seattle',
//     minCust: 23,
//     maxCust: 65,
//     avgSale: 6.3,
//     NocPerhour: [],
//     cookiesSoldperHour: [],
//     total: 0,


//     // calculate the num of customers

//     getRandomNoc: function () {
//         for (let i = 0; i < hour.length; i++) {
//             this.NocPerhour[i] = (randomNoc(this.minCust, this.maxCust))
//         }
//     },
//     // calculate the cookies purchased per hour
//     randomCookieSold: function () {
//         for (let i = 0; i < hour.length; i++) {
//             this.cookiesSoldperHour.push(Math.floor(this.NocPerhour[i] * this.avgSale));

//             //  total random cookies purchased per hour
//             this.total += this.cookiesSoldperHour[i]
//         }
//     },
//     // function to display data on the web
//     salesFunction: function () {
//         // link the id from sales.html in JS file
//         let theParent = document.getElementById('branchCookie');
//         console.log(theParent)
//         let brAnch = document.createElement('h2');
//         theParent.appendChild(brAnch);
//         brAnch.textContent = this.name;
//         // create unordered list element 
//         let unOrderedList = document.createElement('ul');
//         theParent.appendChild(unOrderedList);

//         // loop throw the hours
//         for (let i = 0; i < hour.length; i++) {

//             // create list 
//             let listItems = document.createElement('li')
//             unOrderedList.appendChild(listItems);
//             listItems.textContent = `${hour[i]}: ${this.cookiesSoldperHour[i]}` + ' cookies'
//         }
//         // total element
//         let totalCookies = document.createElement('li');
//         unOrderedList.appendChild(totalCookies);
//         totalCookies.textContent = `total: ${this.total}` + ' cookies'
//     }

// }
// console.log(Seattle);


// // calling the function

// Seattle.getRandomNoc();
// Seattle.randomCookieSold();
// Seattle.salesFunction();








// // TOKYO BRANCH 

// function randomNoc(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }


// let tokyo = {
//     name: 'tokyo',
//     minCust: 3,
//     maxCust: 24,
//     avgSale: 1.2,
//     NocPerhour: [],
//     cookiesSoldperHour: [],
//     total: 0,


//     // calculate the num of customers

//     getRandomNoc: function () {
//         for (let i = 0; i < hour.length; i++) {
//             this.NocPerhour[i] = (randomNoc(this.minCust, this.maxCust))
//         }
//     },
//     // calculate the cookies purchased per hour
//     randomCookieSold: function () {
//         for (let i = 0; i < hour.length; i++) {
//             this.cookiesSoldperHour.push(Math.floor(this.NocPerhour[i] * this.avgSale));

//             //  total random cookies purchased per hour
//             this.total += this.cookiesSoldperHour[i]
//         }
//     },
//     // function to display data on the web
//     salesFunction: function () {
//         // link the id from sales.html in JS file
//         let theParent = document.getElementById('branchCookie');
//         console.log(theParent)
//         let brAnch = document.createElement('h2');
//         theParent.appendChild(brAnch);
//         brAnch.textContent = this.name;
//         // create unordered list element 
//         let unOrderedList = document.createElement('ul');
//         theParent.appendChild(unOrderedList);

//         // loop throw the hours
//         for (let i = 0; i < hour.length; i++) {

//             // create list 
//             let listItems = document.createElement('li')
//             unOrderedList.appendChild(listItems);
//             listItems.textContent = `${hour[i]}: ${this.cookiesSoldperHour[i]}` + ' cookies'
//         }
//         // total element
//         let totalCookies = document.createElement('li');
//         unOrderedList.appendChild(totalCookies);
//         totalCookies.textContent = `total: ${this.total}` + ' cookies'
//     }

// }
// console.log(tokyo);



// // calling the function

// tokyo.getRandomNoc();
// tokyo.randomCookieSold();
// tokyo.salesFunction();





// Dubai




function randomNoc(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let Dubai = {
    name: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgSale: 3.7,
    NocPerhour: [],
    cookiesSoldperHour: [],
    total: 0,


    // calculate the num of customers

    getRandomNoc: function () {
        for (let i = 0; i < hour.length; i++) {
            this.NocPerhour[i] = (randomNoc(this.minCust, this.maxCust))
        }
    },
    // calculate the cookies purchased per hour
    randomCookieSold: function () {
        for (let i = 0; i < hour.length; i++) {
            this.cookiesSoldperHour.push(Math.floor(this.NocPerhour[i] * this.avgSale));

            //  total random cookies purchased per hour
            this.total += this.cookiesSoldperHour[i]
        }
    },
    // function to display data on the web
    salesFunction: function () {
        // link the id from sales.html in JS file
        let theParent = document.getElementById('branchCookie');
        console.log(theParent)
        let brAnch = document.createElement('h2');
        theParent.appendChild(brAnch);
        brAnch.textContent = this.name;
        // create unordered list element 
        let unOrderedList = document.createElement('ul');
        theParent.appendChild(unOrderedList);

        // loop throw the hours
        for (let i = 0; i < hour.length; i++) {

            // create list 
            let listItems = document.createElement('li')
            unOrderedList.appendChild(listItems);
            listItems.textContent = `${hour[i]}: ${this.cookiesSoldperHour[i]}` + ' cookies'
        }
        // total element
        let totalCookies = document.createElement('li');
        unOrderedList.appendChild(totalCookies);
        totalCookies.textContent = `total: ${this.total}` + ' cookies'
    }

}
console.log(Dubai);


// calling the function
Dubai.getRandomNoc();
Dubai.randomCookieSold();
Dubai.salesFunction();




// Paris

let Paris = {
    name: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgSale: 2.3,
    NocPerhour: [],
    cookiesSoldperHour: [],
    total: 0,


    // calculate the num of customers

    getRandomNoc: function () {
        for (let i = 0; i < hour.length; i++) {
            this.NocPerhour[i] = (randomNoc(this.minCust, this.maxCust))
        }
    },
    // calculate the cookies purchased per hour
    randomCookieSold: function () {
        for (let i = 0; i < hour.length; i++) {
            this.cookiesSoldperHour.push(Math.floor(this.NocPerhour[i] * this.avgSale));

            //  total random cookies purchased per hour
            this.total += this.cookiesSoldperHour[i]
        }
    },
    // function to display data on the web
    salesFunction: function () {
        // link the id from sales.html in JS file
        let theParent = document.getElementById('branchCookie');
        console.log(theParent)
        let brAnch = document.createElement('h2');
        theParent.appendChild(brAnch);
        brAnch.textContent = this.name;
        // create unordered list element 
        let unOrderedList = document.createElement('ul');
        theParent.appendChild(unOrderedList);

        // loop throw the hours
        for (let i = 0; i < hour.length; i++) {

            // create list 
            let listItems = document.createElement('li')
            unOrderedList.appendChild(listItems);
            listItems.textContent = `${hour[i]}: ${this.cookiesSoldperHour[i]}` + ' cookies'
        }
        // total element
        let totalCookies = document.createElement('li');
        unOrderedList.appendChild(totalCookies);
        totalCookies.textContent = `total: ${this.total}` + ' cookies'
    }

}
console.log(Paris);

// calling the function
Paris.getRandomNoc();
Paris.randomCookieSold();
Paris.salesFunction();



// Lima

let Lima = {
    name: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgSale: 4.6,
    NocPerhour: [],
    cookiesSoldperHour: [],
    total: 0,


    // calculate the num of customers

    getRandomNoc: function () {
        for (let i = 0; i < hour.length; i++) {
            this.NocPerhour[i] = (randomNoc(this.minCust, this.maxCust))
        }
    },
    // calculate the cookies purchased per hour
    randomCookieSold: function () {
        for (let i = 0; i < hour.length; i++) {
            this.cookiesSoldperHour.push(Math.floor(this.NocPerhour[i] * this.avgSale));

            //  total random cookies purchased per hour
            this.total += this.cookiesSoldperHour[i]
        }
    },
    // function to display data on the web
    salesFunction: function () {
        // link the id from sales.html in JS file
        let theParent = document.getElementById('branchCookie');
        console.log(theParent)
        let brAnch = document.createElement('h2');
        theParent.appendChild(brAnch);
        brAnch.textContent = this.name;
        // create unordered list element 
        let unOrderedList = document.createElement('ul');
        theParent.appendChild(unOrderedList);

        // loop throw the hours
        for (let i = 0; i < hour.length; i++) {

            // create list 
            let listItems = document.createElement('li')
            unOrderedList.appendChild(listItems);
            listItems.textContent = `${hour[i]}: ${this.cookiesSoldperHour[i]}` + ' cookies'
        }
        // total element
        let totalCookies = document.createElement('li');
        unOrderedList.appendChild(totalCookies);
        totalCookies.textContent = `total: ${this.total}` + ' cookies'
    }

}
console.log(Lima);

//Calling functions 
Lima.getRandomNoc();
Lima.randomCookieSold();
Lima.salesFunction();