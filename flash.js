const body = document.body;
const btn = document.querySelectorAll('.flash')[0];

btn.addEventListener('mouseenter', () => {
    body.classList.add('show');
});

btn.addEventListener('mouseleave', () => {
    body.classList.remove('show');
});
