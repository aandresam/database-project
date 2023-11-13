import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'auth', loadChildren: () => import('./auth/auth-routing.module').then(a => a.AuthRoutingModule)},
  { path: 'pages', loadChildren: () => import('./pages/pages-routing.module').then(p => p.PagesRoutingModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  auth: string = 'auth'
}
