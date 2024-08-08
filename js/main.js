const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(e) {
    // before adding a new border to a tab item
    // delete it from all of the tab items
    removeBorder();
    removeShow();
    // then add it to the tab item the user clicked on 
    this.classList.add('tab-border');
    // Grab the shit from the DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    // add show class
    tabContentItem.classList.add('show')
}


function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}


function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}


// Add even listener to all tab-items
tabItems.forEach(item => item.addEventListener('click', selectItem));

