function getRandomNumber(min, max) {
  let range = max - min + 1;
  let randomNumber = Math.floor(Math.random() * range) + min;
  return randomNumber;
}

const seattleData = {
  minCust: 23,
  maxCust: 65,
  avgCookiesSeattle: 4.5,
  randomCustomersSeattle: [], // Array to store the randomly generated numbers
  totalCookiesSeattle: [], // Array to store the total cookies per hour
};

for (let i = 0; i < 14; i++) {
  let randomCustomer = getRandomNumber(seattleData.minCust, seattleData.maxCust);
  seattleData.randomCustomersSeattle.push(randomCustomer);
  
  let totalCookies = Math.floor(randomCustomer * seattleData.avgCookiesSeattle);
  seattleData.totalCookiesSeattle.push(totalCookies);
}

console.log(seattleData);
console.log("Total Cookies Seattle", seattleData.totalCookiesSeattle);


const tokyoData = {
  minCust: 3,
  maxCust: 24,
  avgCookiestokyo: 1.2,
  randomCustomersTokyo: [], 
  totalCookiesTokyo: [], 
};

for (let i = 0; i < 14; i++) {
  let randomCustomer = getRandomNumber(tokyoData.minCust, tokyoData.maxCust);
  tokyoData.randomCustomersTokyo.push(randomCustomer);
  
  let totalCookies = Math.floor(randomCustomer * tokyoData.avgCookiestokyo);
  tokyoData.totalCookiesTokyo.push(totalCookies);
}

console.log(tokyoData);
console.log("Total Cookies Tokyo", tokyoData.totalCookiesTokyo);


const dubaiData = {
  minCust: 11,
  maxCust: 38,
  avgCookiesDubai: 3.7,
  randomCustomersDubai: [], 
  totalCookiesDubai: [],
}
for (let i = 0; i < 14; i++) {
  let randomCustomer = getRandomNumber(dubaiData.minCust, dubaiData.maxCust);
  dubaiData.randomCustomersDubai.push(randomCustomer);
  
  let totalCookies = Math.floor(randomCustomer * dubaiData.avgCookiesDubai);
  dubaiData.totalCookiesDubai.push(totalCookies);
}

console.log(dubaiData);
console.log("Total Cookies Dubai:", dubaiData.totalCookiesDubai);


const parisData = {
  minCust: 20,
  maxCust: 38,
  avgCookiesParis: 2.3,
  randomCustomersParis: [], 
  totalCookiesParis: [],
}
for (let i = 0; i < 14; i++) {
  let randomCustomer = getRandomNumber(parisData.minCust, parisData.maxCust);
  parisData.randomCustomersParis.push(randomCustomer);
  
  let totalCookies = Math.floor(randomCustomer * parisData.avgCookiesParis);
  parisData.totalCookiesParis.push(totalCookies);
}

console.log(parisData);
console.log("Total Cookies Paris:", parisData.totalCookiesParis);


const limaData = {
  minCust: 2,
  maxCust: 16,
  avgCookiesLima: 4.6,
  randomCustomersLima: [], 
  totalCookiesLima: [],
}
for (let i = 0; i < 14; i++) {
  let randomCustomer = getRandomNumber(limaData.minCust, limaData.maxCust);
  limaData.randomCustomersLima.push(randomCustomer);
  
  let totalCookies = Math.floor(randomCustomer * limaData.avgCookiesLima);
  limaData.totalCookiesLima.push(totalCookies);
}

console.log(limaData);
console.log("Total Cookies Lima:", limaData.totalCookiesLima);

