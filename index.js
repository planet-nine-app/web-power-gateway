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
  const path = 'https://www.plnet9.com/spend?partnerName=' + partnerName + 
       '&totalPower=' + totalPower + '&' +
       'partnerDisplayName=' + encodeURIComponent(partnerDisplayName) + '&description=' +
       encodeURIComponent(description) + '&gatewayurl=' + window.location.href;
console.log(path);
  
  window.location.href = path;
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
