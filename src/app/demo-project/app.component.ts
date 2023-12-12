import { Component } from '@angular/core';

export type Topic = {
  id: string,
  title: string,
  color: string,
  content: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  topics: Topic[] = [
    { id: 'component', title: 'New Component', content: 'ng generate component xyz', color: 'white' },
    { id: 'material', title: 'Angular Material', content: 'ng add @angular/material', color: 'blue' },
    { id: 'pwa', title: 'Add PWA Support', content: 'ng add @angular/pwa', color: 'red' },
    { id: 'dependency', title: 'Add Dependency', content: 'ng add _____', color: 'yellow' },
    { id: 'test', title: 'Run and Watch Tests', content: 'ng test', color: 'orange' },
    { id: 'build', title: 'Build for Production', content: 'ng build', color: 'purple' },
  ]

  selectedTopic: Topic | undefined

}
