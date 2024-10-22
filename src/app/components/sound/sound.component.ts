import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.scss'],
  standalone: true,
  imports: [],
})
export class SoundComponent implements AfterViewInit {
  @Input({ required: true }) path!: string;
  @ViewChild('audioPlayer', { static: false })
  audioPlayer!: ElementRef<HTMLAudioElement>;

  constructor() {}

  ngAfterViewInit() {
    if (this.audioPlayer) {
      const audioElement = this.audioPlayer.nativeElement;
      audioElement.src = this.path;
      audioElement.load();
    }
  }

  playSound() {
    if (this.audioPlayer) {
      const audioElement = this.audioPlayer.nativeElement;
      audioElement.pause(); // Pause if it's already playing
      audioElement.currentTime = 0; // Reset to the beginning
      audioElement.load(); // Ensure any cached data is cleared
      audioElement.play(); // Play the audio
    }
  }
}
