import { AddCarService } from './../../services/add-car.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  dataLoaded=false;
  filterText="";



  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private addCarService:AddCarService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }else{
        this.getCars()
      }
    })
  }

  getCars() {
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })

  }
  getCarsByBrand(brandId:number) {
    this.carService.getBrandsByCar(brandId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
}
addToList(car:Car){
  if(car.carId===1){
    this.toastrService.error("Hata","Bu ürün listeye eklenemez")
  }else{
    this.toastrService.success("Araba listeye eklendi",car.carName)
    this.addCarService.addToList(car)
 }

}
}
