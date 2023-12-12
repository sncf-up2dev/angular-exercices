import { Component, NgModule, inject } from "@angular/core";
import { TreeComponent } from "./tree.component";
import { Tree } from "./tree";

@Component({
    standalone: true,
    selector: 'app-root',
    template: ` 
        <app-tree [tree]="folder" />
    `,
    imports: [TreeComponent],
})
export class FolderComponent {

    /* Composant racine de l'application 
        Les composants de cet exercice sont standalones (pas de module)
        Rappel pour bootstrap sur un composant standalone (dans le main.ts) :
            - bootstrapApplication(FolderComponent).catch((err) => console.error(err));
    */
    /* /!\ Ce fichier ne doit pas être modifié pour l'exercice ! */

    readonly folder = new Tree(
        "root",
        [
            new Tree(
                "folder",
                [
                    new Tree("data"),
                    new Tree("confidential")
                ]
            ),
            new Tree("readme")
        ]
    )

}