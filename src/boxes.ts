import * as PIXI from 'pixi.js';
import { gsap } from 'gsap';
import { PixiPlugin } from "gsap/PixiPlugin";

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x999999
});

function createBoxes(x, y, color) {
    const box = new PIXI.Graphics();
    box.beginFill(color);
    box.drawRect(-50, -50, 100, 100);
    box.endFill();
    box.position.set(x, y)
    app.stage.addChild(box);
    box.interactive = true;

    return box;
}

const box = createBoxes(100, 300, 0xffffff);
const boxTwo = createBoxes(300, 300, 0xffffff)
const boxThree = createBoxes(500, 300, 0xffffff);
const boxFour = createBoxes(700, 300, 0xffffff);



document.body.appendChild(app.view as HTMLCanvasElement)

const rotate = gsap.to(box, { pixi: { rotation: 360 }, duration: 1, paused: true });
box.on('pointertap', () => {
    (rotate.reversed() || rotate.paused()) ? rotate.play() : rotate.reverse();
})

const blurring = gsap.to(boxTwo, { pixi: { blur: 10 }, duration: 1, paused: true });
boxTwo.on('pointertap', () => {
    (blurring.reversed() || blurring.paused()) ? blurring.play() : blurring.reverse();
})

const skewed = gsap.to(boxThree, { pixi: { skewX: 50 }, duration: 1, paused: true });
boxThree.on('pointertap', () => {

    (skewed.reversed() || skewed.paused()) ? skewed.play() : skewed.reverse();
})

const painting = gsap.to(boxFour, { pixi: { tint: 0xff0000 }, paused: true, duration: 1 });
boxFour.on('pointertap', () => {
    (painting.reversed() || painting.paused()) ? painting.play() : painting.reverse();
})