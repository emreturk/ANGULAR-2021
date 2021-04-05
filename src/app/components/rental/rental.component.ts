import { ListResponseModel } from './../../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';


@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentals: Rental[] = [];
  apiUrl = 'https://localhost:44386/api/rentals/getall';


  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getRental()
  }

  getRental() {
    this.httpClient
      .get<ListResponseModel<Rental>>(this.apiUrl)
      .subscribe((response) => {
        this.rentals=response.data
      });
  }
}
