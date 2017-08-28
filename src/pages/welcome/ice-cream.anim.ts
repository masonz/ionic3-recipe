import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js';

declare var mina: any;

export const iceCreamAnim = function (snap) {
  let ice = snap.select('#ice-cream');
  let iceStick = ice.select('.ice-cream__stick').attr({ opacity: 0 });
  let iceChocolate = ice.select('.ice-cream__chocolate').attr({ opacity: 0 });
  let iceCream = ice.select('.ice-cream__cream').attr({ 'fill-opacity': 0 });

  let shadow = ice.select('.ice-cream__shadow').attr({ transform: 's0 0, t0 0' });
  let iceStickRight = ice.select('.ice-cream__stick--right').attr({ opacity: 0 });
  let iceChocolateRight = ice.select('.ice-cream__chocolate--right').attr({ opacity: 0 });
  let iceCreamRight = ice.select('.ice-cream__cream--right').attr({ opacity: 0 });

  setTimeout(() => {
    iceStick.animate({ opacity: 1, }, 300, mina.bounce);
  }, 300);

  setTimeout(() => {
    iceChocolate.animate({ opacity: 1 }, 300, mina.bounce);
  }, 500);

  setTimeout(() => {
    iceCream.animate({ 'fill-opacity': 1 }, 500, mina.ease);
  }, 800);

  // setTimeout(() => {
  //   iceCream.animate({ d: path }, 300, mina.bounce);
  // }, 1100);

  // load shadow
  setTimeout(() => {
    shadow.animate({ transform: 's1 1, t0 0' }, 500, mina.bounce);
  }, 1200);
  setTimeout(() => {
    iceStickRight.animate({ opacity: 1 }, 150, mina.bounce);
  }, 1350);
  setTimeout(() => {
    iceChocolateRight.animate({ opacity: 1 }, 150, mina.bounce);
  }, 1500);
  setTimeout(() => {
    iceCreamRight.animate({ opacity: 1 }, 150, mina.bounce);
  }, 1650);
}