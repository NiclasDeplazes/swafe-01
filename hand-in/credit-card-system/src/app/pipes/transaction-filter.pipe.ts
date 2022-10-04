import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from '../types/transaction.type';

@Pipe({ name: 'appTransactionFilter' })
export class TransactionFilterPipe implements PipeTransform {
  transform(transactions: Transaction[], searchTerm: string): Transaction[] {
    if (!searchTerm) {
      return transactions;
    }

    let search = searchTerm.toUpperCase();

    return transactions.filter(it => {
      let card_number = it.credit_card.card_number.toString().toUpperCase();
      return card_number.indexOf(search) > -1
    });
  }
}