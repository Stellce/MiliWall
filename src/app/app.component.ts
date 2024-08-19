import { Component, OnInit, } from "@angular/core";
// import { Subscription } from "rxjs";

import { AuthService } from "./auth/auth.service";
import { HeaderComponent } from "./header/header.component";
import { RouterOutlet } from "@angular/router";
// import { ErrorService } from "./error/error.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    standalone: true,
    imports: [HeaderComponent, RouterOutlet]
})
export class AppComponent implements OnInit {
  // hasError = false;
  // private errorSub: Subscription;

  constructor(
    private authService: AuthService,
    // private errorService: ErrorService
  ) {}

  ngOnInit() {
    this.authService.autoAuthUser();
    // this.errorSub = this.errorService.getErrorListener().subscribe(
    //   message => this.hasError = message !== null
    // );
  }

  // ngOnDestroy() {
  //   this.errorSub.unsubscribe();
  // }
}
