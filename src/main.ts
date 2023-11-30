import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/demo-project/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { VideoPlayerComponent } from './app/video-player/video-player.component';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

/*
bootstrapApplication(VideoPlayerComponent)
  .catch((err) => console.error(err));
*/