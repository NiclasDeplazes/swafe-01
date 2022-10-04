import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionOverviewComponent } from './transaction-overview/transaction-overview.component';
import { TransactionAddComponent } from './transaction-add/transaction-add.component';
import { TransactionListComponent } from '../transaction-list/transaction-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TransactionOverviewComponent,
    TransactionAddComponent
  ],
  imports: [
    CommonModule,
    TransactionListComponent,
    FormsModule
  ]
})
export class TransactionModule { }
