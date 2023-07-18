import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ContriesService } from '../../services/countries.service';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [],
})
export class CountryPageComponent implements OnInit {
  constructor(
    private countrieS: ContriesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    /* const id: Observable<string> = route.params.pipe(map(p => p['id'])); */
  }

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap(({ id }) => this.countrieS.searchCountryByALphaCode(id)))
      .subscribe((country) => {
        if (!country) {return this.router.navigateByUrl('');}

        console.log('TENEMOS UN PAIS');
        return;
      });
  }
}
