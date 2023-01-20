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

const circle = new PIXI.Graphics();
circle.beginFill(0x000000);
circle.drawCircle(0, 0, 50);
circle.endFill();
circle.x = 100;
circle.y = 100;
app.stage.addChild(circle);

const circleOne = new PIXI.Graphics();
circleOne.beginFill(0x000000);
circleOne.drawCircle(0, 0, 50);
circleOne.endFill();
circleOne.x = 100;
circleOne.y = 300;
app.stage.addChild(circleOne);

const circleTwo = new PIXI.Graphics();
circleTwo.beginFill(0x000000);
circleTwo.drawCircle(0, 0, 50);
circleTwo.endFill();
circleTwo.x = 100;
circleTwo.y = 500;
app.stage.addChild(circleTwo);

document.body.appendChild(app.view as HTMLCanvasElement);

gsap.to(circle, { pixi: { x: 700 }, duration: 2, delay: 1, });
gsap.to(circle.scale, { x: 1.5, y: 1.5, duration: 1, delay: 1 });
gsap.to(circle.scale, { x: 1, y: 1, duration: 1, delay: 2 });

gsap.to(circleOne, { pixi: { x: 700 }, duration: 2, delay: 1, ease: 'linear' });
gsap.to(circleOne.scale, { x: 1.5, y: 1.5, duration: 1, delay: 1, ease: 'Elastic.easeOut' });
gsap.to(circleOne.scale, { x: 1, y: 1, duration: 1, delay: 2, ease: 'Elastic.easeIn' });

gsap.to(circleTwo, { pixi: { x: 700 }, duration: 2, delay: 1, ease: 'Sine.easeInOut' });
gsap.to(circleTwo.scale, { x: 1.5, y: 1.5, duration: 1, delay: 1, ease: 'Bounce.easeOut' });
gsap.to(circleTwo.scale, { x: 1, y: 1, duration: 1, delay: 2, ease: 'Bounce.easeIn' });

