import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  HostListener,
  OnDestroy,
} from '@angular/core';
// https://codepen.io/Sashkan/pen/zxrrYO
// https://chatgpt.com/c/67153df4-d34c-800e-9bb5-cdc97f386bbc
@Component({
  selector: 'app-chest-pain',
  standalone: true,
  imports: [],
  templateUrl: './chest-pain.component.html',
  styleUrl: './chest-pain.component.scss',
})
export class ChestPainComponent implements OnInit, OnDestroy {
  @ViewChild('canvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;
  ctx!: CanvasRenderingContext2D;
  W: number = 800; // Set canvas width to 800px
  H: number = 800; // Set canvas height to 800px
  fps: number = 0;
  raf: any;
  running: boolean = false;
  TAU: number = Math.PI * 2;
  bots: Bot[] = [];
  B: number = 500;
  Cos = Math.cos(Math.PI / 77);
  Sin = Math.sin(Math.PI / 77);

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    const canvas = this.canvasRef.nativeElement;

    // Set canvas size explicitly to 1000x1000
    this.W = canvas.width = 1000;
    this.H = canvas.height = 1000;

    this.ctx = canvas.getContext('2d')!;

    this.reset();
    this.running = true;
    this.raf = requestAnimationFrame((t) => this.loop(t));

    // Add event listeners
    this.renderer.listen('document', 'click', () => this.toggleRunning());
    this.renderer.listen('document', 'keydown', (e: KeyboardEvent) =>
      this.handleKeydown(e),
    );
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.raf);
  }

  // Utility functions
  randint(n: number) {
    return Math.floor(n * Math.random());
  }
  choose(...args: any[]) {
    return args[this.randint(args.length)];
  }
  grey(nn: number) {
    const n = Math.floor((1 - nn) * 255);
    return `rgba(${n},0,0,0.3)`;
  }

  // Main loop
  loop(t: number) {
    if (this.running) this.raf = requestAnimationFrame((t) => this.loop(t));
    this.update();
    this.draw();
  }

  toggleRunning() {
    this.running = !this.running;
    if (this.running) this.raf = requestAnimationFrame((t) => this.loop(t));
  }

  handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      this.running = false;
      setTimeout(() => this.reset(), 50);
    }
  }

  reset() {
    this.ctx.clearRect(0, 0, this.W, this.H);
    this.bots = [];
    for (let i = 0; i < this.B; i++) {
      const v = Math.random() * 4 - 2;
      const t = Math.random() * this.TAU;
      this.bots.push(
        new Bot(
          this.W / 2,
          this.H / 2,
          v * Math.cos(t),
          v * Math.sin(t),
          this.grey(Math.random()),
          this.choose(0.99, 0.98, 0.97, 0.96, 0.95),
        ),
      );
    }
  }

  update() {
    this.bots.forEach((bot) => bot.update(this.Cos, this.Sin));
  }

  draw() {
    this.bots.forEach((bot) => bot.draw(this.ctx, this.TAU));
  }

  // Stop animation method
  stopAnimation() {
    this.running = false; // Stop the loop from running
    cancelAnimationFrame(this.raf); // Cancel the animation frame
    this.ctx.clearRect(0, 0, this.W, this.H); // Clear the canvas
  }
}

// Bot class
class Bot {
  x0: number;
  y0: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  decay: number;
  color: string;

  constructor(
    x: number,
    y: number,
    vx: number,
    vy: number,
    color: string,
    decay: number,
  ) {
    this.x0 = this.x = x;
    this.y0 = this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.radius = Math.random() * 5;
    this.decay = decay;
    this.color = color;
  }

  update(Cos: number, Sin: number) {
    this.x += this.vx;
    this.y += this.vy;

    const sign = Math.random() > 0.5 ? 1 : -1;
    const vx = this.vx;
    const vy = this.vy;
    const c = Cos;
    const s = sign * Sin;

    this.vx = vx * c - vy * s;
    this.vy = vx * s + vy * c;

    this.radius *= this.decay;
    if (this.radius < 0.3) {
      this.x = this.x0;
      this.y = this.y0;
      this.radius = 3;
      this.color = `rgba(${Math.floor((1 - Math.random()) * 255)}, 0, 0, 0.3)`;
    }
  }

  draw(ctx: CanvasRenderingContext2D, TAU: number) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, TAU);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}
