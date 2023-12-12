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