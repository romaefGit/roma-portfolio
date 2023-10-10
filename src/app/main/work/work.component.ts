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
      gif: "assets/gifs/hypercasual.gif",
      img: "assets/gifs/hypercasual.png",
      modal_info: {
        id:"hypercasual",
        title: "Platform 2D game",
        subtitle: "Unity",
        description: "<p>Lorem imp sum</p>",
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
      name: "Ovni",
      type: "Unity",
      gif: "assets/gifs/ovni.gif",
      img: "assets/gifs/ovni.png",
      modal_info: {
        id:"ovni",
        title: "Platform 2D game",
        subtitle: "Unity",
        description: "<p>Lorem imp sum</p>",
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
      modal_info: {
        id:"roma_pong",
        title: "Platform 2D game",
        subtitle: "Unity",
        description: "<p>Lorem imp sum</p>",
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
}
