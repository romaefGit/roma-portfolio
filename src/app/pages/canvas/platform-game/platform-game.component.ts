import { NgClass } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { LanguageSwitchComponent } from 'src/app/components/language-switch/language-switch.component';
import { SoundComponent } from 'src/app/components/sound/sound.component';
import { themeType } from 'src/app/components/switch-theme/switch-theme.component';
import { ThemeService } from 'src/app/core/services/theme/theme.service';

@Component({
  selector: 'app-platform-game',
  standalone: true,
  imports: [LanguageSwitchComponent, HeaderComponent, NgClass, SoundComponent],
  templateUrl: './platform-game.component.html',
  styleUrl: './platform-game.component.scss',
})
export class PlatformGameComponent implements OnInit {
  // Theme
  private themeService = inject(ThemeService);
  currentTheme!: themeType; // Default theme
  themeSubscription: Subscription = new Subscription(); // Holds the subscription

  // Looking elements
  @ViewChild('coinSound', { static: false }) soundComponent!: SoundComponent;
  @ViewChild('jumpSound', { static: false }) jumpSound!: SoundComponent;
  @ViewChild('canvas', { static: true })

  // Canvas and ctx
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
    jumpPower: -18, // how high the ball jumps
    speed: 4, // movement speed
    grounded: true, // if the ball is on the ground
    img: new Image(),
    width: 60, // new property: width of the image
    height: 60, // new property: height of the image
  };

  // To store initial ball position for reset
  initialBallPosition = {
    x: this.ball.x,
    y: this.ball.y,
  };

  platforms: { x: number; y: number; width: number; height: number }[] = [];
  coins: {
    x: number;
    y: number;
    radius: number;
    collected: boolean;
    img: HTMLImageElement;
  }[] = [];
  coinCount: number = 0; // Tracks how many coins have been collected

  keys: any = {
    left: false,
    right: false,
    up: false,
  };

  resettingCanvas!: boolean;

  constructor() {}

  ngOnInit(): void {
    this.themeSubscription = this.themeService
      .getTheme()
      .subscribe((theme: themeType) => {
        this.currentTheme = theme;
        console.log('Theme changed to:', theme);
      });

    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.generateCanvas();
  }

  generateCanvas() {
    this.ball.img.src = 'assets/img/game/ball.png';
    const canvas = this.canvasRef.nativeElement;
    this.canvasWidth = window.innerWidth;
    if (window.innerWidth > 767) this.canvasWidth = window.innerWidth / 2;
    this.canvasHeight = 600;
    canvas.width = this.canvasWidth; // 80% of the window width
    canvas.height = this.canvasHeight; // Set height proportional to width (50% in this case)
    // Adjust game elements if necessary (e.g., reposition platforms, coins)
    this.resetBall();
    this.createElements();
    this.startGameLoop();
  }

  createElements() {
    this.createRandomPlatforms(4); // Create platforms
    this.createCoins(20); // Create 10 random coins
  }

  startGameLoop() {
    this.update();
    this.draw();
    requestAnimationFrame(() => this.startGameLoop());
  }

  // Create the resetBall method to reset the ball's position and state
  resetBall() {
    this.ball.x = this.initialBallPosition.x;
    this.ball.y = this.initialBallPosition.y;
    this.ball.vx = 0; // Reset velocity
    this.ball.vy = 0;
    this.ball.grounded = true; // Set ball as grounded
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    // Draw the ball
    // this.ctx.beginPath();
    // this.ctx.arc(this.ball.x, this.ball.y, this.ball.radius, 0, Math.PI * 2);
    // this.ctx.fillStyle = this.ball.color;
    // this.ctx.fill();
    // this.ctx.closePath();

    // Draw the ball using the image
    this.ctx.drawImage(
      this.ball.img,
      this.ball.x - this.ball.width / 2,
      this.ball.y - this.ball.height / 2,
      this.ball.width,
      this.ball.height,
    );

    // Draw the ground
    this.ctx.fillStyle = '#ffff';
    this.ctx.fillRect(0, this.canvasHeight - 10, this.canvasWidth, 10);

    // Draw the platforms
    this.platforms.forEach((platform) => {
      this.ctx.fillStyle = '#ff635f';
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
        this.ctx.drawImage(
          coin.img,
          coin.x - coin.radius,
          coin.y - coin.radius,
          coin.radius * 2,
          coin.radius * 2,
        );
        // this.ctx.beginPath();
        // this.ctx.arc(coin.x, coin.y, coin.radius, 0, Math.PI * 2);
        // this.ctx.fillStyle = 'gold';
        // this.ctx.fill();
        // this.ctx.closePath();
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
      // this.coins.push({ x, y, radius: 10, collected: false });
      const img = new Image();
      img.src = 'assets/img/game/coin.png'; // Replace 'coin.png' with your coin image file path
      this.coins.push({ x, y, radius: 20, collected: false, img });
    }
  }

  // Create platforms at specific positions
  createPlatforms() {
    this.platforms.push({ x: 100, y: 300, width: 200, height: 10 });
    this.platforms.push({ x: 400, y: 250, width: 150, height: 10 });
    this.platforms.push({ x: 600, y: 200, width: 100, height: 10 });

    this.platforms.push({ x: 1000, y: 200, width: 100, height: 10 });
    this.platforms.push({ x: 1300, y: 250, width: 100, height: 10 });
    this.platforms.push({ x: 1500, y: 300, width: 100, height: 10 });
  }

  createRandomPlatforms(platformCount: number) {
    // Clear existing platforms (optional)
    this.platforms = [];

    // Define platform height and other parameters (adjust as necessary)
    const platformHeight = 10; // Fixed platform height
    const platformMaxWidth = this.canvasWidth * 0.2; // Platform width can be up to 20% of canvas width
    const platformMinWidth = this.canvasWidth * 0.1; // Minimum platform width is 10% of canvas width
    const verticalSpacing = this.canvasHeight * 0.1; // Spacing between platforms vertically (10% of canvas height)

    // Loop to create platforms based on calculated dimensions
    for (let i = 0; i < platformCount; i++) {
      const platformWidth =
        Math.random() * (platformMaxWidth - platformMinWidth) +
        platformMinWidth; // Random width
      const x = i * (this.canvasWidth / platformCount); // Distribute platforms across the width
      const y = this.canvasHeight - i * verticalSpacing - 50; // Stack platforms from the bottom up

      this.platforms.push({
        x: x,
        y: y,
        width: platformWidth,
        height: platformHeight,
      });
    }
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
        if (this.soundComponent) this.soundComponent.playSound();
        coin.collected = true;
        this.coinCount++;
      }
    });

    // Reset horizontal velocity
    if (!this.keys.left && !this.keys.right) {
      this.ball.vx = 0;
    }
  }

  @HostListener('window:resize')
  onWindowResize() {
    // this.resizeCanvas();
  }

  // Listen for keyboard input
  // This hear the a,w,s keys to move the player
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'a':
        this.keys.left = true;
        break;
      case 'd':
        this.keys.right = true;
        break;
      case 'w': // Jump key
        // console.log('this.ball.grounded > ', this.ball.grounded);

        if (this.ball.grounded) {
          this.ball.vy = this.ball.jumpPower; // Jump
          if (this.jumpSound) this.jumpSound.playSound();
          this.ball.grounded = false;
        }
        break;
    }
  }

  // this stops the animation of horizontal movement
  @HostListener('window:keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent) {
    switch (event.key) {
      case 'a':
        this.keys.left = false;
        break;
      case 'd':
        this.keys.right = false;
        break;
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.themeSubscription) this.themeSubscription.unsubscribe();
  }
}
