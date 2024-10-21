import { NgClass } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { LanguageSwitchComponent } from 'src/app/components/language-switch/language-switch.component';

@Component({
  selector: 'app-platform-game',
  standalone: true,
  imports: [LanguageSwitchComponent, HeaderComponent, NgClass],
  templateUrl: './platform-game.component.html',
  styleUrl: './platform-game.component.scss',
})
export class PlatformGameComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;
  ctx!: CanvasRenderingContext2D;
  canvasWidth: number = 800;
  canvasHeight: number = 400;

  ball = {
    x: 100,
    y: 350, // ground level
    radius: 20,
    color: 'blue',
    vx: 0, // velocity in x
    vy: 0, // velocity in y
    gravity: 0.5, // gravity effect
    friction: 0.8, // friction when landing
    jumpPower: -12, // how high the ball jumps
    speed: 4, // movement speed
    grounded: true, // if the ball is on the ground
  };

  platforms: { x: number; y: number; width: number; height: number }[] = [];
  coins: { x: number; y: number; radius: number; collected: boolean }[] = [];
  coinCount: number = 0; // Tracks how many coins have been collected

  keys: any = {
    left: false,
    right: false,
    up: false,
  };

  constructor() {}

  ngOnInit() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    canvas.width = this.canvasWidth;
    canvas.height = this.canvasHeight;

    this.createPlatforms(); // Create platforms
    this.createCoins(10); // Create 10 random coins
    this.startGameLoop();
  }

  startGameLoop() {
    this.update();
    this.draw();
    requestAnimationFrame(() => this.startGameLoop());
  }

  update() {
    // Horizontal movement
    if (this.keys.left) this.ball.vx = -this.ball.speed;
    if (this.keys.right) this.ball.vx = this.ball.speed;

    // Apply gravity
    if (!this.ball.grounded) {
      this.ball.vy += this.ball.gravity;
    }

    // Move the ball
    this.ball.x += this.ball.vx;
    this.ball.y += this.ball.vy;

    // Boundary checking (left and right)
    if (this.ball.x + this.ball.radius > this.canvasWidth) {
      this.ball.x = this.canvasWidth - this.ball.radius;
    } else if (this.ball.x - this.ball.radius < 0) {
      this.ball.x = this.ball.radius;
    }

    // Ground or platform collision
    this.checkPlatformCollision();

    // Coin collection
    this.coins.forEach((coin) => {
      if (!coin.collected && this.checkCollision(this.ball, coin)) {
        coin.collected = true;
        this.coinCount++;
      }
    });

    // Reset horizontal velocity
    if (!this.keys.left && !this.keys.right) {
      this.ball.vx = 0;
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    // Draw the ball
    this.ctx.beginPath();
    this.ctx.arc(this.ball.x, this.ball.y, this.ball.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = this.ball.color;
    this.ctx.fill();
    this.ctx.closePath();

    // Draw the ground
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(0, this.canvasHeight - 10, this.canvasWidth, 10);

    // Draw the platforms
    this.platforms.forEach((platform) => {
      this.ctx.fillStyle = 'brown';
      this.ctx.fillRect(
        platform.x,
        platform.y,
        platform.width,
        platform.height,
      );
    });

    // Draw the coins
    this.coins.forEach((coin) => {
      if (!coin.collected) {
        this.ctx.beginPath();
        this.ctx.arc(coin.x, coin.y, coin.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = 'gold';
        this.ctx.fill();
        this.ctx.closePath();
      }
    });
  }

  // Check collision between the ball and the coin
  checkCollision(ball: any, coin: any): boolean {
    const distX = ball.x - coin.x;
    const distY = ball.y - coin.y;
    const distance = Math.sqrt(distX * distX + distY * distY);
    return distance < ball.radius + coin.radius;
  }

  // Create a certain number of coins at random positions
  createCoins(numberOfCoins: number) {
    for (let i = 0; i < numberOfCoins; i++) {
      const x = Math.random() * (this.canvasWidth - 40) + 20; // Ensure coin is within canvas
      const y = Math.random() * (this.canvasHeight - 60) + 20;
      this.coins.push({ x, y, radius: 10, collected: false });
    }
  }

  // Create platforms at specific positions
  createPlatforms() {
    this.platforms.push({ x: 100, y: 300, width: 200, height: 10 });
    this.platforms.push({ x: 400, y: 250, width: 150, height: 10 });
    this.platforms.push({ x: 600, y: 200, width: 100, height: 10 });
  }

  // Check if the ball is on a platform
  checkPlatformCollision() {
    this.ball.grounded = false;

    this.platforms.forEach((platform) => {
      if (
        this.ball.x + this.ball.radius > platform.x &&
        this.ball.x - this.ball.radius < platform.x + platform.width &&
        this.ball.y + this.ball.radius > platform.y &&
        this.ball.y + this.ball.radius < platform.y + platform.height + 5 && // Allow a small margin for landing
        this.ball.vy >= 0 // Ensure ball is falling down
      ) {
        this.ball.y = platform.y - this.ball.radius; // Place ball on top of the platform
        this.ball.vy = 0;
        this.ball.grounded = true;
        this.ball.vx *= this.ball.friction; // Apply friction when landing
      }
    });

    // Ground collision
    if (this.ball.y + this.ball.radius >= this.canvasHeight) {
      this.ball.y = this.canvasHeight - this.ball.radius;
      this.ball.vy = 0;
      this.ball.grounded = true;
      this.ball.vx *= this.ball.friction; // Apply friction
    }
  }

  // Listen for keyboard input
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowLeft':
        this.keys.left = true;
        break;
      case 'ArrowRight':
        this.keys.right = true;
        break;
      case 'w': // Jump key
        if (this.ball.grounded) {
          this.ball.vy = this.ball.jumpPower; // Jump
          this.ball.grounded = false;
        }
        break;
    }
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowLeft':
        this.keys.left = false;
        break;
      case 'ArrowRight':
        this.keys.right = false;
        break;
    }
  }
}
