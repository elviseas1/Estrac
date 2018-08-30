import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import moment from 'moment';
//import { AlertController } from 'ionic-angular';
/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {

  url1: string =      'http://189.89.164.118:8080/webrun/html_indicadores_tabela.rule?sys=ESG&estrutura_abrev=';
  url2: string = '&iesgrafico=S&iescomentario=N&tabela_abrev=OPERACIO&slide=&agrupar=&campos=&acumula=&nivela=N&tpagrupa=soma&paretomaior=';
  urlPainel1: string = 'http://189.89.164.118:8080/webrun/html_indicadores.rule?sys=ESG&projeto_abrev=AGM_2018&estrutura_abrev=';
  urlPainel2: string = '&periodoini=&periodofim=&iesgrafico=&iescomentario=&slide=';
  urlFarol1: string = 'http://189.89.164.118:8080/webrun/html_farol.rule?sys=ESG&projeto=AGM_2018&estrutura_abrev=';
  urlFarol2: string = '&iesgrafico=&iescomentario=&slide=&dataref=';

  teste: string;

  trustedVideoUrl: SafeResourceUrl;
  alertCtrl: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private domSanitizer: DomSanitizer
              //private alertCtrl: AlertController
            ) {
  }

  ionViewWillEnter(): void { 

    let dataA = moment(this.navParams.get('data1')).format('DD/MM/YYYY');
    let dataB = moment(this.navParams.get('data2')).format('DD/MM/YYYY');
    let estabelecimentoA = this.navParams.get('estabelecimento1');
    let empresaA = this.navParams.get('empresa1');
    let fonteA = this.navParams.get('fonte1');
 

    if (fonteA === 'spt'){

      console.log(fonteA);
      this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.url1 + fonteA + '&periodoini=' + dataA + '&periodofim=' + dataB + this.url2 );

      this.teste = this.url1 + fonteA + '&periodoini=' + dataA + '&periodofim=' + dataB + this.url2;
      

    }
    else if(fonteA == 'painelBordo'){

      console.log(fonteA);
      this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.urlPainel1 + estabelecimentoA + this.urlPainel2 );

    }
    else if(fonteA == 'farol'){

      console.log(fonteA);
      this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.urlFarol1 + empresaA + this.urlFarol2 );

    }
    else {
      console.log('Nada= ' + fonteA);
    }
    
    
      

 
      'PERBRAS'
     
    

   // let alert = this.alertCtrl.create({
   //   title: dataA + " | " + dataB,
   //   subTitle: this.teste,
   //   buttons: ['Dismiss']
   // });
  //  alert.present();

}
}