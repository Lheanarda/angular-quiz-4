import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  
  @Output() passingCurrentNumber = new EventEmitter<number>();
  currentNumber:number = 0;
  interval;

  onStartGame(){
    this.interval = setInterval(()=>{
      this.currentNumber++;
      this.passingCurrentNumber.emit(this.currentNumber);
    },1000);
  }
  onStopGame(){
    clearInterval(this.interval)
  }

  ngOnInit(): void {
  }

}
