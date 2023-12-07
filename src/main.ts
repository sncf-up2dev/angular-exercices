import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';
import { PipesArrayComponent } from './app/pipes-exercice/pipes-array.component';
import { VideoPlayerComponent } from './app/video-player/video-player.component';

/*
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
*/

bootstrapApplication(VideoPlayerComponent)
  .catch((err) => console.error(err));