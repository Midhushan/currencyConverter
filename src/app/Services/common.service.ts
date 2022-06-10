import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getCurrencyExchangeRates(){
    return this.http.get<any>(environment.baseUrl + 'latest?apikey=' + environment.apiKey)
  }
}
