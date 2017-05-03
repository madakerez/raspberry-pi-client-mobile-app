import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController, MenuController } from 'ionic-angular';

import { DashboardPageComponent } from '../components/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from '../components/login-page/login-page.component';
import { CreatorPageComponent } from '../components/creator-page/creator-page.component';
import { SettingsPageComponent } from '../components/settings-page/settings-page.component';

import { Auth } from '../services/auth.service';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class RaspberryPiMobileApp {
  @ViewChild('nav') nav: NavController;
  rootPage:any;
  userAuthorized = true;

  // root pages
  loginPageRef = LoginPageComponent;
  dashboardPageRef = DashboardPageComponent;
  creatorPageRef = CreatorPageComponent;
  settingsPageRef = SettingsPageComponent;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public menu: MenuController,
    private auth: Auth,
    private storage: Storage
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.storage.ready().then(() => {
        let isAuthorized$ = this.auth.isAuthorized();
        isAuthorized$.skip(1).subscribe((value) => {
          this.setRootPage(value);
        });
      });
    });
  }

  pushPage(page){
    this.rootPage = page;
  }

  setRootPage(isAuthorized) {
    if (!isAuthorized) {
      this.rootPage = LoginPageComponent;
      this.menu.enable(false);
    } else {
      this.rootPage = DashboardPageComponent;
      this.menu.enable(true)
    }
  }

  logout() {
    //TODO api/logout
  }
}
