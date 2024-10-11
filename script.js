



function hexToRgb(random) {
    let bigint = parseInt(random.slice(1), 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
    return `${r}, ${g}, ${b}`;
}
function generatorColor() {
    let random = "#";
    random += (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')
    console.log(random);
    const collection = document.getElementsByClassName('hexcode')
    collection[0].innerText = random;
    const colorChange = document.getElementsByClassName('color-code');
    colorChange[0].style.backgroundColor = random
    const rgb = document.getElementsByClassName('rgb');
    rgb[0].innerText = "rgb (" + hexToRgb(random) + ")"
}

function CopyCode(type) {

    if (document.getElementsByClassName('hexcode')[0].innerText === '') {
        return;
    }
    else if (type === "hexcode") {
        const collection = document.getElementsByClassName('hexcode')
        let copyItem = collection[0].innerText;
        navigator.clipboard.writeText(copyItem)
    }
    else {
        let copyItem = document.getElementsByClassName('rgb')[0].innerText;
        navigator.clipboard.writeText(copyItem)
    }
    const status = document.getElementsByClassName('status')
    status[0].innerText = "Color copied to Clipboard"
    setTimeout(() => {
        status[0].innerText = "";
    }, 1000)

}

function darkmode() {
    document.body.classList.toggle('dark-mode')
}





