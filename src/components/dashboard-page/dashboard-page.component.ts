import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HttpApi } from '../../services/http-api.service';
import { AppRepo } from '../../services/app-repo.service';

@Component({
  selector: 'rpi-dashboard',
  templateUrl: 'dashboard-page.component.html'
})
export class DashboardPageComponent {

  constructor(
    public navCtrl: NavController,
    private httpApi: HttpApi,
    private appRepo: AppRepo
  ) {
    this.appRepo.pinsRepo.getPinState({pinId: 22});
    // let request = this.httpApi.get('onet.pl');
    // request.subscribe((res) => {
    //   console.log(res)
    // }, (err) => {
    //   console.log(err)
    // });
  }

}
