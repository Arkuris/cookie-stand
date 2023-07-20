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