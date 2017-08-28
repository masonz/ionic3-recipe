import { Component, Input, ElementRef, Renderer } from '@angular/core';

/**
 * Generated class for the ShrinkingHeaderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'shrinking-header',
  templateUrl: 'shrinking-header.html'
})
export class ShrinkingHeaderComponent {

  @Input('scrollArea') scrollArea: any;
  @Input('headerArea') headersArea: any;
  @Input('headerHeight') headerHeight: number;
  @Input('backgroundImg') backgroundImg: string = 'https://user-images.githubusercontent.com/10757519/29750009-3cd7f0e4-8b6a-11e7-8590-dad7a03c430e.jpg';

  newHeaderHeight: any;
  toggleBtn: any;

  constructor(
    public element: ElementRef,
    public renderer: Renderer,
  ) { }

  ngAfterViewInit() {
    // init..
    let page = document.getElementsByClassName('show-page')[0];
    let screenHeight = page ? page.clientHeight : 250;
    this.headerHeight = this.headerHeight || screenHeight * 0.385;
    this.toggleBtn = this.headersArea.getElementsByClassName('bar-button-menutoggle')[0];
    let background = this.backgroundImg ? `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${this.backgroundImg})` : '';
    this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
    this.renderer.setElementStyle(this.headersArea, 'backgroundImage', background);
    this.renderer.setElementStyle(this.headersArea, 'backgroundPosition', 'center');
    this.renderer.setElementStyle(this.headersArea, 'backgroundSize', 'cover');
    this.scrollArea.ionScroll.subscribe((ev) => {
      this.resizeHeader(ev);
    });
  }

  resizeHeader(ev) {

    ev.domWrite(() => {

      this.newHeaderHeight = this.headerHeight - ev.scrollTop;

      if (this.newHeaderHeight < 0) {
        this.newHeaderHeight = 0;
      } else {
        this.renderer.setElementStyle(this.element.nativeElement, 'height', this.newHeaderHeight + 'px');
      }

    });
  }
}
