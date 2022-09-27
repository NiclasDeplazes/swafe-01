import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardListComponent } from './credit-card-list/credit-card-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CreditCardDetailComponent } from './credit-card-detail/credit-card-detail.component';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    CreditCardListComponent,
    CreditCardDetailComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    MatListModule
  ],
  exports: [
    CreditCardListComponent,
    CreditCardDetailComponent
  ]
})
export class CreditCardModule { }
