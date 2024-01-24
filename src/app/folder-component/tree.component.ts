import { CommonModule } from "@angular/common";
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, booleanAttribute, inject } from "@angular/core";
import { Tree } from "./tree";
import { FolderComponent } from "./folder.component";

@Component({
    standalone: true,
    imports: [CommonModule],

    selector: 'app-tree',
    template: `
        <div class= "box" (click)="onClick($event)">

           {{ completePath }} <button (click)="getName($event)">Bubble Name</button>

            <ng-container *ngIf="expanded">
                <app-tree *ngFor="let child of tree.children" [tree]="child" (clickEvent)="clickEvent.emit($event)" />
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
export class TreeComponent implements OnInit {

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


    /* Méthode récursive chemin complet */
    /* ngOnInit est utilisé à la place du constructeur car l'attribur tree n'est pas assigné avant */

    parent = inject(TreeComponent, { optional: true, skipSelf: true })

    completePath!: string

    ngOnInit() {
        this.completePath = this.parent
            ? this.parent.completePath + '/' + this.tree.value
            : this.tree.value
    }

    /* Propagation d'évènements dans l'arborescence de composants */

    @Output()
    clickEvent = new EventEmitter<string>()

    getName(event: Event) {
        event.stopPropagation()
        this.clickEvent.emit(this.tree.value)
    }



}