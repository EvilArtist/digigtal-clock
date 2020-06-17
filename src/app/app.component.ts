import { Component, VERSION } from '@angular/core';
import {interval } from 'rxjs';
import {take, map} from 'rxjs/operators';  



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular digital clock';
  hoursPoints = [...Array(12).keys()].map(x=>x+1);
  t: Date = new Date();
  constructor(){
    this.setupTimer();
  }
  setupTimer(){
    interval(1000).pipe(
      map((x) => { 
        this.t = new Date() ;
      })
    ).subscribe();
  }

  get degreeOfMinute(){
    return 6* this.t.getMinutes() + 0.1 * this.t.getSeconds();
  }
  get degreeOfSecond(){
    return 6 * this.t.getSeconds();
  }
  get degreeOfHour(){
    return this.t.getHours() * 30 + this.t.getMinutes() * 0.5;
  }
}
