import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DetailComponent],
  exports: [DetailComponent],
  imports: [
    CommonModule,
    DetailRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class DetailModule { }
