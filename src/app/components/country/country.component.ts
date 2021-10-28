import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countries:Country[]=[];
  

  constructor(private countryService : CountryService) { 
 }

  ngOnInit(): void {
    this.getCountries();
    }
  getCountries() {
    this.countryService.getCountries().subscribe(response=>{
      this.countries=response.data
    })   
  }
}
