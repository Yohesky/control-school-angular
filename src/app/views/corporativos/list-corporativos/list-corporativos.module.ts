import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCorporativosComponent } from './list-corporativos.component';
import { ListCorporativosRoutingModule } from './list-corporativos-routing.module';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";



@NgModule({
  declarations: [ListCorporativosComponent],
  exports: [ListCorporativosComponent],
  imports: [
    CommonModule,
    ListCorporativosRoutingModule,
    NgxDatatableModule
  ]
})
export class ListCorporativosModule { }
