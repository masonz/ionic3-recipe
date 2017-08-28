import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController, MenuController, Content } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Subject } from "rxjs/Subject";

@Component({
  templateUrl: 'app.html',
})
export class MyApp {

  rootPage: any = 'MenuPage';
  loader: any;

  @ViewChild('content') content: Nav;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private loadingCtrl: LoadingController,
    private storage: Storage,
    private menuCtrl: MenuController
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.presentLoading();

      this.storage.get('welcomeShown').then((result) => {
        if (result) {
          this.rootPage = 'MenuPage';
          statusBar.styleDefault();
          splashScreen.hide();
        } else {
          this.rootPage = 'WelcomePage';
          this.storage.set('welcomeShown', true);
        }
        this.loader.dismiss();
      });
    });
  }

  presentLoading() {
    this.storage.set('welcomeShown', false);
    this.loader = this.loadingCtrl.create({
      content: "Loading..."
    });
    this.loader.present();
  }
}
