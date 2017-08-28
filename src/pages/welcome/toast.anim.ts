import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js';

export const toastAnim = function (snap) {
  let toast = snap.select('#toast');
  
  // bread element
  let bread = toast.select('.toast__bread').attr({ opacity: 1, transform: 's0 0' });
  let breadBorder = toast.select('.toast__bread-border').attr({ opacity: 1, transform: 's0 0' });
  // egg element
  let mEggWhite = new Snap.Matrix();
  mEggWhite.scale(0);
  mEggWhite.rotate(90);
  let eggWhitePath = 'm262.98898,163.84c-61.01006,-7.22434 -116.26131,66.17412 -77.83234,118.89403c34.927,47.91641 43.52274,51.44787 59.88953,50.15438c16.36679,-1.29349 63.6167,9.05143 84.81124,-41.57203c16.17672,-38.63793 31.0173,-115.88492 -66.86843,-127.47638z'
  let eggWhite = toast.select('.toast__egg-white').attr({ opacity: 1, transform: mEggWhite, d: eggWhitePath });
  let eggYolk = toast.select('.toast__egg-yolk').attr({ opacity: 1, transform: 's0 0' });

  // shadow element
  let shadow = toast.select('.shadow').attr({ transform: 's0 0, t0 0' });
  let breadRight = toast.select('.toast__bread--right').attr({ opacity: 0 });
  let breadRightBorder = toast.select('.toast__bread-border--right').attr({ opacity: 0 });
  let eggWhiteRight = toast.select('.toast__egg-white--right').attr({ opacity: 0 });
  let eggYolkRight = toast.select('.toast__egg-yolk--right').attr({ opacity: 0 });

  // load bread
  setTimeout(() => {
    bread.animate({ transform: 's1 1' }, 300, window['mina'].ease);
    breadBorder.animate({ transform: 's1 1' }, 300, window['mina'].ease);
  }, 500);

  // load egg
  setTimeout(() => {
    let mEggWhite = new Snap.Matrix();
    mEggWhite.scale(1);
    mEggWhite.rotate(0);
    eggWhite.animate({ transform: mEggWhite }, 300, window['mina'].elastic);
  }, 800);
  setTimeout(() => {
    let eggWhitePath = 'M263.595,127.969c-65.122-8.708-132.782,46.273-91.763,109.82c37.281,57.757-13.32,80.793,19.241,120.464c28.694,34.959,123.409,0.062,146.032-60.958C354.372,250.722,368.078,141.941,263.595,127.969z'
    eggWhite.animate({ d: eggWhitePath }, 800, window['mina'].elastic);
    eggYolk.animate({ transform: 's1 1' }, 400, window['mina'].elastic);
  }, 1100);

  // load shadow
  setTimeout(() => {
    shadow.animate({ transform: 's1 1, t0 0' }, 400, window['mina'].elastic);
  }, 1500);
  setTimeout(() => {
    eggYolkRight.animate({ opacity: 1 }, 100, window['mina'].ease);
  }, 1600);
  setTimeout(() => {
    eggWhiteRight.animate({ opacity: 1 }, 100, window['mina'].ease);
  }, 1700);
  setTimeout(() => {
    breadRight.animate({ opacity: 1 }, 100, window['mina'].ease);
  }, 1800);
  setTimeout(() => {
    breadRightBorder.animate({ opacity: 1 }, 100, window['mina'].ease);
  }, 1900);
}