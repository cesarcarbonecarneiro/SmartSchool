import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfessoresComponent} from './professores/professores.component';
import {AlunosComponent} from './alunos/alunos.component';
import {PerfisComponent} from './perfis/perfis.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'alunos', component: AlunosComponent},
  {path: 'perfis', component: PerfisComponent},
  {path: 'professores', component: ProfessoresComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
