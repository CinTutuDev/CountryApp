import { Country } from '../interfaces/country';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, map, delay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(
      catchError(() => of([])),
      /* delay(2000) */
    );
  }

  searchCountryByALphaCode(code: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url).pipe(
      /* extrae el primer país y si no regresa un nulo */
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }

  searchCapital(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${query}`;
    return this.getCountriesRequest(url);
  }
  searchCountry(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${query}`;
    return this.getCountriesRequest(url);
  }
  searchRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.getCountriesRequest(url);
  }
}
