export const input = [
    {
        up: false,
        down: false,
        left: false,
        right: false,
        a: false,
        b: false,
        start: false,
    },
    {
        up: false,
        down: false,
        left: false,
        right: false,
        a: false,
        b: false,
        start: false,
    }
];

window.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowUp')
        input[0].up = true;
    else if(event.key === 'ArrowDown')
        input[0].down = true;
    else if(event.key === 'ArrowLeft')
        input[0].left = true;
    else if(event.key === 'ArrowRight')
        input[0].right = true;
    else if(event.key === '1')
        input[0].start = true
    else if(event.key === 'j')
        input[0].a = true
    else if(event.key === 'k')
        input[0].b = true
});

window.addEventListener('keyup', (event) => {
    if(event.key === 'ArrowUp')
        input[0].up = false;
    else if(event.key === 'ArrowDown')
        input[0].down = false;
    else if(event.key === 'ArrowLeft')
        input[0].left = false;
    else if(event.key === 'ArrowRight')
        input[0].right = false;
    else if(event.key === '1')
        input[0].start = false
    else if(event.key === 'j')
        input[0].a = false
    else if(event.key === 'k')
        input[0].b = false
});
