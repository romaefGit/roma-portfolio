import {
  Component,
  ViewChild,
  AfterViewInit,
  Input,
  ChangeDetectionStrategy,
  OnInit,
  ElementRef,
  AfterContentInit,
} from '@angular/core';
import { ModalService } from 'src/app/core/services/modal/modal.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-video',
  standalone: true,
  imports: [],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent implements OnInit, AfterViewInit {
  @Input({ required: true }) url!: string;
  type!: VideosType;
  showVideo: boolean = false;

  @ViewChild('videoPlayer')
  videoPlayer!: ElementRef<HTMLVideoElement>;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.type = this.getVideoType(this.url);
    this.modalService.modalOpen$.subscribe((isOpen) => {
      // console.log('isOpen > ', isOpen);
      this.showVideo = isOpen;
      this.type = this.getVideoType(this.url);
      // console.log(`Video type detected: ${this.type}`);

      if (!isOpen) {
        this.closeVideo();
      }
    });
  }

  ngAfterViewInit(): void {}

  getVideoType(url: string): VideosType {
    const extension = url.split('.').pop()?.toLowerCase();
    return extension as VideosType;
  }

  // Reset video logic
  closeVideo() {
    if (this.videoPlayer.nativeElement) {
      this.videoPlayer.nativeElement.pause();
      this.videoPlayer.nativeElement.currentTime = 0; // Reset the video time to the start
      this.showVideo = false;
    }
  }

  onVideoLoad() {
    // console.log('Video metadata loaded, autoplay will start.');
  }

  onPlay() {
    // console.log('Video is playing');
  }

  onPause() {
    // console.log('Video is paused');
  }
}

// Video type declaration
export type VideosType =
  | 'webm'
  | 'mp4'
  | 'avi'
  | 'mov'
  | 'mkv'
  | 'flv'
  | 'wmv'
  | 'ogv'
  | 'mpeg'
  | '3gp';
