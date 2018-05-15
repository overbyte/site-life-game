import {input} from '/src/input.js';
import {handleInput, move} from '/src/physics.js';
import {init as initRenderer} from '/src/render.js';

const renderCtx = initRenderer();
const loadImage = (path) => {
    return new Promise((resolve, reject) => {
        const img   = new Image(path);
        img.onload  = () => resolve(img);
        img.onerror = reject;
        img.src     = path;
    });
}
const hero = {
    dim:    {w: 16, h: 24},
    pos:    {x: 0, y: 0},
    vel:    {x: 0, y: 0},
    grounded: true,
    img:    undefined,
}

async function init() {
    const img = await loadImage('/assets/hannah.png');
    hero.img = img;
    tick();
};

function tick() {
    handleInput(hero, input[0]);
    move([{x:0, y:256, w:256, h:16}], hero);

    renderCtx.drawImage(hero.img, 0, 0, 16, 24, 
            hero.pos.x, hero.pos.y, 16, 24);

    renderCtx.fillStyle = 'red';
    renderCtx.fillRect(0, 256, 256, 16);

    window.requestAnimationFrame(tick);
}

init();

