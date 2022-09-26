import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditCard, CreditCardService } from 'src/app/services/credit-card.service';

@Component({
  selector: 'app-credit-card-detail',
  templateUrl: './credit-card-detail.component.html',
  styleUrls: ['./credit-card-detail.component.scss']
})
export class CreditCardDetailComponent implements OnInit {
  id!: number;
  creditCard!: CreditCard;
  constructor(private route: ActivatedRoute, private creditCardService: CreditCardService) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.creditCardService.getCreditCard(this.id).subscribe( result => {
      this.creditCard = result
    })

  }

}
