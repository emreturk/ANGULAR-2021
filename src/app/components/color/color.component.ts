import { ListResponseModel } from './../../models/listResponseModel';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];
  apiUrl = 'https://localhost:44386/api/colors/getall';


  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
   // this.getColors()
  }

  getColors() {
    this.httpClient
      .get<ListResponseModel<Color>>(this.apiUrl)
      .subscribe((response) => {
        this.colors=response.data
      });
  }
}

