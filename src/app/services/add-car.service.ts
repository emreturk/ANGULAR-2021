import { AddListCars } from './../models/addcars';
import { Injectable } from '@angular/core';

import { Car } from '../models/car';
import { AddCar } from '../models/addcar';

@Injectable({
  providedIn: 'root'
})
export class AddCarService {

  constructor() { }


  addToList(car:Car){
    let item = AddListCars.find(c=>c.car.carId===car.carId)

    if(item){
      item.quantity+=1;
    }else{
      let addCar =new AddCar();
      addCar.car=car;
      addCar.quantity=1;
      AddListCars.push(addCar)
    }
  }
  removeFromList(car:Car){
    let item:AddCar = AddListCars.find(c=>c.car.carId===car.carId)
    AddListCars.splice(AddListCars.indexOf(item,1));

  }
  list(){
    return AddListCars;
  }

}
