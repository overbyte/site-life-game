export function init() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    return { canvas, ctx };
};

