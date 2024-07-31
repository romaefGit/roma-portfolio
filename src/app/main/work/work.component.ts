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
      img: "assets/gifs/ufos_fall.avif",
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
        img: "assets/gifs/ufos_fall.avif",
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
      img: "assets/gifs/jumping_ball_hypercasual.avif",
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
        img: "assets/gifs/hypercasual.avif",
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
      img: "assets/gifs/ovni.avif",
      toShow: "",
      description: "My first pixel art approach with assets from platzi course.",
      modal_info: {
        id:"ovni",
        title: "Platform 2D game",
        subtitle: "Unity",
        description: "<p>I did a 2D platform video game, using some aseets by Platzi, that they shared in the course that I follow. It have 2 levels, the main character have some enemys and coins to collect, so I had to develop the behaviour of every element in the game, also the portal animation, I use a particle system and other things to let pass the main character to the next level.</p>",
        img: "assets/gifs/ovni.avif",
        "social": [
          // {
          //   type: 'youtube',
          //   url: 'javascript:',
          //   icon: 'fa-youtube'
          // }
        ],
      }
    },
    {
      name: "Roma Pong",
      type: "Unity",
      gif: "assets/gifs/roma_pong.gif",
      img: "assets/gifs/roma_pong.avif",
      toShow: "",
      description: "Using my own assets on a simple but cool copy of pong.",
      modal_info: {
        id:"roma_pong",
        title: "Platform 2D game",
        subtitle: "Unity",
        description: "<p>I did a 2D videogame like the original PONG using Unity 2019.3.0a4 and the good feature is that I used a global variable to let the user choose the side to play. I know, it is not a big deal, but for me was good to learn.</p>",
        img: "assets/gifs/roma_pong.avif",
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

  artProjects: any[] = [
    {
      name: "Neil 3D model",
      type: "Maya",
      gif: "assets/gifs/maya/ufo_fall_1.gif",
      img: "assets/gifs/maya/ufo_fall_1.avif",
      toShow: "",
      description: "2D character concept to 3D model.",
      modal_info: {
        id:"neil_3d",
        title: "Neil 3D model",
        subtitle: "Maya",
        description: 
        `<p>The 3D model character for "Neil" was meticulously crafted using Maya, a leading 3D modeling software. This alien character features a sleek, otherworldly design that reflects its extraterrestrial origins. The model showcases a unique blend of organic and futuristic elements, with a slender build and elongated limbs, giving it an agile and graceful appearance.`+
        `</p>`,
        img: "assets/gifs/maya/ufo_fall_1.avif",
        "social": [
          // {
          //   type: 'youtube',
          //   url: 'javascript:',
          //   icon: 'fa-youtube'
          // }
        ],
        parts: [
          {
            id: 'neil_3d_Basic',
            type: "Maya and Photoshop",
            name: "Basic model",
            gif: "assets/gifs/maya/ufo_fall_process.gif",
            img: "assets/gifs/maya/ufo_fall_process.avif",
            toShow: "",
            description: "The entire 3D model, including the head, body is designed with a low-poly structure, optimized for performance without compromising on visual quality. The mesh is simplified with a focus on maintaining a minimal polygon count while preserving the essential forms and features.",
          },
          {
            id: 'neil_3d_head',
            type: "Maya",
            name: "Head model",
            gif: "assets/gifs/maya/ufo_fall_2.gif",
            img: "assets/gifs/maya/ufo_fall_2.avif",
            toShow: "",
            description: "The model features well-defined edge loops, particularly around the eyes and mouth, known as mask loops, which enhance the natural flow and realistic expression of the face. These loops provide a clean and efficient mesh structure, crucial for achieving lifelike animations and detailed facial expressions.",
          },
          {
            id: 'neil_3d_body',
            type: "Maya",
            name: "Body model",
            gif: "assets/gifs/maya/ufo_fall_body.gif",
            img: "assets/gifs/maya/ufo_fall_body.avif",
            toShow: "",
            description: "The 3D body model is crafted with meticulous attention to topology, prioritizing clean, quads-only geometry to prevent issues with deformation during animation. The model incorporates strategically placed edge loops around key joints and anatomical features, such as the shoulders, elbows, and knees, which facilitate realistic bending and movement.",
          },
          {
            id: 'neil_3d_clothes',
            type: "Maya",
            name: "Clothes and prop model",
            gif: "assets/gifs/maya/ufo_fall_Clothes.gif",
            img: "assets/gifs/maya/ufo_fall_Clothes.avif",
            toShow: "",
            description: "The mesh is composed predominantly of quads, avoiding ngons and poles, which ensures smooth deformation during animation and prevents issues such as texture stretching. Edge loops are strategically placed to define the natural folds and creases in the fabric, especially around areas of movement like the joints and waist.",
          }
        ]
      }
    },
  ]


  constructor() {

  }

  ngOnInit() {
    // Create a configuration for the confetti animation

  }

  showGif(type: string, index: number, indexChild:any) {
    // console.log('lego');
    // console.log(type, index, indexChild);
    
    if(type == 'game') this.projects[index].toShow = this.projects[index].gif
    if(type == 'art') this.artProjects[index].toShow = this.artProjects[index].gif
    if(type == 'art_part' && indexChild >= 0) {
      this.artProjects[index].modal_info.parts[indexChild].toShow = this.artProjects[index].modal_info.parts[indexChild].gif
    }
  }

  hideGif(type: string, index: number, indexChild:any) {
    if(type == 'game') this.projects[index].toShow = this.projects[index].img
    if(type == 'art') this.artProjects[index].toShow = this.artProjects[index].img
    if(type == 'art_part' && indexChild >= 0) {
      this.artProjects[index].modal_info.parts[indexChild].toShow = this.artProjects[index].modal_info.parts[indexChild].img
    }
  }
}
