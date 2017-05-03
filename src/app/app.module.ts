import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { RaspberryPiMobileApp } from './app.component';

/* PAGES */
import { DashboardPageComponent } from './../components/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './../components/login-page/login-page.component';
import { CreatorPageComponent } from './../components/creator-page/creator-page.component';
import { SettingsPageComponent } from './../components/settings-page/settings-page.component';

/* SERVICES */
import { HttpApi } from '../services/http-api.service';
import { AppRepo, APP_REPOS } from '../services/app-repo.service';
import { StorageService } from '../services/storage.service';
import { Auth } from '../services/auth.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    RaspberryPiMobileApp,
    DashboardPageComponent,
    LoginPageComponent,
    CreatorPageComponent,
    SettingsPageComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(RaspberryPiMobileApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    RaspberryPiMobileApp,
    DashboardPageComponent,
    LoginPageComponent,
    CreatorPageComponent,
    SettingsPageComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpApi,
    StorageService,
    AppRepo,
    Auth,
    ...APP_REPOS,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
