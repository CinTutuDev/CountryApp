import { Component } from '@angular/core';
import { ContriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';
@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent {
  public countries: Country[] = [];
  public region: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  constructor(private countriesS: ContriesService) {}

  searchByRegion(region: Region): void {
    this.selectedRegion = region;
    this.countriesS.searchRegion(region).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
