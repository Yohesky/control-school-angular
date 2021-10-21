import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../views/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'corporativos',
    loadChildren: () => import('../../views/corporativos/corporativos.module').then(m => m.CorporativosModule)
  }
];
