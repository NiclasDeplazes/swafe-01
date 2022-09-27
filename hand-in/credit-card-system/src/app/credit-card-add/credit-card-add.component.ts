import { Component, OnInit } from '@angular/core';
import { CreditCardService } from '../services/credit-card.service';
import { CreditCard } from '../types/credit-card.type';

@Component({
  selector: 'app-credit-card-add',
  templateUrl: './credit-card-add.component.html',
  styleUrls: ['./credit-card-add.component.scss']
})
export class CreditCardAddComponent implements OnInit {

  constructor(private creditCardService: CreditCardService) { }

  ngOnInit(): void {
  }

  onClickAddCard(data: any) {
    const creditCard: CreditCard = {
      card_number: data.cardNumber,
      csc_code: data.cscCode,
      cardholder_name: data.cardholderName,
      expiration_date_month: data.expirationMonth,
      expiration_date_year: data.expirationYear,
      issuer: data.issuer
    }
    
    this.creditCardService.addCreditCard(creditCard).subscribe()

  }

}
