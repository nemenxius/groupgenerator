import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  value1: number = 0;
  value2: number = 0;
  value3: number = 0;
  value4: number = 0;
  resultone: number = 0;
  resulttwo: number = 0;

  calculateOne(value1: number, value2: number){

   // alert(value1 + "--->" + value2)

    this.resultone = (value1 / 100) * value2;

    
  }

  calculateTwo(value3: number, value4:number){

    this.resulttwo= (value3 / value4) * 100;

    

  }

}
