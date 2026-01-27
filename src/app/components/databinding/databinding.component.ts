import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  age: number = 20;
  name: string = "guru"

  cricket: string = "viratkaohli"
  inputType: string = "radio"
  message: string = "Hi"

  submit() {
    alert("success");
  }
}
