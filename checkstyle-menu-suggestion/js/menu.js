window.addEventListener('load', () => {
    // TODO save information on visible and hidden menu in session storage
    const navButton = document.querySelector('a[title="Menu"]');
    const navColumn = document.querySelector('#leftColumn');

    navButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (navColumn.classList.contains('hidden')) {
            navColumn.classList.remove('hidden');
            sessionStorage.setItem('menuHidden', 'false');
        } else {
            navColumn.classList.add('hidden');
            sessionStorage.setItem('menuHidden', 'true');
        }
    });

    if (window.innerWidth <= 600) {
        if (sessionStorage.getItem('menuHidden') === 'true') {
            navColumn.classList.add('hidden');
        } else {
            navColumn.classList.remove('hidden');
        }
        // if (navButton.classList.contains('hidden')) {
        navButton.classList.remove('hidden');
        console.log('display menu toggle');
        // }
    } else {
        navButton.classList.add('hidden');
        navColumn.classList.remove('hidden');
        console.log('hide menu toggle');
    }
});
