import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Transaction } from "src/app/types/transaction.type";
import { MatTableModule } from '@angular/material/table';
import { NgxMaskModule } from 'ngx-mask';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatTableModule, NgxMaskModule],
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
