const styles = document.createElement('style');

document.head.appendChild(styles).innerHTML = `
    .block {
        width: 100px;
        height: 100px;
        background: black;
        position: absolute;
        left: 0;
        top: 0;
        transition: 0.5s;
    }
`
const block = document.querySelector('.block');

function getRandomColor(){
    const color_1 = Math.floor(Math.random() * 256);
    const color_2 = Math.floor(Math.random() * 256);
    const color_3 = Math.floor(Math.random() * 256);

    return `rgb( ${color_1}, ${color_2}, ${color_3})`;
}

function getRandomCoordinates(){
    const bodyWidth = window.innerWidth;
    const bodyHeight = window.innerHeight;
    const blockWidth = block.offsetWidth;
    const blockHeight = block.offsetHeight;

    const blockLeft = Math.floor(Math.random() * (bodyWidth - blockWidth));
    const blockTop = Math.floor(Math.random() * (bodyHeight - blockHeight));

    return { left: blockLeft, top: blockTop };
}

setInterval(() => {
    block.style.backgroundColor = getRandomColor();
}, 500)

setInterval(() => {
    const { left, top } = getRandomCoordinates();

    block.style.left = left + 'px';
    block.style.top = top + 'px';
}, 1000);