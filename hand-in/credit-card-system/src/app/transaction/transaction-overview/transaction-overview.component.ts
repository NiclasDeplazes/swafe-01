import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from "src/app/types/transaction.type";

@Component({
  selector: 'app-transaction-overview',
  templateUrl: './transaction-overview.component.html',
  styleUrls: ['./transaction-overview.component.scss']
})
export class TransactionOverviewComponent implements OnInit {

  searchText = '';
  transactions$!: Observable<Transaction[]>
  constructor(private transactionService: TransactionService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.transactions$ = this.transactionService.getTransactions()
  }

  deleteTransaction(uid: string): void {
    this.transactionService.removeTransaction(uid).subscribe({
      next: (data) => {
        this.snackBar.open(data.message);
        this.transactions$ = this.transactionService.getTransactions();
      },
      error: (e) => this.snackBar.open(e.statusText),
    })
  }

}
