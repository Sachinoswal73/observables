import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})

export class OneComponent implements OnInit, OnDestroy, AfterViewInit {

    increamentor : any;

    increaNum : any;

    ngOnInit(): void {
      
      // console.log('ngOnInit works');

      this.increamentor = interval(1000).subscribe( ( intv : any ) => {
        console.log(intv);
        this.increaNum = intv;
      } )

    }

    ngOnDestroy(): void {
      
      this.increamentor.unsubscribe();

    }

    ngAfterViewInit(): void {
     
      // this.increamentor.unsubscribe();
      
    }

}
