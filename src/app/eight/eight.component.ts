import { Component, OnInit } from '@angular/core';
import { Observable, Observer, interval } from 'rxjs';

@Component({
  selector: 'app-eight',
  templateUrl: './eight.component.html',
  styleUrls: ['./eight.component.css']
})

export class EightComponent implements OnInit {

  printIntv : any;

  customInterval : any;

  ngOnInit(): void {
    
  //   interval(1000).subscribe( ( intv : any ) => {
  //     // console.log(prm);
  //     this.printIntv = intv;
  // } )

  this.customInterval = new Observable( ( obs : Observer<any>) => {

      let count = 0;

      setInterval( () => {
          obs.next(count);
          count = count + 10;
      }, 1000 )

  } )

  this.customInterval.subscribe( ( ci : any ) => {
      this.printIntv = ci;
  })


  }

}
