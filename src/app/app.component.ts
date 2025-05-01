import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { log } from 'node:console';

@Component({
  selector: 'app-root',
  imports: [ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Jarvis';
  x=20;
  y=30;
  clickHandleEvent(){
    alert("Function Called")
  }

  count=0;
 /* handleIncrement(){
    this.count=this.count+1
  }
  handleDecrement(){
    this.count=this.count-1
  }
  handleReset(){
    this.count=0
  }
    */
  handleCounter(val:string){
    if(val == 'minus'){
      this.count=this.count-1
    }
    else if(val == 'plus'){
      this.count=this.count+1
    }
    else if(val == 'reset'){
      this.count=0
    }
  }


  handleEvent(event:any){
    console.log("function called",event)
  }
}
