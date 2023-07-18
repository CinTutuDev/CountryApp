import { Component } from '@angular/core';
import { ContriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';


@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];

  constructor(private countriesS: ContriesService) {}

  searchByCapital(term: string): void {
    this.countriesS.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
    });
    /* console.log('Desde ByCapitalPage');
    console.log({ term }); */
  }
}
