'use strict'

// Function to generate a random number within a specified range
function getRandomNumber(min, max) {
  let range = max - min + 1;
  let randomNumber = Math.floor(Math.random() * range) + min;
  return randomNumber;
}

// Constructor function to create city data objects
function CityData(minCust, maxCust, avgCookies, cityName) {
  // Assigning input values to object properties
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.randomCustomers = [];
  this.totalCookies = [];
  this.cityName = cityName;

  // Generating random customers and calculating total cookies for 14 iterations
  for (let i = 0; i < 14; i++) {
    // Generate a random number of customers within the specified range
    let randomCustomer = getRandomNumber(this.minCust, this.maxCust);
    // Add the random customer value to the randomCustomers array
    this.randomCustomers.push(randomCustomer);

    // Calculate the total cookies by multiplying randomCustomer with avgCookies
    let totalCookies = Math.floor(randomCustomer * this.avgCookies);
    // Add the totalCookies value to the totalCookies array
    this.totalCookies.push(totalCookies);
  }

  // Output the created city object to the console
  console.log(this);
  // Output the total cookies for the city to the console
  console.log("Total Cookies " + this.cityName + ":", this.totalCookies);
}

const seattleData = new CityData(23, 65, 4.5, "Seattle");
const tokyoData = new CityData(3, 24, 1.2, "Tokyo");
const dubaiData = new CityData(11, 38, 3.7, "Dubai");
const parisData = new CityData(20, 38, 2.3, "Paris");
const limaData = new CityData(2, 16, 4.6, "Lima");

// Collecting Totals from each city. Learned about the Reduce function from GPT. I can call apon it to gather data from my arrays.
const seattleTotal = seattleData.totalCookies.reduce((accumulate, value) => accumulate + value, 0); 
const tokyoTotal = tokyoData.totalCookies.reduce((accumulate, value) => accumulate + value, 0); 
const dubaiTotal = dubaiData.totalCookies.reduce((accumulate, value) => accumulate + value, 0);
const parisTotal = parisData.totalCookies.reduce((accumulate, value) => accumulate + value, 0);
const limaTotal = limaData.totalCookies.reduce((accumulate, value) => accumulate + value, 0);
// accumulate is gathering the value as the reduce method iterates over the array.
// value represents the current element being processed in the array.
// the code above is used to target each cities random data that is generated, and add it all together. 

// Grand totals of all cities AND the combined total :) 
const grandTotal = seattleTotal + tokyoTotal + dubaiTotal + parisTotal + limaTotal;

console.log("Total Cookies Seattle:", seattleTotal);
console.log("Total Cookies Tokyo:", tokyoTotal);
console.log("Total Cookies Dubai:", dubaiTotal);
console.log("Total Cookies Paris:", parisTotal);
console.log("Total Cookies Lima:", limaTotal);
console.log("Grand Total Cookies:", grandTotal);

function calculateDailyTotals(timeSlots) {
  const dailyTotals = timeSlots.map((timeSlot) => {
    return [seattleData, tokyoData, dubaiData, parisData, limaData]
      .map((cityData) => cityData.totalCookies[timeSlots.indexOf(timeSlot)])
      .reduce((accumulate, value) => accumulate + value, 0);
  });

  return dailyTotals;
}

function fillTable() {
  const timeSlots = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

  // Get the table body and footer elements
  const tableBody = document.getElementById('table-body');
  const tableFooter = document.getElementById('table-footer');

  // Loop through each city and populate the rows for each city
  [seattleData, tokyoData, dubaiData, parisData, limaData].forEach((cityData) => {
    const row = document.createElement('tr');

    // Add the city name as the first cell in the row
    const cityNameCell = document.createElement('td');
    cityNameCell.textContent = cityData.cityName;
    row.appendChild(cityNameCell);

    // Variables to store daily totals for each city
    let cityDailyTotal = 0;

    // Add the cookies data for each time slot as subsequent cells in the row
    cityData.totalCookies.forEach((cookies) => {
      const cell = document.createElement('td');
      cell.textContent = cookies;
      row.appendChild(cell);

      // Calculate daily total for each city
      cityDailyTotal += cookies;
    });

    // Add the daily total for the city as the last cell in the row
    const dailyTotalCell = document.createElement('td');
    dailyTotalCell.textContent = cityDailyTotal;
    row.appendChild(dailyTotalCell);

    // Add the row to the table body
    tableBody.appendChild(row);
  });

  // Calculate and add the combined totals on the far right side
  const totalsRow = document.createElement('tr');
  const totalsHeaderCell = document.createElement('td');
  totalsHeaderCell.textContent = 'Totals';
  totalsRow.appendChild(totalsHeaderCell);

  const grandTotals = timeSlots.map((timeSlot) => {
    return [seattleData, tokyoData, dubaiData, parisData, limaData]
      .map((cityData) => cityData.totalCookies[timeSlots.indexOf(timeSlot)])
      .reduce((accumulate, value) => accumulate + value, 0);
  });

  grandTotals.forEach((grandTotal) => {
    const cell = document.createElement('td');
    cell.textContent = grandTotal;
    totalsRow.appendChild(cell);
  });

  const combinedGrandTotal = grandTotals.reduce((accumulate, value) => accumulate + value, 0);
  const combinedGrandTotalCell = document.createElement('td');
  combinedGrandTotalCell.textContent = combinedGrandTotal;
  totalsRow.appendChild(combinedGrandTotalCell);

  tableFooter.appendChild(totalsRow);
}

// Call the function to fill the table when the page loads
fillTable();