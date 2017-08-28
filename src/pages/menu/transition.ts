import { MenuType, Menu, Platform, Animation } from 'ionic-angular';

/*
* AMAZING idea by Paul Vetter:
* https://github.com/EbilPanda
*/

export class MenuShiftType extends MenuType {
  constructor(private menu: Menu, private plt: Platform) {
    super(plt);

    let contentOpenedX: string, menuClosedX: string, menuOpenedX: string;

    contentOpenedX = menu.width() * 0.45 + 'px';
    menuOpenedX = '0px';
    menuClosedX = -menu.width() + 'px';

    let menuAni = new Animation(plt, menu.getMenuElement());
    menuAni.fromTo('transform', 'translate3d(' + menuClosedX + ',0px,0px)', 'translate3d(0px,0px,0px)');
    this.ani.add(menuAni);

    let contentApi = new Animation(plt, menu.getContentElement());
    let scale = 0.6;
    contentApi.fromTo('transform', 'translate3d(0px,0px,0px) scale3d(1,1,1)', 'translate3d(' + contentOpenedX + ',0px,0px) scale3d(0.6,0.6,0.6)');
    // contentApi.fromTo('scale3d', '(1,1,1)', '(0.6,0.6,0.6)');
    // contentApi.beforeAddClass('opening');
    // contentApi.afterRemoveClass('opening');
    this.ani.add(contentApi);
  }
}