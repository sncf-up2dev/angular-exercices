import { Component, Input } from "@angular/core";
import { Topic } from "./app.component";

@Component({
    selector: 'app-console',
    template: `
    <div class="terminal">
        <pre *ngIf="topic else default" [style.color]="topic.color">{{topic.content}}</pre>    
    </div>

    <ng-template #default>
        <pre>Aucun topic n'est selectionné</pre>
    </ng-template>
    `,
    styleUrls: ['./app.component.scss']
})
export class ConsoleComponent {

    @Input({
        required: true
    })
    topic: Topic | undefined

}






