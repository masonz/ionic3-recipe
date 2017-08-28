import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js';

declare var mina: any;

export const cakeAnim = function (snap) {
  let cake = snap.select('#cake');
  let cakePlate = cake.select('.cake__plate').attr({ opacity: 0, y: 100 });
  let cakeCherry = cake.select('.cake__cherry').attr({ opacity: 1, transform: 's0 0' });
  let cakeChocolate = cake.select('.cake__chocolate').attr({ opacity: 0, transform: 't0 -200' });
  let cekeMiddle = cake.select('.ceke__middle').attr({ opacity: 0, width: 0 });
  let cakeCream = cake.select('.cake__cream').attr({ opacity: 0, d: 'm376.087,136.468l-242.174,0c-16.412,0 -29.84,13.428 -29.84,29.84l0,50.784c2.974,0.514 6.026,0.797 9.147,0.797c20.527,0 7.336,-2.586 46.26,-2.592c38.924,-0.006 25.50667,1.12267 48.26,2.592c22.75333,1.46933 34.336,-1.586 61.26,-1.592c26.924,-0.006 43.17333,2.78933 54.26,1.592c11.08667,-1.19733 16.17333,8.60533 25.26,-2.592c47.924,-1.006 27.733,0.592 48.26,2.592c20.527,2 6.173,-0.283 9.147,-0.797l0,-50.784c0,-16.412 -13.428,-29.84 -29.84,-29.84z' });

  let shadow = cake.select('.cake__shadow').attr({ transform: 's0 0, t0 0' });
  let cakeCherryRight = cake.select('.cake__cherry--right').attr({ opacity: 0 });
  let cakeChocolateRight = cake.select('.cake__chocolate--right').attr({ opacity: 0 });
  let cekeMiddleRight = cake.select('.ceke__middle--right').attr({ opacity: 0 });
  let cakeCreamRight = cake.select('.cake__cream--right').attr({ opacity: 0 });
  let cakePlateRight = cake.select('.cake__plate--right').attr({ opacity: 0 });

  setTimeout(() => {
    cakePlate.animate({ opacity: 1, y: 349.34 }, 300, mina.bounce);
  }, 300);

  setTimeout(() => {
    cakeChocolate.animate({ opacity: 1, transform: 't0 0' }, 300, mina.bounce);
  }, 600);

  setTimeout(() => {
    cekeMiddle.animate({ opacity: 1, width: 301.86 }, 300, mina.bounce);
  }, 900);

  setTimeout(() => {
    cakeCream.animate({ opacity: 1 }, 300, mina.bounce);
  }, 1200);

  setTimeout(() => {
    let path = `M377.087,136.468H134.913c-16.412,0-29.84,13.428-29.84,29.84v50.784
	c2.974,0.514,6.026,0.797,9.147,0.797c20.527,0,38.336-11.598,47.26-28.592c8.924,16.994,26.733,28.592,47.26,28.592
	s38.336-11.598,47.26-28.592c8.924,16.994,26.733,28.592,47.26,28.592s38.336-11.598,47.26-28.592
	c8.924,16.994,26.733,28.592,47.26,28.592c3.121,0,6.173-0.283,9.147-0.797v-50.784
	C406.927,149.896,393.499,136.468,377.087,136.468z`;
    cakeCream.animate({ d: path }, 400, mina.bounce);
  }, 1400);

  setTimeout(() => {
    cakeCherry.animate({ opacity: 1, transform: 's1 1' }, 300, mina.bounce);
  }, 1600);

  // load shadow
  setTimeout(() => {
    shadow.animate({ transform: 's1 1, t0 0' }, 500, mina.bounce);
  }, 1800);
  setTimeout(() => {
    cakeCherryRight.animate({ opacity: 1 }, 100, mina.bounce);
  }, 1900);
  setTimeout(() => {
    cakeCreamRight.animate({ opacity: 1 }, 100, mina.bounce);
  }, 2000);
  setTimeout(() => {
    cakeChocolateRight.animate({ opacity: 1 }, 100, mina.bounce);
  }, 2100);
  setTimeout(() => {
    cekeMiddleRight.animate({ opacity: 1 }, 100, mina.bounce);
  }, 2200);
  setTimeout(() => {
    cakePlateRight.animate({ opacity: 1 }, 100, mina.bounce);
  }, 2300);
}