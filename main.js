
const sectionEl = document.querySelector('section');
const searchEl = sectionEl.querySelector('.textfield');
const autoEl = sectionEl.querySelector('.autocompletes');
const closerEl = sectionEl.querySelector('search-closer');

searchEl.addEventListener('click', showSearch)
window.addEventListener('click', hideSearch)

function showSearch(event) {
    event.stopPropagation('show')
    autoEl.classList.add('show')
}

function hideSearch() {
    autoEl.classList.remove('show')
}
