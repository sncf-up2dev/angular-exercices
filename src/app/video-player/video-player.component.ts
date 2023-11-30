import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    standalone: true,
    imports: [CommonModule],

    selector: 'app-root',
    template: `
        <div class="border" (click)="playing = !playing">
            {{ playing }}
        </div>

        <div class="border" (wheel)="onWheel($event)">
            {{ value }}
        </div>
    `
})
export class VideoPlayerComponent {

    playing: boolean = false
    value: number = 0

    onWheel(event: WheelEvent): void {
        /* Stoppe le comportement par défaut du WheelEvent (scroll) */
        event.preventDefault()

        /* Le comportement de onWheel à implémenter ici */
    }

}