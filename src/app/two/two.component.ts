import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})

export class TwoComponent implements OnInit, OnDestroy {

  thrSubsc : any;

  ngOnInit(): void {
    
     this.thrSubsc = interval(3000).subscribe( ( itv : any ) => {

      console.log(itv);

    } )

  }

  ngOnDestroy(): void {
    
    this.thrSubsc.unsubscribe();

  }

}
