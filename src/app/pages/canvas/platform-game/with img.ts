// @ViewChild('canvas', { static: true })
// canvasRef!: ElementRef<HTMLCanvasElement>;
// ctx!: CanvasRenderingContext2D;
// canvasWidth: number = 800;
// canvasHeight: number = 400;

// ball = {
//   x: 100,
//   y: 350,
//   width: 40, // new property: width of the image
//   height: 40, // new property: height of the image
//   vx: 0,
//   vy: 0,
//   gravity: 0.5,
//   friction: 0.8,
//   jumpPower: -12,
//   speed: 4,
//   grounded: true,
//   img: new Image(), // ball image
// };

// platforms: { x: number; y: number; width: number; height: number }[] = [];
// coins: {
//   x: number;
//   y: number;
//   radius: number;
//   collected: boolean;
//   img: HTMLImageElement;
// }[] = [];
// coinCount: number = 0;

// keys: any = {
//   left: false,
//   right: false,
//   up: false,
// };

// constructor() {}

// ngOnInit() {
//   const canvas = this.canvasRef.nativeElement;
//   this.ctx = canvas.getContext('2d')!;
//   canvas.width = this.canvasWidth;
//   canvas.height = this.canvasHeight;

//   // Load ball and coin images
//   this.ball.img.src = 'assets/ball.png'; // Replace 'ball.png' with your ball image file path
//   this.createCoins(10);

//   this.createPlatforms();
//   this.startGameLoop();
// }

// createCoins(numberOfCoins: number) {
//   for (let i = 0; i < numberOfCoins; i++) {
//     const x = Math.random() * (this.canvasWidth - 40) + 20;
//     const y = Math.random() * (this.canvasHeight - 60) + 20;
//     const img = new Image();
//     img.src = 'assets/coin.png'; // Replace 'coin.png' with your coin image file path
//     this.coins.push({ x, y, radius: 10, collected: false, img });
//   }
// }

// startGameLoop() {
//   this.update();
//   this.draw();
//   requestAnimationFrame(() => this.startGameLoop());
// }

// update() {
//   if (this.keys.left) this.ball.vx = -this.ball.speed;
//   if (this.keys.right) this.ball.vx = this.ball.speed;

//   if (!this.ball.grounded) {
//     this.ball.vy += this.ball.gravity;
//   }

//   this.ball.x += this.ball.vx;
//   this.ball.y += this.ball.vy;

//   if (this.ball.x + this.ball.width / 2 > this.canvasWidth) {
//     this.ball.x = this.canvasWidth - this.ball.width / 2;
//   } else if (this.ball.x - this.ball.width / 2 < 0) {
//     this.ball.x = this.ball.width / 2;
//   }

//   this.checkPlatformCollision();

//   this.coins.forEach((coin) => {
//     if (!coin.collected && this.checkCollision(this.ball, coin)) {
//       coin.collected = true;
//       this.coinCount++;
//     }
//   });

//   if (!this.keys.left && !this.keys.right) {
//     this.ball.vx = 0;
//   }
// }

// draw() {
//   this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

//   // Draw the ball using the image
//   this.ctx.drawImage(
//     this.ball.img,
//     this.ball.x - this.ball.width / 2,
//     this.ball.y - this.ball.height / 2,
//     this.ball.width,
//     this.ball.height,
//   );

//   // Draw the ground
//   this.ctx.fillStyle = 'green';
//   this.ctx.fillRect(0, this.canvasHeight - 10, this.canvasWidth, 10);

//   // Draw the platforms
//   this.platforms.forEach((platform) => {
//     this.ctx.fillStyle = 'brown';
//     this.ctx.fillRect(
//       platform.x,
//       platform.y,
//       platform.width,
//       platform.height,
//     );
//   });

//   // Draw the coins using the image
//   this.coins.forEach((coin) => {
//     if (!coin.collected) {
//       this.ctx.drawImage(
//         coin.img,
//         coin.x - coin.radius,
//         coin.y - coin.radius,
//         coin.radius * 2,
//         coin.radius * 2,
//       );
//     }
//   });
// }

// checkCollision(ball: any, coin: any): boolean {
//   const distX = ball.x - coin.x;
//   const distY = ball.y - coin.y;
//   const distance = Math.sqrt(distX * distX + distY * distY);
//   return distance < ball.width / 2 + coin.radius;
// }

// createPlatforms() {
//   this.platforms.push({ x: 100, y: 300, width: 200, height: 10 });
//   this.platforms.push({ x: 400, y: 250, width: 150, height: 10 });
//   this.platforms.push({ x: 600, y: 200, width: 100, height: 10 });
// }

// checkPlatformCollision() {
//   this.ball.grounded = false;

//   this.platforms.forEach((platform) => {
//     if (
//       this.ball.x + this.ball.width / 2 > platform.x &&
//       this.ball.x - this.ball.width / 2 < platform.x + platform.width &&
//       this.ball.y + this.ball.height / 2 > platform.y &&
//       this.ball.y + this.ball.height / 2 < platform.y + platform.height + 5 && // Allow a small margin for landing
//       this.ball.vy >= 0
//     ) {
//       this.ball.y = platform.y - this.ball.height / 2;
//       this.ball.vy = 0;
//       this.ball.grounded = true;
//       this.ball.vx *= this.ball.friction;
//     }
//   });

//   if (this.ball.y + this.ball.height / 2 >= this.canvasHeight) {
//     this.ball.y = this.canvasHeight - this.ball.height / 2;
//     this.ball.vy = 0;
//     this.ball.grounded = true;
//     this.ball.vx *= this.ball.friction;
//   }
// }

// @HostListener('window:keydown', ['$event'])
// handleKeyDown(event: KeyboardEvent) {
//   switch (event.key) {
//     case 'ArrowLeft':
//       this.keys.left = true;
//       break;
//     case 'ArrowRight':
//       this.keys.right = true;
//       break;
//     case 'w':
//       if (this.ball.grounded) {
//         this.ball.vy = this.ball.jumpPower;
//         this.ball.grounded = false;
//       }
//       break;
//   }
// }

// @HostListener('window:keyup', ['$event'])
// handleKeyUp(event: KeyboardEvent) {
//   switch (event.key) {
//     case 'ArrowLeft':
//       this.keys.left = false;
//       break;
//     case 'ArrowRight':
//       this.keys.right = false;
//       break;
//   }
// }
