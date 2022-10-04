import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, map, Observable } from 'rxjs';
import { CreditCardService } from 'src/app/services/credit-card.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { CreditCard } from 'src/app/types/credit-card.type';
import { Transaction } from 'src/app/types/transaction.type';

@Component({
  selector: 'app-credit-card-detail',
  templateUrl: './credit-card-detail.component.html',
  styleUrls: ['./credit-card-detail.component.scss']
})
export class CreditCardDetailComponent implements OnInit {
  id!: number;
  creditCard$!: Observable<CreditCard> | undefined;
  transactions$!: Observable<Transaction[]>
  constructor(
    private route: ActivatedRoute,
    private creditCardService: CreditCardService,
    private transactionService: TransactionService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.creditCard$ = this.creditCardService.getCreditCard(this.id);
    this.transactions$ = this.creditCard$.pipe(switchMap(card => {
      return this.transactionService.getTransactions().pipe(
        map(transactions => transactions.filter(t => t.credit_card.card_number === card.card_number))
      )
    }));
  }

  onDeleteCard(card_number: number): void {
    let confirmAction = confirm("Are you sure you want to delete this card?");
    if (confirmAction) {
      this.creditCardService.removeCard(card_number).subscribe({
        next: (data) => {
          this.router.navigate(['/'])
          this.snackBar.open(data.message);
        },
        error: (e) => this.snackBar.open(e.statusText),
      })
    }
  }
}

