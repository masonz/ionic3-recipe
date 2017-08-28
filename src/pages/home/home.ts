import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, Slides } from 'ionic-angular';
import { trigger, state, style, transition, animate, query, stagger, group } from '@angular/animations';
import { Chefs } from '../../data/chefs.data';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('chefAnim', [
      transition('* => fadeIn', [
        query('.chef__name, .chef__desc', style({ opacity: 0 })),
        query('.chef__name, .chef__desc',
          stagger(100, animate(500, style({ opacity: 1, transform: 'translateY(0)' })))
        )
      ]),
      transition('* => fadeOut', [
        query('.chef__name, .chef__desc',
          stagger(100, animate(500, style({ opacity: 0, transform: 'translateY(-40px)' })))
        )
      ])
    ]),
  ]
})
export class HomePage {

  @ViewChild(Slides) slides: Slides;

  showToolbar: boolean;
  curIndex: number = 0;
  chefs: any[] = Chefs;
  state: string = 'fadeOut';

  constructor(
    public navCtrl: NavController,
    private ref: ChangeDetectorRef,
  ) { }

  ionViewDidLoad() {

  }

  public get chef() {
    return this.chefs[this.curIndex];
  }

  goToViewChef(data) {
    this.navCtrl.push('ChefPage', data);
  }

  goToSearch() {
    this.navCtrl.push('SearchPage');
  }

  slideDidChange() {
    if (this.slides.getActiveIndex() >= this.chefs.length) {
      this.curIndex = this.slides.getActiveIndex() - this.chefs.length;
    } else {
      this.curIndex = this.slides.getActiveIndex();
    }
    if (this.slides.getActiveIndex() % this.chefs.length == 0) {
      this.curIndex = 0;
    }
    this.state = 'fadeIn';
    this.numberAnim();
  }

  slideWillChange() {
    this.state = 'fadeOut';
  }

  numberAnim() {
    let count: number = 0;
    let likedTimer = null;
    let recipeTimer = null;
    let recipeDom = document.getElementsByClassName('chef__recipe-count')[0];
    let likedDom = document.getElementsByClassName('chef__likes-count')[0];
    recipeTimer = setInterval(() => {
      count++;
      recipeDom.innerHTML = count + ''
      if (count >= this.chef.recipeCount) return clearInterval(recipeTimer);
    }, 1000 / this.chef.recipeCount)
    likedTimer = setInterval(() => {
      count++;
      likedDom.innerHTML = count + ''
      if (count >= this.chef.liked) return clearInterval(likedTimer);
    }, 1000 / this.chef.liked)
  }
}
