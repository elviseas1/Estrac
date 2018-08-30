import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ReportPage } from '../report/report';

@IonicPage()
@Component({
  selector: 'page-spt-ba',
  templateUrl: 'spt-ba.html',
})
export class SptBaPage {

  todayIni: Date; 
  todayFim: Date;
  fonte   : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  report(){
    if (this.todayIni > this.todayFim) {

      const alert = this.alertCtrl.create({
        title: 'Atenção!!!',
        subTitle: 'Data inicio deve ser menor que a data final!',
        buttons: ['OK']
      });
      alert.present();
      
    }
    else  {
      this.fonte = 'spt';
      this.navCtrl.push(ReportPage, {data1: this.todayIni, data2: this.todayFim, fonte1: this.fonte});
    }
    }

}
