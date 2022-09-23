const menuBtn = document.querySelector('.meny-button');
let menyOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menyOpen) {
        menuBtn.classList.add('open');
        menyOpen = true;

    } else {
        menuBtn.classList.remove('open');
        menyOpen = false;

    }
});