export const openAndCloseNav = (showNav) => {
    if (showNav) {
        document.querySelector('.nav').classList.add('show-nav');
        document.querySelector('.section') && document.querySelector('.section').firstChild.classList.add('expand-section');
    } else {
        document.querySelector('.nav').classList.remove('show-nav');
        document.querySelector('.section') && document.querySelector('.section').firstChild.classList.remove('expand-section');
    }
}