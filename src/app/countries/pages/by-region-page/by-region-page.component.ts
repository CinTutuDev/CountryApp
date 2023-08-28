import { Component, OnInit } from '@angular/core';
import { ContriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];
  public region: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  constructor(private countriesS: ContriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesS.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesS.cacheStore.byRegion.region;
  }

  searchByRegion(region: Region): void {
    this.selectedRegion = region;
    this.countriesS.searchRegion(region).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
