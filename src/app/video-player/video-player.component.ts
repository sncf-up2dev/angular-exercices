import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    standalone: true,
    imports: [CommonModule],

    selector: 'app-root',
    template: `
        <video #video 
            (wheel)="onWheel($event, video)"
            (click)="onClick(video)"
            (mousedown)="onMouseDown($event)"
            (mouseup)="onMouseUp($event)"
            (mousemove)="onMouseMove($event)"
            [style.translate]="translate()"
        >
            <source src="assets/video.mp4"/>
        </video>
    `
})
export class VideoPlayerComponent {

    playing: boolean = false
    value: number = 0

    onClick(media: HTMLMediaElement): void {

        // L'évènement click est déclenché lors d'un mouseUp et un mouseDown sur le même élément
        if (!this.isDragged) {
            media.paused ? media.play() : media.pause()
        }
    }

    onWheel(event: WheelEvent, media: HTMLMediaElement): void {
        /* Stoppe le comportement par défaut du WheelEvent (scroll) */
        event.preventDefault()

        media.currentTime += event.deltaY >= 0 ? 1 : -1
    }

    translationX: number = 0
    translationY: number = 0
    clickLocationX: number = 0
    clickLocationY: number = 0

    // isDragging = je suis en train de déplacer la vidéo
    isDragging: boolean = false

    // isDragged = la fenètre a été drag
    isDragged: boolean = false

    translate(): string {
        return `${this.translationX}px ${this.translationY}px`
    }

    onMouseDown(event: MouseEvent): void {

        // clientX et clientY donnent la position de la souris (https://developer.mozilla.org/en-US/docs/Web/CSS/CSSOM_view/Coordinate_systems#viewport)

        /* Je conserve la position de la souris au moment du click (avec clickLocationX et clickLocationY )
           Cette position sera la référence pour suivre le mouvement de la souris */

        this.clickLocationX = event.clientX
        this.clickLocationY = event.clientY

        // Après le premier déplacement de la fenêtre, je dois prendre que la fenètre a déja été déplacée (translate != 0)
        // Le point de référence devient la position - la translation déja faite

        this.clickLocationX -= this.translationX
        this.clickLocationY -= this.translationY

        this.isDragging = true

        // Controle sur le click, pour ne pas play/pause la vidéo si la fenêtre a été bougée
        this.isDragged = false

    }

    onMouseUp(event: MouseEvent): void {
        this.isDragging = false
    }

    onMouseMove(event: MouseEvent): void {
        this.isDragged = true

        // Ne déplacer la fenètre que si on est en train de déplacer
        if (this.isDragging) {
            this.translationX = event.clientX - this.clickLocationX
            this.translationY = event.clientY - this.clickLocationY
        }

    }

}



