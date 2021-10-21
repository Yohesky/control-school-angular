import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListCorporativosComponent } from './list-corporativos.component';


const routes: Routes = [
  {
    path: '',
    component: ListCorporativosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCorporativosRoutingModule { }
