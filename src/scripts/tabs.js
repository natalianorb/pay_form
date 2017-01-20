function tabs () {
    let triggers = document.querySelectorAll('.nav__item');
    let i;

    for(i = 0; i < triggers.length; i++) {
        triggers[i].addEventListener('click', showTab);
    }

    function showTab(event){
        let $this = event.target.closest('.nav__item');
        let id = $this.getAttribute('href');
        let nextContent = document.querySelector(id);
        let prevItem = document.querySelector('.nav__item.--active');
        let prevContent = document.querySelector('.form.--visible');

        event.preventDefault();
        prevContent.classList.remove('--visible');
        nextContent.classList.add('--visible');
        prevItem.classList.remove('--active');
        $this.classList.add('--active');
    }
}

module.exports = tabs;