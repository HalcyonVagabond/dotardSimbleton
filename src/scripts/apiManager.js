
const baseURL = "http://localhost:8088/businesses"


const apiManager = {

    getBusinessesDb() {
        return fetch(baseURL).then(resp => resp.json)
    },

    postToDb(business) {
        fetch(baseURL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(business)
        })
    }

}

export default apiManager