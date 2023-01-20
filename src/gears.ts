import * as PIXI from 'pixi.js';
import { gsap, Power0 } from 'gsap';
import { PixiPlugin } from "gsap/PixiPlugin";

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x999999
});

document.body.appendChild(app.view as HTMLCanvasElement);

let animation;

async function spawnGear(url: string, x: number, y: number, time: number, direction: number) {
    const texture = await PIXI.Assets.load(url);

    const gear = PIXI.Sprite.from(texture);

    gear.anchor.set(0.5);

    gear.x = x;
    gear.y = y;

    app.stage.addChild(gear);

    gsap.to(gear, {
        pixi: { rotation: direction }, duration: time, stagger: {
            each: 0.5,
            repeat: -1
        }, ease: Power0.easeOut, id: 'spining'
    });

    animation = await gsap.getById('spining');

}

spawnGear('assets/gear12.png', 300, 117, 6, -360);
spawnGear('assets/gear16.png', 542, 471, 8, -360);
spawnGear('assets/gear20.png', 212, 441, 10, -360);
spawnGear('assets/gear24.png', 676, 388, 12, 360);
spawnGear('assets/gear28.png', 142, 130, 14, 360);
spawnGear('assets/gear40.png', 400, 300, 20, 360);

async function fast() {
    console.log(animation)
}

fast()




