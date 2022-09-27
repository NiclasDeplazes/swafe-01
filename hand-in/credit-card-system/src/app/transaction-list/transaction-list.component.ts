import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Observable } from 'rxjs';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from "src/app/types/transaction.type";

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule, MatListModule],
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
