const Seattle = {
    name:'seattle'.
    minCus: 23,
    maxCust: 65,
    AvgCookiSale: 6.3,
    numOfCustomer: [],


    render: function () {

        this.numOfCustomer = getRandomNumber(this.minCus, this.maxCust);

        let sectionElement = document.getElementById("cotainer");
        let ul = document.createElement("ul");
        sectionElement.appendChild(ul);
        document.createElement("ul");
        
       
        for (let i = 6; i <= 20; i++) {
            let custPerHour = getRandomNumber( this.minCus, this.maxCust)
            this.numOfCustomer.push(custPerHour);
            let cookies = AvgCookiSale * custPerHour

            let liEl = document.createElement('li')
            document.createElement("li");
            ul.append(liEl);
            if (i <= 12) {

                liEl.textContent = i + "am "+ cookies

            }
            else {
                liEl.textContent = i + "pm";

            }

        }
    }
}

Seattle.render();


// const imgEl = document.createElement('img');
// articleEl.appendChild(imgEl);
// imgEl.setAttribute('src', salmon.png);






function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const Tokyo = {
    minCus: 3,
    maxCust: 24,
    AvgCookiSale: 1.2


}

Dubai = {
    minCus: 11,
    maxCust: 38,
    AvgCookiSale: 3.7,


}

Paris = {
    minCus: 20,
    maxCust: 38,
    AvgCookiSale: 2.3,


}

Lima = {
    minCus: 2,
    maxCust: 16,
    AvgCookiSale: 4.6,



}
