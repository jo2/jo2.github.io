window.addEventListener('load', () => {
    const navButton = document.querySelector('a[title="Menu"]');
    const navColumn = document.querySelector('#leftColumn');

    navButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (navColumn.classList.contains('hidden')) {
            navColumn.classList.remove('hidden');
            let currentElement = document.querySelector('#navcolumn strong');
            console.log(currentElement);
            if (currentElement) {
                currentElement = currentElement.parentElement.parentElement;
                while (currentElement.classList.contains('hidden') && currentElement.tagName === 'UL') {
                    currentElement.classList.remove('hidden');
                    currentElement = currentElement.parentElement.parentElement;
                }
            }
        } else {
            navColumn.classList.add('hidden');
        }
    });

    document.querySelectorAll('#navcolumn ul').forEach(element => {
        element.classList.add('hidden');
        element.previousElementSibling.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(element.classList);
            document.querySelectorAll('#navcolumn ul').forEach(otherElement => {
                if (otherElement !== element) {
                    otherElement.classList.add('hidden');
                }
            });

            let parent = element.parentElement.parentElement;
            while (parent.classList.contains('hidden') && parent.tagName === 'UL') {
                parent.classList.remove('hidden');
                parent = parent.parentElement.parentElement;
            }

            if (element.classList.contains('hidden')) {
                element.classList.remove('hidden');
            } else {
                element.classList.add('hidden');
            }
        });
    });

    if (window.innerWidth <= 600) {
        navColumn.classList.add('hidden');
        navButton.classList.remove('hidden');
    } else {
        navButton.classList.add('hidden');
        navColumn.classList.remove('hidden');
    }
    console.log(navColumn.classList)
});
