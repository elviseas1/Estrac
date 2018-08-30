import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportPage } from './report';
import { SptPage } from '../spt/spt';

@NgModule({
  declarations: [
    ReportPage,
    SptPage
  ],
  imports: [
    IonicPageModule.forChild(ReportPage),
  ],
})
export class ReportPageModule {}
