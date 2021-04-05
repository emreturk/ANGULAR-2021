import { ToastrService } from 'ngx-toastr';
import { AddCarService } from './../../services/add-car.service';
import { AddCar } from './../../models/addcar';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car-summary',
  templateUrl: './car-summary.component.html',
  styleUrls: ['./car-summary.component.css']
})
export class CarSummaryComponent implements OnInit {
  addListCars:AddCar[]=[]

  constructor(private addCarService:AddCarService,private toastrService:ToastrService) { }

  ngOnInit() {
    this.getList()
  }

  getList(){
    this.addListCars=this.addCarService.list()
  }

  removeFromList(car:Car){
    this.addCarService.removeFromList(car)
    this.toastrService.error(" Silindi ",car.carName+" Listeden ")
}
}
