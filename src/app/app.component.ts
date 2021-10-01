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
      //Precarga de audios de animales
      this.toastService.preloadAudio(
        'audioBird',
        'assets/audios/animales/bird.mp3'
      );
      this.toastService.preloadAudio(
        'audioCat',
        'assets/audios/animales/cat.mp3'
      );
      this.toastService.preloadAudio(
        'audioDog',
        'assets/audios/animales/dog.mp3'
      );
      this.toastService.preloadAudio(
        'audioFish',
        'assets/audios/animales/fish.mp3'
      );
      this.toastService.preloadAudio(
        'audioMouse',
        'assets/audios/animales/mouse.mp3'
      );
      this.toastService.preloadAudio(
        'audioPajaroBra',
        'assets/audios/animales/pajaro_brasil.mp3'
      );
      this.toastService.preloadAudio(
        'audioGatoBra',
        'assets/audios/animales/gato_brasil.mp3'
      );
      this.toastService.preloadAudio(
        'audioPerroBra',
        'assets/audios/animales/cachorro_brasil.mp3'
      );
      this.toastService.preloadAudio(
        'audioPezBra',
        'assets/audios/animales/pez_brasil.mp3'
      );
      this.toastService.preloadAudio(
        'audioRatonBra',
        'assets/audios/animales/raton_brasil.mp3'
      );
      this.toastService.preloadAudio(
        'audioPajaro',
        'assets/audios/animales/pajaro.mp3'
      );
      this.toastService.preloadAudio(
        'audioGato',
        'assets/audios/animales/gato.mp3'
      );
      this.toastService.preloadAudio(
        'audioPerro',
        'assets/audios/animales/perro.mp3'
      );
      this.toastService.preloadAudio(
        'audioPez',
        'assets/audios/animales/pez.mp3'
      );
      this.toastService.preloadAudio(
        'audioRaton',
        'assets/audios/animales/raton.mp3'
      );

      //Precarga de audios de colores
      this.toastService.preloadAudio(
        'audioYellow',
        'assets/audios/colores/yellow.mp3'
      );
      this.toastService.preloadAudio(
        'audioBlue',
        'assets/audios/colores/blue.mp3'
      );
      this.toastService.preloadAudio(
        'audioGreen',
        'assets/audios/colores/green.mp3'
      );
      this.toastService.preloadAudio(
        'audioPurple',
        'assets/audios/colores/purple.mp3'
      );
      this.toastService.preloadAudio(
        'audioRed',
        'assets/audios/colores/red.mp3'
      );
      this.toastService.preloadAudio(
        'audioAmarilloBra',
        'assets/audios/colores/amarillo_brasil.mp3'
      );
      this.toastService.preloadAudio(
        'audioAzulBra',
        'assets/audios/colores/azul_brasil.mp3'
      );
      this.toastService.preloadAudio(
        'audioVerdeBra',
        'assets/audios/colores/verde_brasil.mp3'
      );
      this.toastService.preloadAudio(
        'audioVioletaBra',
        'assets/audios/colores/violeta_brasil.mp3'
      );
      this.toastService.preloadAudio(
        'audioRojoBra',
        'assets/audios/colores/rojo_brasil.mp3'
      );
      this.toastService.preloadAudio(
        'audioAmarillo',
        'assets/audios/colores/amarillo.mp3'
      );
      this.toastService.preloadAudio(
        'audioAzul',
        'assets/audios/colores/azul.mp3'
      );
      this.toastService.preloadAudio(
        'audioVerde',
        'assets/audios/colores/verde.mp3'
      );
      this.toastService.preloadAudio(
        'audioVioleta',
        'assets/audios/colores/violeta.mp3'
      );
      this.toastService.preloadAudio(
        'audioRojo',
        'assets/audios/colores/rojo.mp3'
      );
    });
  }
}
