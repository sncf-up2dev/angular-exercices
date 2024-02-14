import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngFor="let url of urls">
      <audio controls #audio [src]="url"></audio> 
      <button (click)="playPause(audio)">Play / Pause</button> 
      <ng-container *ngIf="!audio.paused">Playing...</ng-container>
    </div>

    <div>
      <button (click)="push()">Ajouter piste</button>
      <button (click)="pop()">Supprimer piste</button>
    </div>

    <app-child />

  `,
  styles: ``
})
export class ViewQueryComponent {

  @ViewChildren('audio')
  audioElements?: QueryList<ElementRef<HTMLAudioElement>>

  playPause(audio: HTMLAudioElement) {
    if (audio.paused) {
      this.audioElements?.forEach(element => {
        element.nativeElement.pause()
        element.nativeElement.currentTime = 0
      });
    }

    audio?.paused ?
      audio?.play() :
      audio?.pause()
  }

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

}
