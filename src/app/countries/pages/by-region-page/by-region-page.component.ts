import { Component } from '@angular/core';
import { ContriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public region: Country[] = [];
  constructor(private countriesS: ContriesService) {}


  searchByRegion(term: string): void {
    this.countriesS.searchRegion(term).subscribe((countries) => {
      this.region = countries;
    });
    /* console.log('Desde ByCapitalPage');
    console.log({ term }); */
  }
}
