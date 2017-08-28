import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChefPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-chef',
  templateUrl: 'chef.html',
})
export class ChefPage {

  section: string = 'info';
  chef: any = { name: null };
  showToolbar: boolean = false;
  recipes = [
    { name: 'Recipe I', thumb: 'assets/images/recipe.png' },
    { name: 'Recipe I', thumb: 'assets/images/recipe.png' },
    { name: 'Recipe I', thumb: 'assets/images/recipe.png' },
    { name: 'Recipe I', thumb: 'assets/images/recipe.png' },
    { name: 'Recipe I', thumb: 'assets/images/recipe.png' },
    { name: 'Recipe I', thumb: 'assets/images/recipe.png' },
    { name: 'Recipe I', thumb: 'assets/images/recipe.png' },
    { name: 'Recipe I', thumb: 'assets/images/recipe.png' }
  ]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ref: ChangeDetectorRef
  ) { }

  ionViewDidLoad() {
    this.chef = this.navParams.data;
  }

  goBack() {
    this.navCtrl.pop();
  }

  segmentChanged(ev: any) {
    let { value } = ev;
    this.section = value;
  }

  viewReicpe() {
    this.navCtrl.push('RecipePage');
  }

}
