document.addEventListener('DOMContentLoaded', () => {
    const changeTextBtn = document.getElementById('changeTextBtn');
    const mainText = document.getElementById('mainText');

    changeTextBtn.addEventListener('click', () => {
        if (mainText.textContent === 'This is a simple static site hosted on GitHub Pages.') {
            mainText.textContent = 'You clicked the button! The text has changed.';
            changeTextBtn.textContent = 'Click again!';
        } else {
            mainText.textContent = 'This is a simple static site hosted on GitHub Pages.';
            changeTextBtn.textContent = 'Click Me!';
        }
    });
});
