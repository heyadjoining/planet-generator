import { fabric } from 'fabric';
import { Attribute } from './Types';

export class Planet {
    private canvas?: fabric.Canvas | fabric.StaticCanvas;

    constructor(
        public body: Attribute,
        public background: Attribute,
        public orbit: Attribute,
        public eyes: Attribute,
        public mouth: Attribute,
        public hands: Attribute,
        public hat: Attribute,
        public features: Attribute,
    ) {
    }

    private async loadImage(base64: string) {
        return new Promise<void>((res) => {
            fabric.Image.fromURL(base64, (img) => {
                img.selectable = false;
                this?.canvas?.add(img);
                res();
            });
        });
    }

    public async setCanvas(canvas: fabric.Canvas | fabric.StaticCanvas) {
        this.canvas = canvas;
    }

    public async draw() {
        if (!this.canvas) {
            return;
        }

        await this.canvas.clear();

        if ((this.canvas as any).selection) {
            (this.canvas as any).selection = false;
        }

        for (const item of [
            this.background,
            this.body,
            this.orbit,
            this.features,
            this.eyes,
            this.mouth,
            this.hands,
            this.hat,
        ]) {
            if (!item || item.image === '') {
                continue;
            }

            await this.loadImage(item.image);
        }
    }
}
