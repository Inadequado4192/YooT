function draw(ctx, size, x, y) {
    let p = this.padding || 0;
    ctx.fillStyle = this.color ? this.color : "#000";
    ctx.fillRect(x * size + p, y * size+ p, size - p * 2, size - p * 2);
}
const OBJECTS = {
    block: {
        block: true,
        draw
    },
    player: {
        color: "#EE0000",
        only: 1,
        padding: 10,
        required: true,
        block: true,
        draw
    },
    finish: {
        color: "#67E667",
        padding: 5,
        required: true,
        block: false,
        draw
    },
    coin: {
        color: "#c9d12a",
        padding: 5,
        required: false,
        block: false,
        draw
    }
};