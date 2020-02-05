// import businesses from "./businessObjects.js"
import apiManager from "./apiManager.js"
import renderMainDom from "./mainDomEntry.js"
import addToDom from "./addToDom.js"
import businesses from "./businessArray.js"


renderMainDom();
addToDom.addBusinesses(businesses);

// Declaring NY businesses array and sending them to DOM
const newYorkBusinesses = businesses.filter(business => business.addressStateCode === "NY");
addToDom.addFilteredBusinesses(newYorkBusinesses, 'New York Businesses', 'nyBusinesses');

// Declaring Manufacturing Businesses array and sending to DOM
const manufacturingBusinesses = businesses.filter(business => business.companyIndustry === "Manufacturing");
addToDom.addFilteredBusinesses(manufacturingBusinesses, 'Manufacturing Businesses', 'manufacturingBusinesses');






// ********n Attempts to create businesses array from json db *****

// const businesses = []
// const getBusinessesArr = () => apiManager.getBusinessesDb().then(arr => {
//         console.log(arr)
//         arr.forEach(element => {
//             businesses.push(element)
//         });
//     });
// getBusinessesArr()
// console.log(businesses)



// *******************************************
// initial posting businesses array to json db
// apiManager.postToDb(businesses)
// *******************************************