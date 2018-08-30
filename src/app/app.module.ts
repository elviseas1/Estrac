import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { SptPage } from '../pages/spt/spt';
import { ReportPage } from '../pages/report/report';
import { SptBaPage } from '../pages/spt-ba/spt-ba';
import { PainelBordoPage } from '../pages/painel-bordo/painel-bordo';
import { FarolPage } from '../pages/farol/farol';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    SptPage,
    ReportPage,
    SptBaPage,
    PainelBordoPage,
    FarolPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    SptPage,
    ReportPage,
    SptBaPage,
    PainelBordoPage,
    FarolPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
