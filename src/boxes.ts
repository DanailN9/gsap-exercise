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

const box = new PIXI.Graphics();
box.beginFill(0xffffff);
box.drawRect(100, 300, 100, 100);
box.endFill();
box.position.x = 100;
box.position.y = 300;
box.pivot.set(150, 350);
app.stage.addChild(box);
box.interactive = true;

const boxTwo = new PIXI.Graphics();
boxTwo.beginFill(0xffffff);
boxTwo.drawRect(300, 300, 100, 100);
boxTwo.endFill();
boxTwo.pivot.set(50, 50);
app.stage.addChild(boxTwo);
boxTwo.interactive = true;

const boxThree = new PIXI.Graphics();
boxThree.beginFill(0xffffff);
boxThree.drawRect(500, 300, 100, 100);
boxThree.endFill();
boxThree.position.x = 500;
boxThree.position.y = 300;
boxThree.pivot.set(550, 350);
app.stage.addChild(boxThree);
boxThree.interactive = true;

const boxFour = new PIXI.Graphics();
boxFour.beginFill(0xffffff);
boxFour.drawRect(700, 300, 100, 100);
boxFour.endFill();
boxFour.pivot.set(50, 50);
app.stage.addChild(boxFour);
boxFour.interactive = true;


document.body.appendChild(app.view as HTMLCanvasElement)
let degree = 360;
let blurring = 0;
let skewed = 0;
let paint = 0xffffff;

box.on('pointertap', () => {
    degree = check(degree, 360, -360)
    gsap.to(box, { pixi: { rotation: degree }, duration: 1, });
})

boxTwo.on('pointertap', () => {
    blurring = check(blurring, 10, 0);
    gsap.to(boxTwo, { pixi: { blur: blurring }, duration: 1 });
})

boxThree.on('pointertap', () => {
    skewed = check(skewed, 50, 0);
    gsap.to(boxThree, { pixi: { skewX: skewed }, duration: 1 });
})

boxFour.on('pointertap', () => {
    paint = check(paint, 0xffffff, 0xff0000);
    gsap.to(boxFour, { pixi: { tint: paint }, duration: 1 });
})


function check(name: number, defout: number, newValue: number) {
    return name === defout ? name = newValue : name = defout;

}