document.addEventListener('DOMContentLoaded', async function () {
    makeResizableDiv('.resizable-left');
});


function makeResizableDiv(div) {
    const element = document.querySelector(div);
    const currentResizer = document.querySelectorAll(div + ' .resizer');

    if(!currentResizer)
        return null;
    if(!currentResizer[0])
        return null;
    currentResizer[0].addEventListener('mousedown', (e) => {
        e.preventDefault();
        window.addEventListener('mousemove', resize);
        window.addEventListener('mouseup', stopResize);
    });
    
    function resize(e) {
        element.style.width = e.pageX - element.getBoundingClientRect().left + 'px';
    }
    
    function stopResize() {
        window.removeEventListener('mousemove', resize);
    }
};