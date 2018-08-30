import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReportPage } from '../report/report';

/**
 * Generated class for the FarolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-farol',
  templateUrl: 'farol.html',
})
export class FarolPage {

  empresa: string;
  fonte: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  report(){
    this.fonte = 'farol';
    this.empresa = 'PERBRAS';
    console.log('Aqui= ' + this.empresa + 'Fonte= ' + this.fonte);
    this.navCtrl.push(ReportPage, {empresa1: this.empresa, fonte1: this.fonte});
      
  }
}
