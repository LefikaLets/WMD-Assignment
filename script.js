

const picks = [...document.querySelectorAll('.pick')];
const arrownext = [...document.querySelectorAll('.arrownext')];
const arrowprev = [...document.querySelectorAll('.arrowprev')];

picks.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    arrownext[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    arrowprev[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})