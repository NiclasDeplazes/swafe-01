import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardDetailComponent } from './credit-card/credit-card-detail/credit-card-detail.component';
import { HomeComponent } from './home/home.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'credit-card/:id', component: CreditCardDetailComponent},
  { path: 'transactions', component: TransactionListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
