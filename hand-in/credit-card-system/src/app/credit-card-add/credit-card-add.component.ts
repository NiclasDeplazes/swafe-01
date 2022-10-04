import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMaskModule } from 'ngx-mask';
import { MatButtonModule } from '@angular/material/button';
import { CreditCardService } from '../services/credit-card.service';
import { CreditCard } from '../types/credit-card.type';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-credit-card-add',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ],
  templateUrl: './credit-card-add.component.html',
  styleUrls: ['./credit-card-add.component.scss'],
})
export class CreditCardAddComponent implements OnInit {

  constructor(
    private creditCardService: CreditCardService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  onClickAddCard(form: NgForm) {
    const data = form.value;
    const creditCard: CreditCard = {
      card_number: data.cardNumber,
      csc_code: data.cscCode,
      cardholder_name: data.cardholderName,
      expiration_date_month: data.expirationMonth,
      expiration_date_year: data.expirationYear,
      issuer: data.issuer
    }

    this.creditCardService.addCreditCard(creditCard).subscribe({
      next: (data) => this.snackBar.open(data.message),
      error: (e) => this.snackBar.open(e.statusText),
    })

    form.resetForm();
  }

}
