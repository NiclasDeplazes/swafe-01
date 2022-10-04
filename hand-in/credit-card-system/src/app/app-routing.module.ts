import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardAddComponent } from './credit-card-add/credit-card-add.component';
import { CreditCardDetailComponent } from './credit-card/credit-card-detail/credit-card-detail.component';
import { HomeComponent } from './home/home.component';
import { TransactionOverviewComponent } from './transaction/transaction-overview/transaction-overview.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'credit-card/:id', component: CreditCardDetailComponent},
  { path: 'add', component: CreditCardAddComponent},
  { path: 'transactions', component: TransactionOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
