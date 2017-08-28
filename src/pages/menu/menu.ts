import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, Menu } from 'ionic-angular';

import { Subject } from 'rxjs';

/**
 * Generated class for the MenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  segment: 'menu'
})
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  @ViewChild('content') content: Nav;
  @ViewChild('menu') menu: Menu;

  private activePage = new Subject();
  private menuRoot = 'HomePage';
  private topMenu = [
    { title: 'home', component: 'HomePage', active: true, icon: 'home' },
    { title: 'seasonal', component: 'HomePage', active: false, icon: 'mz-spoon-knife' },
    { title: 'quick and easy', component: 'HomePage', active: false, icon: 'mz-cart' },
    { title: 'healthy meals', component: 'HomePage', active: false, icon: 'heart' }
  ];

  private underMenu = [
    { title: 'favorite', component: 'WelcomePage', active: false },
    { title: 'account setting', component: 'HomePage', active: false },
    { title: 'sign out', component: 'LoginPage', active: false }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  openPage(page) {
    this.content.setRoot(page.component);
    this.activePage.next(page);
  }

}
