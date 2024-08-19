import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm, FormsModule } from "@angular/forms";
import { Subscription } from "rxjs";

import { AuthService } from "../auth.service";
import { MatCard } from "@angular/material/card";
import { NgIf } from "@angular/common";
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { MatFormField, MatError } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatButton } from "@angular/material/button";

@Component({
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"],
    standalone: true,
    imports: [MatCard, NgIf, MatProgressSpinner, FormsModule, MatFormField, MatInput, MatError, MatButton]
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoading = false;
  private authStatusSub: Subscription;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false;
      }
    );
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.login(form.value.email, form.value.password);
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
