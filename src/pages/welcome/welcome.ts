import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { WelcomeData } from '../../data/welcome.data';

import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js';
import { toastAnim } from './toast.anim';
import { JuiceAnim } from './juice.anim';
import { cakeAnim } from './cake.anim';
import { iceCreamAnim } from './ice-cream.anim';

/**
 * Generated class for the WelcomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  @ViewChild(Slides) slides: Slides;

  snap: any;
  slideData: any[] = WelcomeData;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private element: ElementRef,
    private renderer: Renderer
  ) { }

  ionViewDidEnter() {
    this.slideChanged();
  }

  slideChanged() {
    let currentIndex: number = this.slides.getActiveIndex();
    let prevIndex: number = this.slides.getPreviousIndex();
    // beyond sildes, reset prevIndex 
    if (prevIndex >= this.slideData.length) {
      prevIndex = this.slideData.length - 1;
    }
    // active edge, return
    if (currentIndex >= this.slideData.length || currentIndex < 0) { return; }
    this.svgOut(prevIndex);
    this.svgIn(currentIndex);
  }

  svgIn(index: number) {
    let slide = this.slideData[index];
    let svgUrl = slide.svgUrl;
    let svgId = slide.svgId;
    Snap.load(svgUrl, res => {
      this.snap = Snap(`#${svgId}`);
      this.snap.append(res);
      switch (index) {
        case 0: toastAnim(this.snap); break;
        case 1: JuiceAnim(this.snap); break;
        case 2: cakeAnim(this.snap); break;
        case 3: iceCreamAnim(this.snap); break;
      }
    });
  }

  svgOut(index: number) {
    if (typeof index == 'number') {
      let prevSlide = this.slideData[index];
      let prevSvgId = prevSlide.svgId;
      if (prevSvgId) {
        document.getElementById(prevSvgId).innerHTML = '';
      }
    }
  }

  goToHome() {
    this.navCtrl.setRoot('LoginPage');
  }

}
