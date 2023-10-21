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
        description: "<p>Lorem imp sum</p>",
        img: "assets/gifs/ufos_fall.png",
        "social": [
          {
            type: 'youtube',
            url: 'javascript:',
            icon: 'fa-youtube'
          }
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
          {
            type: 'youtube',
            url: 'javascript:',
            icon: 'fa-youtube'
          }
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
          {
            type: 'youtube',
            url: 'javascript:',
            icon: 'fa-youtube'
          }
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
          {
            type: 'youtube',
            url: 'javascript:',
            icon: 'fa-youtube'
          }
        ]
      }
    },
  ]

  constructor() {

  }

  ngOnInit() {

  }

  showGif(index: number) {
    this.projects[index].toShow = this.projects[index].gif
  }

  hideGif(index: number) {
    console.log("hideGif");
    
    this.projects[index].toShow = this.projects[index].img
  }
}
