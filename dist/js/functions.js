// functions************************************
export function addClassOpenTo(item) {
    item.classList.add('open');
}

export function removeClassOpenFrom(item) {
    item.classList.remove('open');
}
export function toggleClassOpen(item) {
    item.classList.toggle('open');
}

// function to add the section items when the user scroll to their position
export function setSectionValues(items) {
    items.forEach(item => {
        if (item.parentNode.classList.contains('open')) {
            item.classList.add('open');
        }
    });
}

// add open class to each  container with a .4s delay
export function setItems(items,wait) {
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('open');
        }, index * wait)
    })
}
