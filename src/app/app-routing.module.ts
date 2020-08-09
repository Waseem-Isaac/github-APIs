import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountModule } from './modules/account/account.module';
import { ProfileComponent } from './modules/profile/profile.component';
import { IsAuthenticatedGuard } from './modules/account/guards/is-authenticated.guard';


const routes: Routes = [
  {path: '' , component: ProfileComponent, canActivate: [IsAuthenticatedGuard]},
  {path: 'login' , loadChildren: () => AccountModule},
  {path: '**' , redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
