import { Component, OnInit } from '@angular/core';
import { ContriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [],
})
export class ByCountryPageComponent implements OnInit{
  public countries: Country[] = [];
  public initialValue: string='';

  constructor(private countriesS: ContriesService) {}

  ngOnInit(): void {
   this.countries = this.countriesS.cacheStore.byCountries.countries;
   this.initialValue = this.countriesS.cacheStore.byCountries.term
  }

  searchByCountry(term: string): void {
    this.countriesS.searchCountry(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
