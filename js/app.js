'use strict';
const hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11  am ', '12 pm ', '1 pm', ' 2 pm ', '3 pm ', '4 pm', ' 5 pm ', ' 6 pm ', '7 pm', '8 pm']

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const seattle = {
    location: 'seattle',
    minCust: 23,
    maxCust: 65,
    Avgsale: 6.3,
    cookiePerHour: [],
    totalDailyCookies: 0,
    calcCookiesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {

           let  cookieHour = Math.floor(getRandomNumber(this.minCust, this.maxCust) * this.Avgsale);
            this.totalDailyCookies += cookieHour;
            this.cookiePerHour.push(cookieHour);

        }
    },



    render: function () {

        this.calcCookiesPerHour();
        const container = document.getElementById('cotainer');
        let articleEl = document.createElement('article');

        container.appendChild(articleEl);


        const h2EL = document.createElement('h2');

        articleEl.appendChild(h2EL);
        h2EL.textContent = this.location;
        const ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) {

            const liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = ` Total ${this.totalDailyCookies} cookies`;
        }
    }
}

const tokyo = {
    location: 'tokyo',
    minCust: 3,
    maxCust: 24,
    Avgsale: 1.2,
    cookiePerHour: [],
    totalDailyCookies: 0,
    calcCookiesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            let  cookieHour = Math.floor(getRandomNumber(this.minCust, this.maxCust) * this.Avgsale);
            this.totalDailyCookies += cookieHour;
            this.cookiePerHour.push(cookieHour);
        }
    },

    render: function () {

        this.calcCookiesPerHour();
        const container = document.getElementById('cotainer');
        let articleEl = document.createElement('article');

        container.appendChild(articleEl);


        const h2EL = document.createElement('h2');

        articleEl.appendChild(h2EL);
        h2EL.textContent = this.location;
        const ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) {

            const liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = ` Total ${this.totalDailyCookies} cookies`;
        }

    }
}


const dubai = {
    location: 'dubai',
    minCust: 11,
    maxCust: 38,
    Avgsale: 3.7,
    cookiePerHour: [],
    totalDailyCookies: 0,
    calcCookiesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            let  cookieHour = Math.floor(getRandomNumber(this.minCust, this.maxCust) * this.Avgsale);
            this.totalDailyCookies += cookieHour;
            this.cookiePerHour.push(cookieHour);

        }
    },
    render: function () {

        this.calcCookiesPerHour();
        const container = document.getElementById('cotainer');
        let articleEl = document.createElement('article');

        container.appendChild(articleEl);


        const h2EL = document.createElement('h2');

        articleEl.appendChild(h2EL);
        h2EL.textContent = this.location;
        const ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) {

            const liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = ` Total ${this.totalDailyCookies} cookies`;
        }

    }
}


const paris = {
    location: 'paris',
    minCust: 20,
    maxCust: 38,
    Avgsale: 2.3,
    cookiePerHour: [],
    totalDailyCookies: 0,
    calcCookiesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            let  cookieHour = Math.floor(getRandomNumber(this.minCust, this.maxCust) * this.Avgsale);
            this.totalDailyCookies += cookieHour;
            this.cookiePerHour.push(cookieHour);
        }
    },
    render: function () {

        this.calcCookiesPerHour();
        const container = document.getElementById('cotainer');
        let articleEl = document.createElement('article');

        container.appendChild(articleEl);


        const h2EL = document.createElement('h2');

        articleEl.appendChild(h2EL);
        h2EL.textContent = this.location;
        const ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) {

            const liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = ` Total ${this.totalDailyCookies} cookies`;
        }

    }
}
const lima = {
    location: 'lima',
    minCust: 2,
    maxCust: 16,
    Avgsale: 4.6,
    cookiePerHour: [],
    totalDailyCookies: 0,
    calcCookiesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            let  cookieHour = Math.floor(getRandomNumber(this.minCust, this.maxCust) * this.Avgsale);
            this.totalDailyCookies += cookieHour;
            this.cookiePerHour.push(cookieHour);
        }
    },
    render: function () {

        this.calcCookiesPerHour();
        const container = document.getElementById('cotainer');
        let articleEl = document.createElement('article');

        container.appendChild(articleEl);


        const h2EL = document.createElement('h2');

        articleEl.appendChild(h2EL);
        h2EL.textContent = this.location;
        const ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) {

            const liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = ` Total ${this.totalDailyCookies} cookies`;
        }

    }
}


seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();


