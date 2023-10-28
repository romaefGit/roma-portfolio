import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  projects: any[] = [
    {
      name: "Ufo fall",
      type: "Unity",
      gif: "assets/gifs/ufos_fall.gif",
      img: "assets/gifs/ufos_fall.png",
      toShow: "",
      description: "2D platformer DEMO inspired on INSIDE.",
      modal_info: {
        id:"ufos_fall",
        title: "Platform 2D game",
        subtitle: "Unity",
        description: 
        `<p>"UFO Fall" is a 2D adventure game that delves into the enigmatic Roswell case, offering a fresh perspective on what happened to the mysterious creatures that crashed in the desert.`+
        `<br> As the player, you'll step into the shoes of one of these extraterrestrial beings, on a quest to find their ship and rescue their crew. However, there's a twist—the alien protagonist has lost its memory, save for a deep love for plants and hazy recollections of the crash.`+
        `<br> Explore a captivating 2D world filled with intriguing challenges and puzzles as you uncover the secrets behind the Roswell incident. Traverse the desert landscapes, infiltrate the infamous Area 51, and interact with a variety of unique characters and creatures.`+
        `<br>"UFO Fall" blends captivating storytelling with creative gameplay, allowing players to utilize the alien plant-loving abilities to navigate the obstacles they encounter on their journey. Discover the truth behind the crash, the alien's mission, and the mysteries of Area 51 as you progress through this work in progress game.`+
        `<br>Embark on a unique adventure and prepare to unravel the secrets of "UFO Fall" as you guide the amnesiac alien in their quest to recover their memories and rescue their lost crew.</p>`,
        img: "assets/gifs/ufos_fall.png",
        "social": [
          // {
          //   type: 'youtube',
          //   url: 'javascript:',
          //   icon: 'fa-youtube'
          // }
        ]
      }
    },
    {
      name: "Hypercasual Ball",
      type: "Unity",
      gif: "assets/gifs/jumping_ball_hypercasual.gif",
      img: "assets/gifs/jumping_ball_hypercasual.png",
      toShow: "",
      description: "Hypercasual game that loads level blocks while the player advance.",
      modal_info: {
        id:"hypercasual",
        title: "Platform 2D game",
        subtitle: "Unity",
        description: "<p>This project was developed with Unity version 2021.3.15f1 <br>"+
        "This project use a level blocks logic to autogenerate blocks when the user advance in the game to achieve a good score. <br>"+
        "I create the character from scratch, I use some assets that I created before to my indie game. <br>"+
        "It have a parallax effect in the background.</p>",
        img: "assets/gifs/hypercasual.png",
        "social": [
          // {
          //   type: 'youtube',
          //   url: 'javascript:',
          //   icon: 'fa-youtube'
          // }
        ]
      }
    },
    {
      name: "Lost In Space",
      type: "Unity",
      gif: "assets/gifs/ovni.gif",
      img: "assets/gifs/ovni.png",
      toShow: "",
      description: "My first pixel art approach with assets from platzi course.",
      modal_info: {
        id:"ovni",
        title: "Platform 2D game",
        subtitle: "Unity",
        description: "<p>I did a 2D platform video game, using some aseets by Platzi, that they shared in the course that I follow. It have 2 levels, the main character have some enemys and coins to collect, so I had to develop the behaviour of every element in the game, also the portal animation, I use a particle system and other things to let pass the main character to the next level.</p>",
        img: "assets/gifs/ovni.png",
        "social": [
          // {
          //   type: 'youtube',
          //   url: 'javascript:',
          //   icon: 'fa-youtube'
          // }
        ]
      }
    },
    {
      name: "Roma Pong",
      type: "Unity",
      gif: "assets/gifs/roma_pong.gif",
      img: "assets/gifs/roma_pong.png",
      toShow: "",
      description: "Using my own assets on a siple but cool copy of pong.",
      modal_info: {
        id:"roma_pong",
        title: "Platform 2D game",
        subtitle: "Unity",
        description: "<p>I did a 2D videogame like the original PONG using Unity 2019.3.0a4 and the good feature is that I used a global variable to let the user choose the side to play. I know, it is not a big deal, but for me was good to learn.</p>",
        img: "assets/gifs/roma_pong.png",
        "social": [
          // {
          //   type: 'youtube',
          //   url: 'javascript:',
          //   icon: 'fa-youtube'
          // }
        ]
      }
    },
  ]

  constructor() {

  }

  ngOnInit() {
    // Create a configuration for the confetti animation

  }

  showGif(index: number) {
    this.projects[index].toShow = this.projects[index].gif
  }

  hideGif(index: number) {
    console.log("hideGif");
    
    this.projects[index].toShow = this.projects[index].img
  }
}
