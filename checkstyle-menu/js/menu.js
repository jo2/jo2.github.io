const renderCollapsibleMenu = () => {
    const navButton = Array.from(document.querySelectorAll('h5')).find(item => item.innerText === 'Menu');
    const navColumn = Array.from(navButton.parentNode.children).filter(item => item.title !== 'Menu');
    let navHidden = false;
    navButton.style.cursor = 'pointer';

    navButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (navHidden) {
            navColumn.forEach(item => item.classList.remove('hidden'));
            navButton.style.borderBottom = '1px solid #aaaaaa';
            navHidden = false;
        } else {
            navColumn.forEach(item => item.classList.add('hidden'));
            navButton.classList.remove('hidden')
            navButton.style.borderBottom = '0';
            navHidden = true;
        }
    });

    if (window.innerWidth <= 600) {
        navColumn.forEach(item => item.classList.add('hidden'));
        navButton.classList.remove('hidden');
        navButton.style.borderBottom = '0';
        navHidden = true;
    } else {
        navButton.classList.add('hidden');
        navColumn.forEach(item => item.classList.remove('hidden'));
        navHidden = false;
    }
}
let scrollButton;

window.addEventListener('load', () => {
    renderCollapsibleMenu();
    scrollButton = document.querySelector('a[title="toTop"]');
    scrollButton.innerText = 'to Top';
    scrollButton.style.display = 'none';

    scrollButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.documentElement.scrollTop = 0;
    });
});
window.addEventListener('resize', renderCollapsibleMenu);

window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 200) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});