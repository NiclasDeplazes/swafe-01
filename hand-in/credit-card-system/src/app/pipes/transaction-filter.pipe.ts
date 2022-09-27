import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appTransactionFilter' })
export class TransactionFilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: number): any[] {
    if (!items) {
      return [];
    }
    if (!searchTerm) {
      return items;
    }

    return items.filter(it => {
      return it === searchTerm;
    });
  }
}