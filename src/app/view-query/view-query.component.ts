import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <audio #audio src="../assets/sample.mp3" ></audio> 
      <button (click)="audio.paused ? audio.play() : audio.pause()">Play / Pause</button> 
      <ng-container *ngIf="!audio.paused">Playing...</ng-container>
    </div>
  `,
  styles: ``
})
export class ViewQueryComponent {

  urls: string[] = [
    "../assets/sample.mp3",
    "../assets/sample.mp3",
    "../assets/sample.mp3",
    "../assets/sample.mp3",
  ]

  playPause(media: HTMLMediaElement) {
    media.paused
      ? media.play()
      : media.pause()
  }

}
