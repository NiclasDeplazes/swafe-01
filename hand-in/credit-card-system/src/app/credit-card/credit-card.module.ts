import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardListComponent } from './credit-card-list/credit-card-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CreditCardDetailComponent } from './credit-card-detail/credit-card-detail.component';
import { MatListModule } from '@angular/material/list';
import { NgxMaskModule } from 'ngx-mask';
import { MatCardModule } from '@angular/material/card';
import { ExpirationYearPipe } from '../pipes/expiration-year.pipe';
import { TransactionListComponent } from '../transaction-list/transaction-list.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CreditCardListComponent,
    CreditCardDetailComponent,
    ExpirationYearPipe,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    MatListModule,
    NgxMaskModule,
    MatCardModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    TransactionListComponent,
  ],
  exports: [
    CreditCardListComponent,
    CreditCardDetailComponent
  ]
})
export class CreditCardModule { }
