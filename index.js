let myLeads = [];
const inputSection = document.getElementById("inputField")
const saveInputSection = document.getElementById("saveInput")
const data = document.getElementById("unorderedList")
const deleteItem = document.getElementById("deleteButton")
const saveURL = document.getElementById("saveUrl")
let leads = JSON.parse(localStorage.getItem("myLeads"))
if (leads) {
    myLeads = leads
    renderInput(myLeads)
}
saveInputSection.addEventListener("click", function () {
    myLeads.push(inputSection.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    inputSection.value = null
    renderInput(myLeads)
})
function renderInput(leads) {
    let listItems = ''
    inputSection.value = null
    for (i = 0; i < leads.length; i++) {
        listItems += `<li> <a href = "${leads[i]}" target="_blank" >  ${leads[i]}  </a> </li>`
    }
    data.innerHTML = listItems
}
deleteItem.addEventListener("click", function () {
    localStorage.clear()
    myLeads = []
    renderInput(myLeads)
})
saveURL.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderInput(myLeads)
    })
})
