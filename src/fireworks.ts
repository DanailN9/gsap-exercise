import * as PIXI from 'pixi.js';
import { gsap, Power2 } from 'gsap';
import { PixiPlugin } from "gsap/PixiPlugin";
import { Graphics } from 'pixi.js';

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x000000
});


document.body.appendChild(app.view as HTMLCanvasElement);

const bg = new PIXI.Graphics();
bg.beginFill(0x000000);
bg.drawRect(0, 0, 800, 600);
bg.endFill();
bg.interactive = true;
app.stage.addChild(bg)

bg.on('pointertap', ({ globalX: x, globalY: y }) => {
    firework(x, y, ((Math.random() * 256 | 0) << 16) + ((Math.random() * 256 | 0) << 8) + (Math.random() * 256 | 0))
})

function particle(color: number, parent: PIXI.Container) {
    const box = new PIXI.Graphics();
    box.beginFill(color);
    box.drawRect(0, 0, 4, 4);
    box.endFill();

    gsap.fromTo(box, { pixi: { scale: 0 } }, { pixi: { x: 'random(-100, 100)', y: 'random(-100, 100)', rotation: 1440, scale: 2, blur: 1 }, duration: 2 })
    gsap.to(box, { pixi: { tint: color }, duration: 1 });
    gsap.to(box, { pixi: { tint: 0 }, duration: 1, delay: 1 });

    parent.addChild(box)

}

function firework(x: number, y: number, color: number) {
    const fireContainer = new PIXI.Container();
    fireContainer.position.set(x, y);

    for (let i = 0; i < 99; i++) {
        particle(color, fireContainer);
    }

    gsap.to(fireContainer, { pixi: { y: fireContainer.y + 100 }, duration: 2, ease: Power2.easeIn, onComplete: destroy, onCompleteParams: [fireContainer] });

    app.stage.addChild(fireContainer);
}

function destroy(container: PIXI.Container) {
    container.destroy();
}

