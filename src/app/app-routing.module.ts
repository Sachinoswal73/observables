import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent} from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { SevenComponent } from './seven/seven.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EightComponent } from './eight/eight.component';

const routes: Routes = [
  { path : 'one', component : OneComponent },
  { path : 'two', component : TwoComponent },
  { path : 'three', component : ThreeComponent },
  { path : 'seven', component : SevenComponent },
  { path : 'eight', component : EightComponent },
  {
    path : '404', component : PageNotFoundComponent
  },
  {
    path : '**', redirectTo : '404'
  },
//   {
//     path : '**', component : PageNotFoundComponent
//   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
