import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appExpirationYear' })
export class ExpirationYearPipe implements PipeTransform {
  transform(year: number): number {

    return year % 100;
  }
}