let myLeads = [];
const inputSection = document.getElementById("inputField")
const saveInputSection = document.getElementById("saveInput")
let listItems = ''
saveInputSection.addEventListener("click", function () {
    myLeads.push(inputSection.value)
    renderInput()
})
function renderInput() {
    inputSection.value = null
    for (value of myLeads) {
        listItems = value
    }
    document.getElementById("unorderedList").innerHTML +=
        `<li> <a href = "${listItems}" target="_blank" >  ${listItems}  </a> </li>`
}
