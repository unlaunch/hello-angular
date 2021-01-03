import { Component } from "@angular/core";

import { UnlaunchService } from "./unlaunch.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "unlaunch-angular";
  show: boolean;

  constructor(private unlaunchService: UnlaunchService) {
    unlaunchService.flagChange.subscribe((flag) => {
      this.show = flag;
    });
  }
}
