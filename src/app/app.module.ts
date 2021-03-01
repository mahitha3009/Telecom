import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
//import { NewpostpaidComponent } from './newpostpaid/newpostpaid.component';
//import { NewprepaidComponent } from './newprepaid/newprepaid.component';
//import { PostpaidplansComponent } from './postpaidplans/postpaidplans.component';
//import { PaybillComponent } from './paybill/paybill.component';
//import { RechargeComponent } from './recharge/recharge.component';
//import { OnlineRechargeComponent } from './online-recharge/online-recharge.component';
//import { PlansComponent } from './plans/plans.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
