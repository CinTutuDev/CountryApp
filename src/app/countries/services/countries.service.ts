import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class ContriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCapital(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${query}`;
    return this.http.get<Country[]>(url).pipe(
      catchError(() => of([]))
      /*  tap((countries) => console.log('Pasa por aquí el tap', countries)),
      map((countries) => [] ),
      tap((countries => console.log('Tap2 countries'))) */
    );
  }
}
