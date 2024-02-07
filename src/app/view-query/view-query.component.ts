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

    <div>
      <button (click)="push()">Ajouter piste</button>
      <button (click)="pop()">Supprimer piste</button>
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

  push() {
    this.urls.push("../assets/sample.mp3")
  }

  pop() {
    this.urls.pop()
  }

  playPause(media: HTMLMediaElement) {
    media.paused
      ? media.play()
      : media.pause()
  }

}
