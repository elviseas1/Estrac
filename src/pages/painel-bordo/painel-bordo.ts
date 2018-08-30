import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ReportPage } from '../report/report';

@IonicPage()
@Component({
  selector: 'page-painel-bordo',
  templateUrl: 'painel-bordo.html',
})
export class PainelBordoPage {

  estab: string;
  fonte: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  report(){
    this.fonte = 'painelBordo';
    console.log('Aqui= ' + this.estab + 'Fonte= ' + this.fonte);
    this.navCtrl.push(ReportPage, {estabelecimento1: this.estab, fonte1: this.fonte});
      
  }

  /*
  report(){
    if (this.estab = '') {

      const alert = this.alertCtrl.create({
        title: 'Atenção!!!',
        subTitle: 'Escolha um estabelecimento!',
        buttons: ['OK']
      });
      alert.present();
    }
    else  {
      console.log('Aqui= ' + this.estab);
      this.fonte = 'painelBordo';
      this.navCtrl.push(ReportPage, {estabelecimento1: this.estab, fonte1: this.fonte});
      
    }
    }
*/
}
