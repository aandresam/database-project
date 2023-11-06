import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./auth/auth-routing.module').then(a => a.AuthRoutingModule)},
  {path: 'pages', loadChildren: () => import('./pages/pages-routing.module').then(p => p.PagesRoutingModule)},
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
