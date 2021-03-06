import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlansComponent } from './plans/plans.component';
import { RechargeComponent } from './recharge/recharge.component';
import { PaybillComponent } from './paybill/paybill.component';
import { PostpaidplansComponent } from './postpaidplans/postpaidplans.component';
import { NewprepaidComponent } from './newprepaid/newprepaid.component';
import { NewpostpaidComponent } from './newpostpaid/newpostpaid.component';

const routes: Routes = [
  {path:'prepaid/plans',component:PlansComponent },
  {path:'prepaid/recharge', component:RechargeComponent},
  {path:'postpaid/postpaidplans',component: PostpaidplansComponent },
  {path:'postpaid/paybill', component: PaybillComponent},
  {path:'newconnection/newprepaid', component: NewprepaidComponent},
  {path: 'newconnection/newpostpaid', component: NewpostpaidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[PlansComponent, RechargeComponent, PostpaidplansComponent,PaybillComponent,NewprepaidComponent,NewpostpaidComponent]; 