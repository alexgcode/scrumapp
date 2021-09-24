import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserstoriesListComponent } from './userstories-list/userstories-list.component';
import { UserStoryComponent } from './user-story/user-story.component';
import { TaskComponent } from './task/task.component';
import { AtomComponent } from './atom/atom.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'storiesList', component: UserstoriesListComponent},
  { path: 'userStory', component: UserStoryComponent},
  { path: 'task', component: TaskComponent},
  { path: 'atom', component: AtomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
