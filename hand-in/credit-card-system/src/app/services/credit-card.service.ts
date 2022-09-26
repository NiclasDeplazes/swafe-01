import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, retryWhen, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CreditCardService {
    host = 'http://localhost:3000/credit_cards/cards/'

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
}

export interface CreditCard {
    card_number: number
    csc_code: number
    cardholder_name: string
    expiration_date_month: number
    expiration_date_year: number
    uid?: string
    issuer: string
}