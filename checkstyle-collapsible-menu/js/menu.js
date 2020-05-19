window.addEventListener('load', () => {
    // document.querySelector('#navcolumn').querySelectorAll('ul').forEach(element => {
    //     element.classList.add('hidden');
    //
    //     element.previousElementSibling.addEventListener('click', () => {
    //         if (element.classList.contains('hidden')) {
    //             element.classList.remove('hidden');
    //         } else {
    //             element.classList.add('hidden');
    //         }
    //     });
    // });

    if (window.innerWidth <= 600) {
        document.querySelectorAll('#navcolumn h5').forEach(element => {
            element.nextElementSibling.classList.add('hidden');

            element.addEventListener('click', (e) => {
                if (e.target.nextElementSibling.classList.contains('hidden')) {
                    e.target.nextElementSibling.classList.remove('hidden');
                } else {
                    e.target.nextElementSibling.classList.add('hidden');
                }
            });
        });
    }
});
