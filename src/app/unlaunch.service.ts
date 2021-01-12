import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import * as ULClient from "unlaunch-js-client-lib";

type Option = {
  localStorage: false;  
};

const FLAG: string = "new-login-form-flag";
const API_KEY: string = "prod-server-7f05812f-cd5a-41dd-b79b-6f30d84cd335";
// Use a randomly generated user each time
// Note: Don't do this in your apps. Set this to the userId or use special
// value anonymous.
const IDENTITY: string = Math.random().toString(); 

@Injectable({
  providedIn: "root",
})
export class UnlaunchService {
  flagChange: Subject<boolean> = new Subject<boolean>();

  constructor() {
    const flag = FLAG;
    const apiKey = API_KEY;
    const identity = IDENTITY;

    const options = {
      localStorage: false, // NOTE: This is disabled for Demo to show new 
                                    // variation each time. Enable it in your applications for 
                                    // best performance.
    };

    const ulclient = ULClient.initialize(
      apiKey,
      [flag],
      identity,
      null,
      options
    );

    // banner
    console.log(
      'Unlaunch JavaScript library demo. When you refresh the page, this demo will call a feature flag that returns either "on" or "off" variation. Depending on the variation returned, it will show Login form version 1 or version 2'
    );
    console.log(
      "For more information, see: https://docs.unlaunch.io/docs/sdks/javascript-library"
    );

    ulclient.on("ready", () => {
      
      const variation = ulclient.variationDetail(flag);
      console.log(`[UL] Variation is ${variation.value}`);
      console.log(`[UL] Evaluation reason is ${variation.reason}`);

      if (variation.value === "on") {
        console.log("Variation is ON");
        this.flagChange.next(true);
      } else {
        console.log("Variation is OFF");
        this.flagChange.next(false);
      }

      let config = ulclient.variationConfiguration(flag);
      console.log(config);
    });
  }
}
