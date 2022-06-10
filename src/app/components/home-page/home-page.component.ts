import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  rates: any;
  date: any;
  baseCurrency: any;

  constructor(private service: CommonService) { }

  ngOnInit(): void {
    this.getCurrencyRates();
  }

  getCurrencyRates(){
    this.service.getCurrencyExchangeRates().subscribe(res => {
      console.log(res);
      if(res){
        
        this.date = res.date;
        this.baseCurrency = res.base;

        const mapped = Object.keys(res.rates).map(key => ({symbol: key, price: res.rates[key]}));
        this.rates = mapped;

        console.log(this.rates);
        
      }
      
    }, error => {
      console.log(error);
      
    })
  }

}
