export const openAndCloseNav = (showNav) => {
    if (showNav) {
        document.querySelector('.nav').classList.add('show-nav');
        document.querySelector('.library') && document.querySelector('.library').classList.add('expand-library');
    } else {
        document.querySelector('.nav').classList.remove('show-nav');
        document.querySelector('.library') && document.querySelector('.library').classList.remove('expand-library');
    }
}