import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, retryWhen, throwError } from 'rxjs';
import { CreditCard } from './credit-card.service';

@Injectable({
    providedIn: 'root'
})
export class TransactionService {
    host = 'http://localhost:3000/transactions/'
    transaction!: Transaction;

    constructor(private httpClient: HttpClient) { }

    getTransactions(): Observable<Transaction[]> {
        return this.httpClient.get<Transaction[]>(this.host).pipe(
            catchError((e: HttpErrorResponse) => {
                console.error(e.message)
                return throwError(() => e);
            }),
            retry(5)
        )
    }
}

export interface Transaction {
    credit_card: CreditCard;
    amount: number;
    comment: string;
    date: number;
    currency: string;
    uid?: string;
}