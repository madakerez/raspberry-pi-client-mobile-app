import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { AppRepo } from '../../services/app-repo.service';

@Component({
  selector: 'rpi-login',
  templateUrl: 'login-page.component.html'
})
export class LoginPageComponent {
  public loginForm;

  constructor(
    private appRepo: AppRepo,
    public navCtrl: NavController,
    public fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      name: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  submit() {
    let formData = this.loginForm.value;
    let request = this.appRepo.userRepo.login(formData.name, formData.password);

    request.filter(res => res).first().subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    })
  }

}
