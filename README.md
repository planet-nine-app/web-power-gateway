# Welcome to Making a Web-based Power Gateway

So you want to add a Power gateway to your website. Well the process couldn't be easier (please if you think of something easier, let us know). Included in this repo are the two example files to lead you on your way. The `gateway.js` file here is the same as the one you'll get from https://www.plnet9.com/gateway.js, and `index.html` is an example html file to guide your implementation. Without further ado, here's how you add a Power gateway to your website.

### Adding a Power Gateway To Your Website

##### The Banner Button

If you want to use the standard banner-style Power gateway simply add the following to your website:

```<div id="pn-gateway-banner">
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

```<button id="pn-gateway-button" gatewayName="YOUR GATEWAY NAME" partnerName="YOUR PARTNER NAME" totalPower="THE DESIRED POWER AMOUNT">
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
