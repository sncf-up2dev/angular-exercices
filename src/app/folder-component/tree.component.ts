import { CommonModule } from "@angular/common";
import { Component, HostListener, InjectionToken, Input, OnInit, Pipe, PipeTransform, SkipSelf, inject } from "@angular/core";

export class Tree {
    constructor(
        public value: string,
        public children: Tree[] = []
    ) { }
}

@Component({
    standalone: true,
    imports: [CommonModule],

    selector: 'app-tree',
    template: `
    <div class="border">
        
    </div>
    `,
})
export class TreeComponent {

    @Input({ required: true })
    tree!: Tree

}