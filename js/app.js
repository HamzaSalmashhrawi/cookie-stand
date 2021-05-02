'use strict';
// Seattle branch

// let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// let Seattle = {
//     name: 'Seattle',
//     minCust: 23,
//     maxCust: 65,
//     avgSale: 6.3,
//     NocPerhour: [],

//     getRandomNoc: function () {

//         // let header2 = document.createElement('h2');
//         // theParent.appendChild(header2);
//         // header2.textContent = Seattle.name; 



//         let unOrderedList = document.createElement('ul');
//         // theParent.appendChild(unOrderedList);
//         let randomValue = 0;

//         let t = 0;
//         for (let i = 0; i < hour.length; i++) {
//             randomValue = randomNoc(23, 65);
//             this.NocPerhour[i] = hour[i] + ':' + randomValue + ' Cookies';
//             let listItems = document.createElement('li');

//             t = t + randomValue;

//             unOrderedList.appendChild(listItems);
//             listItems.textContent = Seattle.NocPerhour[i];

//         }
//         console.log(`Total: ${t}`)


//     }

// }
// console.log(Seattle.NocPerhour);

// function randomNoc(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// // calling the function

// Seattle.getRandomNoc();








// brovaa


let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let Seattle = {
    name: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgSale: 6.3,
    NocPerhour: [],
    
    getRandomNoc: function () {
        
        let theParent = document.getElementById('SeattleCookie');
        
        let header2 = document.createElement('h2');
        theParent.appendChild(header2);
        header2.textContent = Seattle.name;
        
        
        
        let unOrderedList = document.createElement('ul');
        theParent.appendChild(unOrderedList);
        
        let randomValue = 0;
        
        let t = 0;
        for (let i = 0; i < hour.length; i++) {
            randomValue = randomNoc(23, 65);
            this.NocPerhour[i] = hour[i] + ':' + randomValue + ' Cookies';

            
            let listItems = document.createElement('li');
            
            t = t + randomValue;
            
            unOrderedList.appendChild(listItems);
            listItems.textContent = Seattle.NocPerhour[i];
            
        }
        console.log(`Total: ${t}`)
        
        
    }
    
}
console.log(Seattle.NocPerhour);

function randomNoc(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// calling the function

Seattle.getRandomNoc();
