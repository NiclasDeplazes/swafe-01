import { Component, OnInit } from '@angular/core';
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
  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactions$ = this.transactionService.getTransactions()
  }

}
