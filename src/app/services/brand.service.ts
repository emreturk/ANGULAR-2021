import { Brand } from './../models/brand';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "https://localhost:44386/api/";

  constructor(private httpClient: HttpClient) {}

  getBrands():Observable<ListResponseModel<Brand>> {
    let newPath=this.apiUrl+"brands/getall"
    return this.httpClient
      .get<ListResponseModel<Brand>>(newPath);

  }

}
