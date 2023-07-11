let superagent = require('superagent');
window.PNGateway = {};

let gatewayButton = document.getElementsByClassName('pn-gateway-button');
let gatewayBanner = document.getElementsByClassName('pn-gateway-banner');
let totalPower = "test";

let pnGatewayImage = document.getElementsByClassName("pn-gateway-image")
let buttonText = document.getElementsByClassName("button-text")
let buttonVerticalBar = document.getElementsByClassName("button-vertical-bar")
let buttonTotalPower = document.getElementsByClassName("button-total-power")

function setStyles() {
  if(!gatewayBanner) {
    return;
  }
  var match = window.matchMedia("(max-width: 768px)");
  if(!match.matches) {
    for (let item of gatewayBanner) {
      item.style.cssText = 'display: none';
    }
    for (let item of gatewayBanner) {
      item.style.cssText = 'width: 100%; position: relative';
    }
  
    for (let item of pnGatewayImage) {
    item.style.cssText = 'width: 100%; height: auto'
    }
  
    for (let item of gatewayButton) {
      item.style.cssText = 'background-color: #429691; border: none; font-size: 1.25vw; color: #F5DACB; position: absolute; right: 4.1%; top: 25.55%; width: 36.14%; height: 41.10%; border-radius: 31.645px'
    } 
  
    for (let item of buttonText) {
      item.style.cssText = 'ont-family: Ubuntu, sans-serif; font-weight: bold;float: left;padding-left: 8.85%'
    }
  
    for (let item of buttonVerticalBar) {
      item.style.cssText = 'width: 1px;height: 66.7%;background: #F5DACB;position: absolute;left: 69.5%;top: 16.5%';
    }
    for (let item of buttonTotalPower) {
      item.style.cssText = 'font-family: Ubuntu, sans-serif; font-weight: bold;float: right;padding-right: 8.85%';
      item.textContent = item.parentElement.parentElement.getAttribute('totalPower')
    }

  }
 
  else {
    for (let item of gatewayBanner) {
      item.style.cssText = 'width: 100%; position: relative';
    }
  
    for (let item of pnGatewayImage) {
    item.style.cssText = 'width: 100%; height: auto'
    }
  
    for (let item of gatewayButton) {
      item.style.cssText = 'background-color: #429691; border: none; font-size: 2.5vw; color: #F5DACB; position: absolute; right: 4.1%; top: 25.55%; width: 36.14%; height: 41.10%; border-radius: 31.645px'
    } 
  
    for (let item of buttonText) {
      item.style.cssText = 'ont-family: Ubuntu, sans-serif; font-weight: bold;float: left;padding-left: 8.85%'
    }
  
    for (let item of buttonVerticalBar) {
      item.style.cssText = 'width: 1px;height: 66.7%;background: #F5DACB;position: absolute;left: 69.5%;top: 16.5%';
    }
    for (let item of buttonTotalPower) {
      item.style.cssText = 'font-family: Ubuntu, sans-serif; font-weight: bold;float: right;padding-right: 8.85%';
      item.textContent = item.parentElement.parentElement.getAttribute('totalPower')
    }
  }

};
setStyles();

function setButtonDisplayText() {
}
setButtonDisplayText();

for (let item of gatewayButton) {
  let partnerDisplayName = item.getAttribute('partnerDisplayName');
  let partnerName = item.getAttribute('partnerName');
  let totalPower = item.getAttribute('totalPower');
  let description = item.getAttribute('description');
  PNGateway.partnerDisplayName = partnerDisplayName;
  PNGateway.partnerName = partnerName;
  PNGateway.totalPower = totalPower;
  PNGateway.description = description;
  let returnURL = window.location.href.split("?")[0];
  item.addEventListener('click', function(evt) {
    item.style.backgroundColor = 'white';
    item.style.color = '#5AC4BD';
    setTimeout(setStyles, 300);
  console.log('button clicked');
   const path = 'https://www.plnet9.com/spend?partnerName=' + partnerName + 
       '&totalPower=' + totalPower + '&' +
       'partnerDisplayName=' + encodeURIComponent(partnerDisplayName) + '&description=' +
       encodeURIComponent(description) + '&gatewayurl=' + returnURL + '&handoff=true';
     window.location.href = path;
  });
}

function getParamsFromURL() {
  let url = window.location.href;
  let queryString = url.split('?')[1];
  if(!queryString) {
    return {};
  }
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
    if(Object.keys(params).length === 0) {
      return;
    }
    const userUUID = params.userUUID;
    const ordinal = params.ordinal;
    const timestamp = params.timestamp;
    const signature = params.signature;
    if(userUUID && ordinal && timestamp && signature) {
      superagent.put(`https://api.plnet9.com/gateway/power`)
        .send({
          userUUID: userUUID,
          totalPower: PNGateway.totalPower,
          partnerName: PNGateway.partnerName,
          ordinal: ordinal,
          description: PNGateway.description,
          timestamp: timestamp,
          signature: signature
        })
        .end(callback); 
      return;
    }
    callback(new Error('Failed spend'));
  }
});
