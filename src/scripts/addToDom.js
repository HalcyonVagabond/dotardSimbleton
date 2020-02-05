// import apiManager from "./apiManager"
import businesses from "./businessArray.js"

const addToDom = {
    addBusinesses (businessesArray) {
        const container = document.getElementById('activeBusinessesContainer')
        businessesArray.forEach(business => {
            
            container.innerHTML += `
            <div id='business-${business.companyName}' class='business'>
                <h2>${business.companyName}</h2>
                    <p>
                        ${business.addressFullStreet}<br>
                        ${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}
                    </p>
            </div>
            `
        });
    },

    addFilteredBusinesses (array, title, id) {
        const container = document.getElementById('activeBusinessesContainer');
        
        container.innerHTML += `
            <div id='${id}-Container' class='container'>
                <h1>${title}</h1>

            
            </div>
            `
            const newContainer = document.getElementById(`${id}-Container`); 
        array.forEach(business => {
            newContainer.innerHTML += `
           <div id='business-${business.companyName}' class='business'>
               <h2>${business.companyName}</h2>
                   <p>
                   ${business.addressFullStreet}<br>
                   ${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}
                   </p>
           </div>
           `})
    }

}

export default addToDom