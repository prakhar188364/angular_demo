import {Injectable} from "angular2/core"
import {Http} from 'angular2/http';
import 'rxjs/Rx'
 
@Injectable()
export class CountryService{
 
   endpoint_url:String = "https://restcountries.eu/rest/v1/region/";
 
   constructor(http: Http){
       this.http = http;
   }
 
   getCountriesByRegion1 (region:String){
       return this.http.get(this.endpoint_url + region).map(res => res.json());
   }
}