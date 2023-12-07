import { Component, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Pipe({
    name: 'tronque',
    standalone: true,
})
export class TronquePipe implements PipeTransform {

    transform(word: string, max: number = 10): string {
        return word.length <= max ? word : `${word.substring(0, max)}...`;
    }

}

@Component({
    standalone: true,
    imports: [CommonModule, TronquePipe, FormsModule],

    selector: 'app-root',
    template: `
    <input [(ngModel)]="texte">
    <div>Texte original     : {{ texte }} </div>
    <div>Texte tronqué      : {{ texte | tronque }} </div>
    <div>Texte tronqué à 0  : {{ texte | tronque:0 }} </div>
    <div>Texte tronqué à 20 : {{ texte | tronque:20 }} </div>
  `,
})
export class PipesTronqueComponent {
    texte = 'Mon texte'
}