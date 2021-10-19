import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../shared/authentication-service';
import { ToastService } from '../shared/toast.service';
import { GetUserFromEmail } from '../get-user-from-email.pipe';

@Component({
  selector: 'app-logout',
  template: ` <ion-icon
    name="log-out-outline"
    (click)="signOut()"
    style="font-size:40px; vertical-align:middle;"
  ></ion-icon>`,
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  cargando: boolean = false;

  constructor(
    public authService: AuthenticationService,
    public toastService: ToastService,
    public user: GetUserFromEmail
  ) {}

  async ngOnInit() {
    let isLog = await this.authService.isLoggedInn();
    console.log(isLog);
    console.log(isLog.email);
  }

  signOut() {
    this.toastService.presentLoadingWithOptions();

    this.cargando = true;
    this.authService.SignOut().finally(() => {
      setTimeout(() => {
        this.toastService.cancelLoading();
      }, 500);
    });
  }
}
