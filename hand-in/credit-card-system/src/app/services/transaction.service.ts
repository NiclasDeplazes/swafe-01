import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, retryWhen, throwError } from 'rxjs';
import { Transaction } from '../types/transaction.type';

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

    addTransaction(transaction: Transaction): Observable<any> {
        return this.httpClient.post<Transaction>(this.host, transaction).pipe(
            catchError((e: HttpErrorResponse) => {
                console.error(e.message)
                return throwError(() => e);
            }),
            retry(5)
        )
    }
}

