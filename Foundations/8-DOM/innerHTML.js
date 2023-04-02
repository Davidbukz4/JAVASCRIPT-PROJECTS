
// finding html element by id
const a = document.getElementById('main');
// finding html element by tag name. Finds all <p> elements
const b = a.getElementsByTagName('p')
// Finding element by class name
const c = document.getElementsByClassName('list')
// finding element by css selectors
const d = document.querySelectorAll('ul.list')

// getting and changing html elements
document.getElementById('demo').innerHTML = "Yeah"