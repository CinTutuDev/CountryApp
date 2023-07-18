import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ContriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [],
})
export class CountryPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private countrieS: ContriesService
  ) {
    /* const id: Observable<string> = route.params.pipe(map(p => p['id'])); */
  }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {

      this.countrieS.searchCountryByALphaCode(id).subscribe(country =>{
        console.log({country});
      })

    });
  }
}
