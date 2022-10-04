import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Observable } from 'rxjs';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from "src/app/types/transaction.type";
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatTableModule],
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  displayedColumns: string[] = ['card_number', 'amount', 'date', 'comment'];
  @Input() transactions!: Transaction[];
  constructor() { }

  ngOnInit(): void {
  }
}
