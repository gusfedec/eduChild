import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ToastService } from './shared/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform, private toastService: ToastService) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.toastService.preloadAudio(
        'audioBird',
        'assets/audios/animales/bird.mp3'
      );
      this.toastService.preloadAudio(
        'audioCat',
        'assets/audios/animales/cat.mp3'
      );
    });
  }
}
