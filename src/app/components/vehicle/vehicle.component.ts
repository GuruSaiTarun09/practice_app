import { Component } from '@angular/core';
import { VehicleService } from 'src/app/Services/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
    vehicles:any=[];
    constructor(private vehicleService:VehicleService){
      vehicleService.getVechicles().subscribe(
        (data:any)=>{
          this.vehicles=data;
        },
        (err:any)=>{
          alert("internal server error")
        }
      )
    }
}
