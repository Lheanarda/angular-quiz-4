import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumberArr = [];
  evenNumberArr=[];

  receiveCurrentNumber:number;
  onCurrentNumberReceived(numb:number){
    this.receiveCurrentNumber = numb;
    if(this.receiveCurrentNumber%2 === 0) this.evenNumberArr.push(this.receiveCurrentNumber);
    else this.oddNumberArr.push(this.receiveCurrentNumber);
  }

}
