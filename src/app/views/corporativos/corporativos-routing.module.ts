import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../../views/corporativos/list-corporativos/list-corporativos.module').then(m => m.ListCorporativosModule)
  },
  {
    path: 'detalle/:id',
    loadChildren: () => import('../../views/corporativos/detail/detail.module').then(m => m.DetailModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorporativosRoutingModule { }
