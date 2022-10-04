import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { CreditCard } from '../types/credit-card.type';

@Injectable({
    providedIn: 'root'
})
export class CreditCardService {
    host = 'http://localhost:3000/cards/'
    creditCard!: CreditCard;

    constructor(private httpClient: HttpClient) { }

    getCreditCards(): Observable<CreditCard[]> {
        return this.httpClient.get<CreditCard[]>(this.host).pipe(
            catchError((e: HttpErrorResponse) => {
                console.error(e.message)
                return throwError(() => e);
            }),
            retry(5)
        )
    }

    getCreditCard(card_number: number): Observable<CreditCard> {
        
        return this.httpClient.get<CreditCard>(this.host+card_number).pipe(
            catchError((e: HttpErrorResponse) => {
                console.error(e.message)
                return throwError(() => e);
            }),
            retry(5)
        ) 
    }

    addCreditCard(card: CreditCard): Observable<CreditCard> {
        return this.httpClient.post<CreditCard>(this.host, card).pipe(
            catchError((e: HttpErrorResponse) => {
                console.error(e.message)
                return throwError(() => e);
            }),
            retry(5)
        )
    }

    removeCard(card_number: number): Observable<any> {
        return this.httpClient.delete(`${this.host}/${card_number}`).pipe(
            catchError((e: HttpErrorResponse) => {
                console.error(e.message);
                return throwError(() => e);
            })
        )
    }
}