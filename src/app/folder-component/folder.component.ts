import { Component, NgModule, inject } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Tree } from "./tree.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TreeComponent } from "./tree.component";

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