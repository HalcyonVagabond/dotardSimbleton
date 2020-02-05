const mainContainer = document.getElementById('mainContainer')

const renderMainDom = () =>  {

    mainContainer.innerHTML = `
    <h1>Active Businesses</h1>
    <section id="activeBusinessesContainer"></section>
`

}

export default renderMainDom