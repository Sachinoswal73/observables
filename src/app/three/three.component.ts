import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomIntObs } from '../services/customIntObs.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})

export class ThreeComponent implements OnInit, OnDestroy {

  constructor( private ciobs : CustomIntObs ){

  }

  myCustInt : any;

  ngOnInit(): void {
    
    //   this.inInt = this.ciobs.intFromService.subscribe( ( mci : any ) => {

    //         console.log(mci);

    // } )



    // this.myCustInt = this.ciobs.myCustomInt.subscribe(

    //   {
    //     next : ( mci : any ) => {
    //       console.log(mci);
    //     },
    //     error : ( _err : any ) => {
    //       console.log(_err);
    //     },
    //     complete : () => {
    //       console.log('completed');
    //     }
    //   }

    // )



    this.myCustInt = this.ciobs.myFilteredInt().subscribe(

      {
        next : ( mci : any ) => {
          console.log(mci);
        },
        error : ( _err : any ) => {
          console.log(_err);
        },
        complete : () => {
          console.log('completed');
        }
      }

    )




  }

  ngOnDestroy(): void {
    
        this.myCustInt.unsubscribe();

  }

}
