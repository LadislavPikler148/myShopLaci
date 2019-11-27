export const createDropdown = (categories) => {
    let newSelectElement = document.createElement("select");
    categories.forEach((item) => {
        let newOptionElement = document.createElement("option");
        newOptionElement.innerText = item.name
        newSelectElement.appendChild(newOptionElement)
    })
    document.body.appendChild(newSelectElement);
    
}