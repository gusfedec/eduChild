import { Component, OnInit } from '@angular/core';
import { ToastService } from '../shared/toast.service';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  constructor(private toastService: ToastService) {}

  botonArg: Boolean = false;
  botonBra: Boolean = false;
  botonUk: Boolean = false;
  botonColores: Boolean = false;
  botonAnimales: Boolean = false;
  botonNumeros: Boolean = false;

  ngOnInit() {
    this.toastService.playAudio('audioBird');
    this.toastService.playAudio('audioCat');

    /* this.nativeAudio
      .loop('uniqueId2')
      .then((sound) => {})
      .catch((err) => {});

    this.nativeAudio
      .setVolumeForComplexAsset('uniqueId2', 0.6)
      .then((sound) => {})
      .catch((err) => {});

    this.nativeAudio
      .stop('uniqueId1')
      .then((sound) => {})
      .catch((err) => {});

    this.nativeAudio
      .unload('uniqueId1')
      .then((sound) => {})
      .catch((err) => {}); */
  }
}
