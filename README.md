# Welcome to Making a Web-based Power Gateway

So you want to add a Power gateway to your website. Well the process couldn't be easier (please if you think of something easier, let us know). Included in this repo are the two example files to lead you on your way. The `gateway.js` file here is the same as the one you'll get from https://www.plnet9.com/gateway.js, and `index.html` is an example html file to guide your implementation. Without further ado, here's how you add a Power gateway to your website.

### Adding a Power Gateway To Your Website

##### The Banner Button

If you want to use the standard banner-style Power gateway simply add the following to your website:

```
  <div id="pn-gateway-banner">
    <img src="https://www.plnet9.com/gateway-banner.png" id="pn-gateway-image">
    <button id="pn-gateway-button" gatewayName="YOUR GATEWAY NAME" partnerName="YOUR PARTNER NAME" totalPower="THE DESIRED POWER AMOUNT">
      <div id="button-container">
        <span id="button-text">USE POWER</span>
        <span id="button-vertical-bar"></span>
        <span id="button-total-power">THE DESIRED POWER AMOUNT</span>
      </div>
    </button>
  </div>
  <script src="https://www.plnet9.com/gateway.js"></script>
  <script type="text/javascript">
    PNGateway.callback = function(err, resp) {
      if(err) {
        // Handle Errors here
        return;
      }
      // Handle Successful transactions here
    };
  </script>
``` 

This will add the banner button to your website and initialize it to handle Power gateway transactions. Remember to replace the all caps above with your desired names and Power amounts:

`gatewayName`: This can be whatever you want. Should be named such that having many gateways leads you back to this one.

`partnerName`: Very important! This is the username that will receive Nineum from the transaction. Use your username if you're the one receiving the Nineum.

`totalPower`" The total Power of the transaction. Should be the same as what appears on the button.

##### Just a Button With No Styling

If the banner button isn't your jam, it's easy to add a Power gateway button with no styling that you can style to your heart's content. To do that, just add the following to your HTML:

```
<button id="pn-gateway-button" gatewayName="YOUR GATEWAY NAME" partnerName="YOUR PARTNER NAME" totalPower="THE DESIRED POWER AMOUNT">
</button>
  <script src="https://www.plnet9.com/gateway.js"></script>
  <script type="text/javascript">
    PNGateway.callback = function(err, resp) {
      if(err) {
        // Handle Errors here
        return;
      }
      // Handle Successful transactions here
    };
  </script>
```

You'll need to add your gatewayName, partnerName, and totalPower just as above. And of course don't forget to fill out the code for what happens when the transaction succeeds. 

### How The Power Gateway Works

`gateway.js` handles the heavy lifting for the Power gateway. It looks for a DOM element that handles "click" events called "pn-gatewqy-button". It then looks for the inclusion of the "pn-gateway-banner" DOM element. If it finds the banner it'll style all the elements, if not it leaves the styling to you. After styling, it sets an eventListener for the "click" event on the "pn-gateway-button" element. That click event redirects the user to the Planet Nine app to prompt them for approval. 

By default on approval, the Power gateway comes back to the url that is `window.location.href` of the sending website. If another url is necessary you can add the optional `gatewayURL` attribute to the "pn-gateway-button" element.

`gateway.js` creates a PNGateway object with a speciall "callback" property defined. Setting this property is what will get `gateway.js` to process your transaction. The timing on that processing is thus left to the implementor. If you implement as in the examples above, the processing will happen right away. If you want the page to load first then set the callback property in an onLoad listener. 

Once `callback` is set, `gateway.js` will process your transaction and call the callback you've set with two arguments. The first is the error object which will be null on a successful transaction. The second is the response which will be the user object of the user who did the transaction. You can use this information to display user info like their amount of Power, or you can ignore this completely.

And that's it. Hopefully you find that implementing a Power gateway is easy and fun, if not let us know so we can improve. 
