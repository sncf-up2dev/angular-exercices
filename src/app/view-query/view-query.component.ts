import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <audio #audio controls src="../assets/sample.mp3" ></audio> 
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

  playPause(media: HTMLMediaElement) {
    media.paused
      ? media.play()
      : media.pause()
  }

  push() {
    this.urls.push("../assets/sample.mp3")
    console.log(this.urls)
  }

  pop() {
    this.urls.pop()
    console.log(this.urls)
  }

}
