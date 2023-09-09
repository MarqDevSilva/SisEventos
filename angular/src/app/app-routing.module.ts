import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthService } from './auth-service/auth.service';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EventoFormComponent } from './components/evento/evento-form/evento-form.component';
import { EventoListComponent } from './components/evento/evento-list/evento-list.component';
import { EventoPageComponent } from './components/evento/evento-page/evento-page.component';
import { ContaComponent } from './conta/conta.component';
import { InscricoesComponent } from './inscricoes/inscricoes.component';
import { LoginComponent } from './login/login.component';
import { RelatorioComponent } from './relatorio/relatorio.component';


const routes: Routes = [
  {path: 'cadastro', component: CadastroComponent,},
  {path: 'conta', component: ContaComponent, canActivate: [AuthService]},
  {path: 'login', component: LoginComponent},
  {path:'page/:id', component: EventoPageComponent},
  {path:'relatorio', component: RelatorioComponent, canActivate: [AuthService]},
  {path:'inscricoes', component: InscricoesComponent, canActivate: [AuthService]},
  {path:'form', component: EventoFormComponent},
  {path:'list', component: EventoListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
