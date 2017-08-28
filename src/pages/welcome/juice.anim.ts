import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js';

declare var mina: any;

export const JuiceAnim = function (snap) {
  let orageJuice = snap.select('#orange-juice');
  let orangeOut = orageJuice.select('.orange__out').attr({ opacity: 1, transform: 's0 0' });
  let orangeOutRight = orageJuice.select('.orange__out--right').attr({ opacity: 1, transform: 's0 0' });
  let orangeInner = orageJuice.select('.orange__inner').attr({ opacity: 1, transform: 's0 0' });
  let orangeInnerRight = orageJuice.select('.orange__inner--right').attr({ opacity: 1, transform: 's0 0' });
  let glass = orageJuice.select('.orange__glass').attr({ opacity: 1 });
  let juice = orageJuice.select('.juice').attr({ opacity: 0, d: 'm299.992,435.01901l-87.984,0c-17.421,0 -31.675,-3.40715 -31.675,-7.57132l0,-44.57169l151.334,0l0,44.57169c0,4.16416 -14.254,7.57132 -31.675,7.57132z' });

  let shadow = orageJuice.select('.shadow').attr({ transform: 's0 0, t0 0' });
  let glassRight = orageJuice.select('.orange__glass--right').attr({ opacity: 0 });
  let juiceRight = orageJuice.select('.juice--right').attr({ opacity: 0 });

  setTimeout(() => {
    orangeOut.animate({ transform: 's1 1' }, 300, mina.bounce);
    orangeOutRight.animate({ transform: 's1 1' }, 300, mina.bounce);
    orangeInner.animate({ transform: 's1 1' }, 300, mina.bounce);
    orangeInnerRight.animate({ transform: 's1 1' }, 300, mina.bounce);
  }, 500);

  setTimeout(() => {
    juice.animate({ opacity: 1, d: "M299.992,435.019h-87.984c-17.421,0-31.675-14.254-31.675-31.675V216.876h151.334v186.468C331.667,420.765,317.413,435.019,299.992,435.019z" }, 800, mina.bounce);
  }, 700);

  // load shadow
  setTimeout(() => {
    shadow.animate({ transform: 's1 1, t0 0' }, 400, mina.bounce);
  }, 1300);
  setTimeout(() => {
    juiceRight.animate({ opacity: 1 }, 100, mina.bounce);
  }, 1400)
  setTimeout(() => {
    glassRight.animate({ opacity: 1 }, 100, mina.bounce);
  }, 1500)
}