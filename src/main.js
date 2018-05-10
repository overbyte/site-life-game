
const loadImage = (path) => {
    return new Promise((resolve, reject) => {
        const img = new Image(path);
        img.onload = () => resolve({ 
            w: img.width,
            h: img.height
        });
        img.onerror = reject;
        img.src = path;
        setTimeout(() => {
            console.log(img)
            debugger
        }, 1000)
    });
}

async function init() {
    const dim = await loadImage('assets/hannah.png');
    console.log(dim)
};


init();


