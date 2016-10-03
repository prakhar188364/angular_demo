import {Component} from 'angular2/core';
import {CountryService} from './country.service_dynamic'
 
@Component({
  selector: 'app-component',
  templateUrl: 'app/app.component.tpl.html',
  providers: [CountryService]
})
export class AppComponent {
    constructor(private _countryService: CountryService){
        this._countryService = _countryService;
    }
    
    getCountriesByRegion(){
        this.error = "";
        this.countries = [];
        this._countryService.getCountriesByRegion1(this.region)
         .subscribe(
            data => this.countries = data,
            error => this.error = "Region " + this.region + " is invalid."
         );
    }
}