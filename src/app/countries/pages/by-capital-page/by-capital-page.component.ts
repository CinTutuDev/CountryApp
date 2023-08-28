import { Component, OnInit } from '@angular/core';
import { ContriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string='';

  constructor(private countriesS: ContriesService) {}
  ngOnInit(): void {
    this.countries = this.countriesS.cacheStore.byCapital.countries;
    this.initialValue = this.countriesS.cacheStore.byCapital.term;
  }

  searchByCapital(term: string): void {
    this.isLoading = true;
    this.countriesS.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
