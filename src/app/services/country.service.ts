import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  apiUrl = 'https://localhost:44360/api/countries/getall';
  constructor(private httpClient: HttpClient) { }
  getCountries():Observable<ListResponseModel<Country>> {
    return this.httpClient.get<ListResponseModel<Country>>(this.apiUrl);
  }
}
