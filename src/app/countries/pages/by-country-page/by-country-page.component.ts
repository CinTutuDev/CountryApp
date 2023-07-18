import { Component } from '@angular/core';
import { ContriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [],
})
export class ByCountryPageComponent {
  public countries: Country[] = [];

  constructor(private countriesS: ContriesService) {}

  searchByCountry(term: string): void {
    this.countriesS.searchCountry(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
