import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';
import { PipesArrayComponent } from './app/pipes-exercice/pipes-array.component';
import { VideoPlayerComponent } from './app/video-player/video-player.component';
import { AppModule } from './app/demo-project/app.module';
import { AppComponent } from './app/demo-project/app.component';
import { FolderComponent } from './app/folder-component/folder.component';

/*
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
*/

bootstrapApplication(FolderComponent).catch((err) => console.error(err));
