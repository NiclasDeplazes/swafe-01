import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { CreditCardService } from 'src/app/services/credit-card.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { CreditCard } from 'src/app/types/credit-card.type';
import { Transaction } from 'src/app/types/transaction.type';

@Component({
  selector: 'app-transaction-add',
  templateUrl: './transaction-add.component.html',
  styleUrls: ['./transaction-add.component.scss']
})
export class TransactionAddComponent implements OnInit {
  credit_cards$!: Observable<CreditCard[]>

  constructor(
    private transactionService: TransactionService,
    private creditCardService: CreditCardService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.credit_cards$ = this.creditCardService.getCreditCards();
  }

  onClickAddTransaction(form: NgForm): void {
    const transaction: Transaction = {
      ...form.value,
      date: form.value.date.getTime()
    }

    this.transactionService.addTransaction(transaction).subscribe({
      next: (data) => this.snackBar.open(data.message),
      error: (e) => this.snackBar.open(e.statusText),
    })

    form.resetForm();
  }

}
