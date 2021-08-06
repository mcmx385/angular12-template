import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/pages/error/not-found/not-found.component';
import { NotPermsComponent } from './components/pages/error/not-perms/not-perms.component';

const routes: Routes = [
  { path: '404', component: NotFoundComponent },
  { path: '301', component: NotPermsComponent },
  {
    path: 'user',
    loadChildren: () =>
      import('./components/pages/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./components/pages/admin/admin.module').then(
        (m) => m.AdminModule
      ),
  },
  { path: '', pathMatch: 'full', redirectTo: 'user/home' },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
