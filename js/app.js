'use strict';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const division = document.getElementById('city');

const articleEl = document.createElement('article');
division.appendChild(articleEl);

const tableEl = document.createElement('table');
articleEl.appendChild(tableEl);



function Branch(location, minCustomers, maxCustomers, avgSale) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSale = avgSale;
  this.cookiesPerHour = [];
  this.sumOne = 0;
  this.totalDailyCookies = 0;
  this.totalBelow = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  this.workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
}

Branch.prototype.calcCookiesPerHour = function () {
  for (let i = 0; i < this.workingHours.length; i++) {
    this.cookiesPerHour[i] = Math.floor(getRandomNumber(this.minCustomers, this.maxCustomers) * this.avgSale);
    this.sumOne += this.cookiesPerHour[i];
    this.totalDailyCookies = this.sumOne;
  }
};

Branch.prototype.render = function () {
  const rowEl = document.createElement('tr');
  tableEl.appendChild(rowEl);

  const td1El = document.createElement('td');
  rowEl.appendChild(td1El);
  td1El.textContent = this.location;

  for (let i = 0; i < this.workingHours.length; i++) {
    let td2El = document.createElement('td');
    rowEl.appendChild(td2El);
    td2El.textContent = this.cookiesPerHour[i];
  }

  const td1E3 = document.createElement('td');
  rowEl.appendChild(td1E3);
  td1E3.textContent = this.totalDailyCookies;
};

Branch.prototype.theHeader = function () {
  let headerEl = document.createElement('tr');
  tableEl.appendChild(headerEl);

  let th1El = document.createElement('th');
  headerEl.appendChild(th1El);
  th1El.textContent = 'Branch';

  for (let i = 0; i < this.workingHours.length; i++) {
    let th2El = document.createElement('th');
    headerEl.appendChild(th2El);
    th2El.textContent = this.workingHours[i];
    this.totalBelow[i] += this.cookiesPerHour[i];
  }

  let th3El = document.createElement('th');
  headerEl.appendChild(th3El);
  th3El.textContent = 'Daily Location Total';
};

Branch.prototype.theFooter = function () {
  let footerEl = document.createElement('tr');
  tableEl.appendChild(footerEl);

  let thFoot1 = document.createElement('th');
  footerEl.appendChild(thFoot1);
  thFoot1.textContent = 'Totals';

  for (let i = 0; i < this.workingHours.length; i++) {
    let thFoot2 = document.createElement('th');
    footerEl.appendChild(thFoot2);
    thFoot2.textContent = this.totalBelow[i];
  }

  let thFoot3 = document.createElement('th');
  footerEl.appendChild(thFoot3);
  thFoot3.textContent = 'Total Of Total'; //bottom row needs work
};


const Seattle = new Branch('Seattle', 23, 65, 6.3);

const Tokyo = new Branch('Tokyo',3,24,1.2);

const Dubai = new Branch('Dubai',11,38,3.7);

const Paris = new Branch('Paris',20,38,3.7);

const Lima = new Branch('Lima',2,16,4.6);

Seattle.theHeader();

Seattle.calcCookiesPerHour();
Seattle.render();

Tokyo.calcCookiesPerHour();
Tokyo.render();

Dubai.calcCookiesPerHour();
Dubai.render();

Paris.calcCookiesPerHour();
Paris.render();

Lima.calcCookiesPerHour();
Lima.render();

Seattle.theFooter();

