import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Transaction } from "src/app/types/transaction.type";
import { MatTableModule } from '@angular/material/table';
import { NgxMaskModule } from 'ngx-mask';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatTableModule,
    NgxMaskModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  displayedColumns: string[] = ['card_number', 'amount', 'date', 'comment', 'actions'];
  @Input() transactions!: Transaction[];
  @Output() deleteTransactionEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onDeleteTransaction(uid: string) {
    let confirmAction = confirm("Are you sure you want to delete this transaction?");
    if (confirmAction) {
      this.deleteTransactionEvent.emit(uid);
    }
  }
}
