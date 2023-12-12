import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { Tree } from "./tree";

@Component({
    standalone: true,
    imports: [CommonModule],

    selector: 'app-tree',
    template: `
        <div class= "box">

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

}