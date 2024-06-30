import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowAllComponent } from './components/show-all/show-all.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  { path: 'glycemie', component: ShowAllComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: '',   redirectTo: '/glycemie', pathMatch: 'full' },
  { path: '**', redirectTo: '/glycemie', pathMatch: 'full'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
