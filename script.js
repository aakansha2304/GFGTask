const accordians = document.querySelectorAll('.accordian-item');
const cta = document.querySelector('.cta6');

let isExpanded = false;

accordians.forEach((accordian) => {
    const icon = accordian.querySelector('.icon');
    const answer = accordian.querySelector('.answer');
    const question = accordian.querySelector('.question');

    question.addEventListener('click', () => {
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        } else {
            answer.style.display = 'block';
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        }

    });
});

cta.addEventListener('click', () => {
    const hiddenItems = document.querySelectorAll('.accordian-item.hidden');

    isExpanded = !isExpanded;

    if (isExpanded) {
        hiddenItems.forEach((item) => {
            item.classList.remove('hidden');
        });
        cta.innerHTML = 'See Less <i class="fa-solid fa-arrow-left"></i>';
    } 
    else {
        accordians.forEach((accordion) => {
            const answer = accordion.querySelector('.answer');
            const icon = accordion.querySelector('.icon');
            answer.classList.remove('active');
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        });


        accordians.forEach((item, index) => {
            item.classList.toggle('hidden', index >= 4);
        });


    cta.innerHTML = isExpanded ? 'See Less <i class="fa-solid fa-arrow-left"></i>' : 'See More <i class="fa-solid fa-arrow-right"></i>';
    }
});
