import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from "@angular/material/dialog";
import { CdkScrollable } from "@angular/cdk/scrolling";
import { MatButton } from "@angular/material/button";
// import { Subscription } from "rxjs";

// import { ErrorService } from "./error.service";

@Component({
    templateUrl: "./error.component.html",
    selector: "app-error",
    standalone: true,
    imports: [
        MatDialogTitle,
        CdkScrollable,
        MatDialogContent,
        MatDialogActions,
        MatButton,
        MatDialogClose,
    ],
})
export class ErrorComponent {
  // data: { message: string };
  // private errorSub: Subscription;
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {}
  // constructor(private errorService: ErrorService) {}

  // ngOnInit() {
  //   this.errorSub = this.errorService.getErrorListener().subscribe(message => {
  //     this.data = { message: message };
  //   });
  // }

  // onHandleError() {
  //   this.errorService.handleError();
  // }

  // ngOnDestroy() {
  //   this.errorSub.unsubscribe();
  // }
}
