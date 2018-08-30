import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SptPage } from '../spt/spt';

import { SptBaPage } from '../spt-ba/spt-ba';
import { PainelBordoPage } from '../painel-bordo/painel-bordo';
import { FarolPage } from '../farol/farol';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  sptBaPage(){
    this.navCtrl.push(SptBaPage) 
  }
  sptPage(){
    this.navCtrl.push(SptPage) 
  }
  painelBordoPage(){
    this.navCtrl.push(PainelBordoPage)   
  }
  farolPage(){
    this.navCtrl.push(FarolPage)   
  }
  
  
}
