import { CommonModule } from "@angular/common";
import { Component, Input, booleanAttribute } from "@angular/core";
import { Tree } from "./tree";

@Component({
    standalone: true,
    imports: [CommonModule],

    selector: 'app-tree',
    template: `
        <div class= "box" (click)="onClick($event)">

            {{ tree.value }}

            <ng-container *ngIf="expanded">
                <app-tree *ngFor="let child of tree.children" [tree]="child" />
            </ng-container>
            <!-- 
                Le composant a créer est un composant récursif :
                Quelque part dans votre template, le composant va "s'appeler" lui même

                <app-tree [tree]=??? />
            -->

        </div>
    `,
    styles: `
        .box {
            display: block; 
            border: 5px solid black;
            margin: 10px;
        }
    `
})
export class TreeComponent {

    @Input({ required: true })
    tree!: Tree

    onClick(event: Event) {
        event.stopPropagation()
        this.expanded = !this.expanded
    }

    @Input(
        { transform: booleanAttribute }
    )
    expanded = false

    /*
        Composant à modifier pour l'exercice
        Vous pouvez modifier le composant et le template
    */

}