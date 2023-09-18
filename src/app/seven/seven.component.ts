import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Observer, Subject } from 'rxjs';
import { MyObservable } from '../services/myObservable.service';

@Component({
  selector: 'app-seven',
  templateUrl: './seven.component.html',
  styleUrls: ['./seven.component.css']
})

export class SevenComponent implements OnInit, OnDestroy {


    inbuiltInterval : any;

    ibi : any;

    customInterval : any;
    
    varCustomInterval : any;

    newCustomInterval : any;

    localCustomInterval : any;

    constructor( private myObsrvbl : MyObservable ) {

    }

    ngOnInit(): void {
      
      // this.inbuiltInterval = interval(1000).subscribe( ( intv : any ) => {

      //   // console.log(intv);

      //   this.ibi = intv;

      // } )

      // console.log(this.inbuiltInterval);


      // this.customInterval = new Observable( ( obs : Observer<any> ) => {
      //       let count = 0;
      //       setInterval( () => {
      //           obs.next(count);
      //           count++;
      //       }, 1000)
      // } )

      // this.varCustomInterval = this.customInterval.subscribe( (ob : any) => {
      //       console.log(ob);
      //       this.ibi = ob;
      // } )


      // this.customInterval = new Promise( (resolve, reject) => {
      //   let count = 0;
      //   setInterval( () => {
      //       resolve(count);
      //       count++;
      //   }, 1000 )
      // } )


      // this.customInterval
      //   .then( (res : any ) => {
      //       this.ibi = res;
      //       console.log(res);
      //   } )



      // this.localCustomInterval = this.myObsrvbl.customInterval.subscribe( ( moc : any ) => {
      //     // console.log(moc);
      //     this.ibi = moc;          

      // } )


      this.localCustomInterval = this.myObsrvbl.manipulateInterval().subscribe( ( mis : any ) => {
        console.log(mis);
        this.ibi = mis;
      } )



    }
    
    
    


    ngOnDestroy() {
    
      // this.customInterval.unsubscribe();

      // this.varCustomInterval.unsubscribe();

      this.localCustomInterval.unsubscribe();
      
    }

}
