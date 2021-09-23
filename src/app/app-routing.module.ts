import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserstoriesListComponent } from './userstories-list/userstories-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'storiesList', component: UserstoriesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
