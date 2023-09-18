import { Injectable } from "@angular/core";
import { Observable, Observer, Subject, filter, interval, map, BehaviorSubject } from "rxjs";


@Injectable( { providedIn : 'root' } )

export class CustomIntObs {

    intFromService : Observable<any> = interval(3000);

    // myCustomInt : Observable<any> = Observable.create( (observer : any) => {
    //         observer.next('asasa')
    // } )

    // myCustomInt : Observable<any> = new Observable(( observer : Observer<any> ) => {
    //     let count = 0;
    //     setInterval( () => {
    //         observer.next(count);
    //         if ( count > 3 ) {
    //             observer.error( new Error('Error > 3') )
    //         }
    //         if( count > 2 ) {
    //             observer.complete();
    //         }
    //         count++;
    //     }, 500 )
    // } )

    // myNewCustomInt = new Subject();

    myNewestCustomInt : BehaviorSubject<any> = new BehaviorSubject('Loaddinggg..');


    myFilteredInt() {
           
        let count = 1;
        setInterval( () => {
            this.myNewestCustomInt.next(count);
            if ( count > 7 ) {
                this.myNewestCustomInt.error( new Error('Error > 3') )
            }
            if( count > 5 ) {
                this.myNewestCustomInt.complete();
            }
            count++;
        }, 500 )
   

        let myFilIn = this.myNewestCustomInt.pipe(
            filter( ( prm : any ) => {
                if ( prm < 4 ) {
                    // return prm = prm + 10;
                    return prm;
                }
            } ),
            map( ( prm : any) => {
                return prm = prm + ' after filter pipe';
            } )
        )
        return myFilIn;
    }


    // myFilteredInt() {
           
    //         let count = 0;
    //         setInterval( () => {
    //             this.myNewCustomInt.next(count);
    //             if ( count > 3 ) {
    //                 this.myNewCustomInt.error( new Error('Error > 3') )
    //             }
    //             if( count > 2 ) {
    //                 this.myNewCustomInt.complete();
    //             }
    //             count++;
    //         }, 500 )
       

    //         let myFilIn = this.myNewCustomInt.pipe(
    //             filter( ( prm : any ) => {
    //                 if ( prm > 1 ) {
    //                     // return prm = prm + 10;
    //                     return prm;
    //                 }
    //             } ),
    //             map( ( prm : any) => {
    //                 return prm = prm + ' after filter pipe';
    //             } )
    //         )
    //         return myFilIn;
    //     }

    // myFilteredInt() {
    //     let myFilIn = this.myCustomInt.pipe(
    //         filter( ( prm : any ) => {
    //             if ( prm > 1 ) {
    //                 // return prm = prm + 10;
    //                 return prm;
    //             }
    //         } ),
    //         map( ( prm : any) => {
    //             return prm = prm + ' after filter pipe';
    //         } )
    //     )
    //     return myFilIn;
    // }

}