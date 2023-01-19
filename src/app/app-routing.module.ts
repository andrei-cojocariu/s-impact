import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitsViewComponent } from './gits-view/gits-view.component';
const routes: Routes = [
  {
    path: '', component: GitsViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
