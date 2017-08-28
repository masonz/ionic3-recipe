import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  keyword: string;
  results: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.results.push({ name: 'Miso Steak', chef: 'Jamie Malo', thumb: 'assets/images/recipe.png' });
    this.results.push({ name: 'Miso Steak', chef: 'Jamie Malo', thumb: 'assets/images/recipe.png' });
    this.results.push({ name: 'Miso Steak', chef: 'Jamie Malo', thumb: 'assets/images/recipe.png' });
    this.results.push({ name: 'Miso Steak', chef: 'Jamie Malo', thumb: 'assets/images/recipe.png' });
    this.results.push({ name: 'Miso Steak', chef: 'Jamie Malo', thumb: 'assets/images/recipe.png' });
    this.results.push({ name: 'Miso Steak', chef: 'Jamie Malo', thumb: 'assets/images/recipe.png' });
    this.results.push({ name: 'Miso Steak', chef: 'Jamie Malo', thumb: 'assets/images/recipe.png' });
    this.results.push({ name: 'Miso Steak', chef: 'Jamie Malo', thumb: 'assets/images/recipe.png' });
    this.results.push({ name: 'Miso Steak', chef: 'Jamie Malo', thumb: 'assets/images/recipe.png' });
    this.results.push({ name: 'Miso Steak', chef: 'Jamie Malo', thumb: 'assets/images/recipe.png' });
    this.results.push({ name: 'Miso Steak', chef: 'Jamie Malo', thumb: 'assets/images/recipe.png' });
    this.results.push({ name: 'Miso Steak', chef: 'Jamie Malo', thumb: 'assets/images/recipe.png' });
  }

  onInput(ev: any) {

  }

  onCancel(ev: any) {

  }

  goBack() {
    // this.navCtrl.popToRoot();
    this.navCtrl.setRoot('MenuPage');
  }

}
