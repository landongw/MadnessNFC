// import { setupConfig } from '@ionic/core';

// setupConfig({
//   // uncomment the following line to force mode to be Material Design
//   // mode: 'md'
// });
document.addEventListener(
  "deviceready",
  () => {
    console.log("Device Ready!");
    const theWindow: any = window;
    if (theWindow.nfc) {
      const nfc = theWindow.nfc;
      //const ndef = theWindow.ndef;
      if (nfc) {
        nfc.addNdefListener((nfcEvent: any) => {
          console.log(nfcEvent);
          alert(nfc.bytesToHexString(nfcEvent.tag.id));
        });
      }
    }
  },
  false
);
