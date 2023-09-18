import { Injectable, OnInit } from "@angular/core";
import { Observable, Observer, map, filter, Subject, BehaviorSubject, fromEvent, buffer, bufferCount } from "rxjs";

@Injectable({ providedIn : "root" })

export class MyObservable implements OnInit {

    // customInterval : any;

    // customInterval = new Observable( ( obsr : Observer<any> ) => {
    //     let count = 2;
    //     setInterval( () => {
    //             obsr.next(count);
    //             // console.log(count);
    //             count = count + 2;
    //     }, 2000 )

    // } )


    // manipulateInterval(){

    //     let mpi = this.customInterval.pipe( 
    //         filter( ( mpf : any ) => {
    //             if ( mpf > 3 ) {
    //                 return mpf;
    //             }
    //         } ),
    //         map( ( mpm : any ) => {
    //             return mpm + ' map';
    //         } )
    //      )

    //      return mpi;

    // }





    // newCustomInterval = new Subject();

    // manipulateInterval() {

    //     let count = 0;

    //     setInterval( () =>{

    //         this.newCustomInterval.next(count);
    //         count = count + 1;

    //     }, 500 )

    //     let mpli = this.newCustomInterval.pipe(
    //         filter( ( ncif : any ) => {
    //             if( ncif > 2 ){
    //                 return ncif;
    //             }
    //         } ),
    //         map( ( ncim : any ) => {
    //             return ncim = ncim + ' with map'
    //         })
    //     )

    //     return mpli;

    // }
    

    clicks = fromEvent(document, 'click');

    newestCustomInterval : BehaviorSubject<any> = new BehaviorSubject('First Argument'); 

    manipulateInterval() {

        let count = 7;

        setInterval( () => {
            this.newestCustomInterval.next(count);
            count = count + 7;
        }, 700)

        // this.clicks.pipe(bufferCount(2));

        let varmi = this.newestCustomInterval.pipe(
            // filter ( ( ncif : any ) => {
            //     if ( ncif % 2 !== 0 ) {
            //         return ncif;
            //     }
            // } ),
            
            map( ( ncim : any ) => {
                return ncim + ' with map';
            } ),

            bufferCount(3,1),
            // bufferCount(3),
            // buffer(this.clicks)

        )

        return varmi;

    }



    ngOnInit(): void {
        
    }
    
}