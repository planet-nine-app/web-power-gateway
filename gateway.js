(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.PNGateway = {};

let gatewayButton = document.getElementById('pn-gateway-button');
let gatewayBanner = document.getElementById('pn-gateway-banner');
let partnerDisplayName = gatewayButton.getAttribute('partnerDisplayName');
let partnerName = gatewayButton.getAttribute('partnerName');
let totalPower = gatewayButton.getAttribute('totalPower');
let description = gatewayButton.getAttribute('description');

PNGateway.partnerDisplayName = partnerDisplayName;
PNGateway.partnerName = partnerName;
PNGateway.totalPower = totalPower;
PNGateway.description = description;

function setStyles() {
  if(!gatewayBanner) {
    return;
  }
  var match = window.matchMedia("(max-width: 720px)");
  if(!match.matches) {
    gatewayBanner.style = 'display: none;';
  }
  gatewayBanner.style.cssText = 'width: 100%; position: relative';
  document.getElementById('pn-gateway-image').style.cssText = 'width: 100%; height: auto';
  gatewayButton.style.cssText = 'background-color: #429691; border: none; font-size: 2.5vw; color: #F5DACB; position: absolute; right: 4.1%; top: 25.55%; width: 36.14%; height: 41.10%; border-radius: 31.645px';
  document.getElementById('button-text').style.cssText = 'font-family: Orbitron, sans-serif; font-weight: bold;float: left;padding-left: 8.85%;padding-top: 1.6%';
  document.getElementById('button-vertical-bar').style.cssText = 'width: 1px;height: 66.7%;background: #F5DACB;position: absolute;left: 69.5%;top: 16.5%';
  document.getElementById('button-total-power').style.cssText = 'font-family: Ubuntu, sans-serif; font-weight: bold;float: right;padding-right: 8.85%';

  document.getElementById('button-total-power').textContent = totalPower;
};
setStyles();

function setButtonDisplayText() {
}
setButtonDisplayText();

gatewayButton.addEventListener('click', function(evt) {
  gatewayButton.style.backgroundColor = 'white';
  gatewayButton.style.color = '#5AC4BD';
  setTimeout(setStyles, 300);
console.log('button clicked');
  const path = 'planetnine://spend?partnerName=' + partnerName + 
       '&totalPower=' + totalPower + '&' +
       'partnerDisplayName=' + encodeURIComponent(partnerDisplayName) + '&description=' +
       encodeURIComponent(description) + '&gatewayurl=' + window.location.href;
console.log(path);
  const mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
  if(mobileCheck()) {
    window.location.href = path;
  } else {
    window.alert('Unfortunately spending power from desktops is unsopported.');
  }
/*  window.location.href = 'planetnine://gateway/details?gatewayname=' + gatewayName +
      '&partnerName=' + partnerName + '&gatewayurl=http://10.47.110.189:3000/index2.html&totalPower=' + totalPower + '&' +
      'partnerDisplayName=Web%20Tester&description=Testing%20web%20gateway';*/
});

function getParamsFromURL() {
  let url = window.location.href;
  let queryString = url.split('?')[1];
  let params = queryString.split('&');
  let paramsObject = {};
  params.forEach(function(param) {
    let arguments = param.split('=');
    paramsObject[arguments[0]] = arguments[1];
  });
  return paramsObject;
}

Object.defineProperty(PNGateway, 'callback', {
  set: function(callback) {
    let params = getParamsFromURL();
    const success = params.success;
    if(success && success !== 'false') {
      return callback(null, success); 
    }
    callback(new Error('Failed spend'));
  }
});

},{}]},{},[1]);
