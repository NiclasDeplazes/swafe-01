import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction, TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction-overview',
  templateUrl: './transaction-overview.component.html',
  styleUrls: ['./transaction-overview.component.scss']
})
export class TransactionOverviewComponent implements OnInit {

  transactions$!: Observable<Transaction[]>
  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactions$ = this.transactionService.getTransactions()
  }

}
