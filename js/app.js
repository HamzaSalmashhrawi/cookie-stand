'use strict';


// Work hours array

let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let braNches = [];

// random 

function randomNoc(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// constructor function :

function Storebranch(branchName, minCust, maxCust, avgSale,) {

    this.branchName = branchName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgSale = avgSale;

    // empty array to push the values to
    this.numbOfCustPerhour = [];
    this.cookiesSoldperHour = [];
    this.totalCookiesSold = 0;


    braNches.push(this);
}

Storebranch.prototype.totalCustomerPerhour = function () {
    for (let i = 0; i < hour.length; i++) {
        this.numbOfCustPerhour.push(randomNoc(this.minCust, this.maxCust));
    }

}

Storebranch.prototype.totalCookiesPerhour = function () {
    for (let i = 0; i < hour.length; i++) {
        this.cookiesSoldperHour.push(Math.floor(this.numbOfCustPerhour[i] * this.avgSale));


        //total cookies sold perday
        this.totalCookiesSold += this.cookiesSoldperHour[i];
    }
    // console.log(this.cookiesSoldperHour);
}

// new instance => the benefit of constructor function
let Seattle = new Storebranch('seattle', 23, 65, 6.3);
let tokyo = new Storebranch('tokyo', 3, 24, 1.2);
let dubai = new Storebranch('dubai', 11, 38, 3.7);
let Paris = new Storebranch('paris', 20, 38, 2.3);
let Lima = new Storebranch('Lima', 2, 16, 4.6);

// Seattle.totalCustomerPerhour();
// Seattle.totalCookiesPerhour();
// tokyo.totalCustomerPerhour();
// tokyo.totalCookiesPerhour();
// dubai.totalCustomerPerhour();
// dubai.totalCookiesPerhour();
// Paris.totalCustomerPerhour();
// Paris.totalCookiesPerhour();



// DOM

let theParent = document.getElementById('theParent')
console.log(theParent);

let table = document.createElement('table');
theParent.appendChild(table);

function createHeader() {
    let heaDRow = document.createElement('tr');
    table.appendChild(heaDRow);

    let f1Th = document.createElement('th');
    heaDRow.appendChild(f1Th);
    f1Th.textContent = 'Branch'


    // loop throw the hour array
    for (let i = 0; i < hour.length; i++) {
        let tableHeaderElement = document.createElement('th')
        heaDRow.appendChild(tableHeaderElement);
        tableHeaderElement.textContent = hour[i];
    }
    let lastTableHeader = document.createElement('th');
    heaDRow.appendChild(lastTableHeader);
    lastTableHeader.textContent = 'Location Total'
}

createHeader();

//table data

Storebranch.prototype.webRender = function () {
    let tableDataRow = document.createElement('tr');
    table.appendChild(tableDataRow);

    let tableData = document.createElement('td');
    tableDataRow.appendChild(tableData);
    tableData.textContent = this.branchName;


    // to loop throw the hour array 
    for (let i = 0; i < hour.length; i++) {
        let tableDataElement = document.createElement('td');
        tableDataRow.appendChild(tableDataElement);
        tableDataElement.textContent = this.cookiesSoldperHour[i];
    }

    // calculate the total cookies sold in each branch
    let totalCookiesSoldEachBranch = document.createElement('td');
    tableDataRow.appendChild(totalCookiesSoldEachBranch);
    totalCookiesSoldEachBranch.textContent = this.totalCookiesSold;


}




for (let i = 0; i < braNches.length; i++) {
    braNches[i].totalCustomerPerhour();
    braNches[i].totalCookiesPerhour();
    braNches[i].webRender();
}

console.log(braNches);






// function to the table footer 

function createFooter() {
    let footerRow = document.createElement('tr');
    table.appendChild(footerRow);

    footerRow.setAttribute('id', 'totalRow');

    let footerHead = document.createElement('th');
    footerRow.appendChild(footerHead);
    footerHead.textContent = 'Total';



    //nested for loop 
    let sumTotalOftotal = 0;
    for (let i = 0; i < hour.length; i++) {
        let totalPerhour = 0;
        for (let b = 0; b < braNches.length; b++) {
            totalPerhour += braNches[b].cookiesSoldperHour[i];


        }
        console.log(totalPerhour);
        let footerTotal = document.createElement('th');
        footerRow.appendChild(footerTotal);
        footerTotal.textContent = totalPerhour;
        sumTotalOftotal += totalPerhour;
    }
    let totalOFtotal = document.createElement('th');
    footerRow.appendChild(totalOFtotal);
    totalOFtotal.textContent = `All branches total: ${sumTotalOftotal}`;

}

createFooter();




// ________________________________________________________________________






//  Form

let newBranch = document.getElementById('newBranch');
newBranch.addEventListener('submit', addNewBranch);

function addNewBranch(refresh) {
    refresh.preventDefault();


    let branchName = refresh.target.nameField.value;
    console.log(branchName);

    let minCust = refresh.target.minCust.value;

    let maxCust = refresh.target.maxCust.value;

    let avgSale = refresh.target.avgSale.value;

    let createdBranch = new Storebranch(branchName, minCust, maxCust, avgSale);



    let lastRow =document.getElementById('totalRow');
    lastRow.remove();



    createdBranch.totalCustomerPerhour();
    createdBranch.totalCookiesPerhour();
    createdBranch.webRender();
    createFooter();

    newBranch.reset();
}

