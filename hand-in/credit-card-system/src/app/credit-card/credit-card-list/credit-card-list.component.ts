import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCardService } from 'src/app/services/credit-card.service';
import { CreditCard } from 'src/app/types/credit-card.type';

@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
  styleUrls: ['./credit-card-list.component.scss']
})
export class CreditCardListComponent implements OnInit {

  creditCards$!: Observable<CreditCard[]>
  constructor(private creditCardService: CreditCardService) { }

  ngOnInit(): void {
    this.creditCards$ = this.creditCardService.getCreditCards()
  }

}
