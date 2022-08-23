'use strict';

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

class Store {
  constructor(name, minCustPerHour, maxCustPerHour, avgCookiePerCust) {
    this.name = name;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCookiePerCust = avgCookiePerCust;
    this.cookiesPerHour = [];
    this.totalDailyCookies = 0;
    this.display();
  }
  generateRandomCustomers() {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
  }
  generateCookiePerHour() {
    for (let i = 0; i < storeHours.length; i++) {
      let custPerHour = this.generateRandomCustomers();
      let amountCookiesSold = Math.ceil(custPerHour * this.avgCookiePerCust);
      this.cookiesPerHour.push(amountCookiesSold); //push into array
      this.totalDailyCookies += amountCookiesSold;
      //console.log(`The ${this.name} store had ${custPerHour} customers during this hour and sold a total of ${amountCookiesSold} cookies.`);
      //console.log(this.cookiesPerHour);
    }
  }
  display() {
    this.generateCookiePerHour();
    let tableBody = document.getElementById('data');
    let tr = document.createElement('tr');
    tableBody.appendChild(tr);

    let th = document.createElement('th');
    th.textContent = this.name;
    tr.appendChild(th);

    for (let i = 0; i < storeHours.length; i++) {
      let td = document.createElement('td');
      td.textContent = this.cookiesPerHour[i];
      tr.appendChild(td);
    }

    let td = document.createElement('td');
    td.textContent = this.totalDailyCookies;
    tr.appendChild(td);
  }
}








new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);





/*
Store.prototype.display = function () {
  this.generateCookiePerHour();
  let displaySeattle = document.getElementById(this.name);
  for (let i = 0; i < storeHours.length; i++) {
    let entry = document.createElement('li');
    entry.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
    displaySeattle.appendChild(entry);

  }
  let total = document.createElement('li');
  total.textContent = `Total: ${this.totalDailyCookies} cookies`;
  displaySeattle.appendChild(total);
};

*/





/* 

let seattle = {
  name: 'Seattle',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiePerCust: 6.3,
  cookiesPerHour: [],
  totalDailyCookies: 0,

  generateRandomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
  },

  generateCookiePerHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      let custPerHour = this.generateRandomCustomers();
      let amountCookiesSold = Math.ceil(custPerHour * this.avgCookiePerCust);
      this.cookiesPerHour.push(amountCookiesSold); //push into array
      this.totalDailyCookies += amountCookiesSold;
      //console.log(`The ${this.name} store had ${custPerHour} customers during this hour and sold a total of ${amountCookiesSold} cookies.`);
      //console.log(this.cookiesPerHour);
    }
  },

  display: function () {
    this.generateCookiePerHour();
    let displaySeattle = document.getElementById(this.name);
    for (let i = 0; i < storeHours.length; i++) {
      let entry = document.createElement('li');
      entry.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
      displaySeattle.appendChild(entry);

    }
    let total = document.createElement('li');
    total.textContent = `Total: ${this.totalDailyCookies} cookies`;
    displaySeattle.appendChild(total);
  }
};


let tokyo = {
  name: 'Tokyo',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiePerCust: 1.2,
  cookiesPerHour: [],
  totalDailyCookies: 0,

  generateRandomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
  },

  generateCookiePerHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      let custPerHour = this.generateRandomCustomers();
      let amountCookiesSold = Math.ceil(custPerHour * this.avgCookiePerCust);
      this.cookiesPerHour.push(amountCookiesSold); //push into array
      this.totalDailyCookies += amountCookiesSold;
      console.log(`The ${this.name} store had ${custPerHour} customers during this hour and sold a total of ${amountCookiesSold} cookies.`);
      console.log(this.cookiesPerHour);
    }
  },

  display: function () {
    this.generateCookiePerHour();
    let displayTokyo = document.getElementById(this.name);
    for (let i = 0; i < storeHours.length; i++) {
      let entry = document.createElement('li');
      entry.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
      displayTokyo.appendChild(entry);

    }
    let total = document.createElement('li');
    total.textContent = `Total: ${this.totalDailyCookies} cookies`;
    displayTokyo.appendChild(total);
  }
};


let dubai = {
  name: 'Dubai',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiePerCust: 3.7,
  cookiesPerHour: [],
  totalDailyCookies: 0,

  generateRandomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
  },

  generateCookiePerHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      let custPerHour = this.generateRandomCustomers();
      let amountCookiesSold = Math.ceil(custPerHour * this.avgCookiePerCust);
      this.cookiesPerHour.push(amountCookiesSold); //push into array
      this.totalDailyCookies += amountCookiesSold;
      console.log(`The ${this.name} store had ${custPerHour} customers during this hour and sold a total of ${amountCookiesSold} cookies.`);
      console.log(this.cookiesPerHour);
    }
  },

  display: function () {
    this.generateCookiePerHour();
    let displayDubai = document.getElementById(this.name);
    for (let i = 0; i < storeHours.length; i++) {
      let entry = document.createElement('li');
      entry.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
      displayDubai.appendChild(entry);

    }
    let total = document.createElement('li');
    total.textContent = `Total: ${this.totalDailyCookies} cookies`;
    displayDubai.appendChild(total);
  }
};


let paris = {
  name: 'Paris',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiePerCust: 2.3,
  cookiesPerHour: [],
  totalDailyCookies: 0,

  generateRandomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
  },

  generateCookiePerHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      let custPerHour = this.generateRandomCustomers();
      let amountCookiesSold = Math.ceil(custPerHour * this.avgCookiePerCust);
      this.cookiesPerHour.push(amountCookiesSold); //push into array
      this.totalDailyCookies += amountCookiesSold;
      console.log(`The ${this.name} store had ${custPerHour} customers during this hour and sold a total of ${amountCookiesSold} cookies.`);
      console.log(this.cookiesPerHour);
    }
  },

  display: function () {
    this.generateCookiePerHour();
    let displayParis = document.getElementById(this.name);
    for (let i = 0; i < storeHours.length; i++) {
      let entry = document.createElement('li');
      entry.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
      displayParis.appendChild(entry);

    }
    let total = document.createElement('li');
    total.textContent = `Total: ${this.totalDailyCookies} cookies`;
    displayParis.appendChild(total);
  }
};


let lima = {
  name: 'Lima',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiePerCust: 4.6,
  cookiesPerHour: [],
  totalDailyCookies: 0,

  generateRandomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
  },

  generateCookiePerHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      let custPerHour = this.generateRandomCustomers();
      let amountCookiesSold = Math.ceil(custPerHour * this.avgCookiePerCust);
      this.cookiesPerHour.push(amountCookiesSold); //push into array
      this.totalDailyCookies += amountCookiesSold;
      console.log(`The ${this.name} store had ${custPerHour} customers during this hour and sold a total of ${amountCookiesSold} cookies.`);
      console.log(this.cookiesPerHour);
    }
  },

  display: function () {
    this.generateCookiePerHour();
    let displayLima = document.getElementById(this.name);
    for (let i = 0; i < storeHours.length; i++) {
      let entry = document.createElement('li');
      entry.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
      displayLima.appendChild(entry);

    }
    let total = document.createElement('li');
    total.textContent = `Total: ${this.totalDailyCookies} cookies`;
    displayLima.appendChild(total);
  }
};

seattle.display();
tokyo.display();
dubai.display();
paris.display();
lima.display();


*/





/* Class Notes

//Generating random numbers

function generateRandomNumber(highValue) {
  return Math.floor(Math.random() * highValue);
}

function generateBetween(low, high) {
  return Math.floor(Math.random() * (high - low + 1)) + low;


}

// console.log(generateRandomNumber(20));

console.log(generateBetween(5, 20));

*/

