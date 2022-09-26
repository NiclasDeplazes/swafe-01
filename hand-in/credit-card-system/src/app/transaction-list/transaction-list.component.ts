import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction, TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  transactions$!: Observable<Transaction[]>
  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactions$ = this.transactionService.getTransactions()
  }
}
