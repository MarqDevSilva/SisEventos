import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthService } from './auth-service/auth.service';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EventoFormComponent } from './components/evento/evento-form/evento-form.component';
import { ContaComponent } from './conta/conta.component';
import { EventosComponent } from './eventos/eventos.component';
import { InscricoesComponent } from './inscricoes/inscricoes.component';
import { LoginComponent } from './login/login.component';
import { PaginaEventoComponent } from './pagina-evento/pagina-evento.component';
import { RelatorioComponent } from './relatorio/relatorio.component';


const routes: Routes = [
  {path: 'cadastro', component: CadastroComponent,},
  {path: 'conta', component: ContaComponent, canActivate: [AuthService]},
  {path: 'login', component: LoginComponent},
  {path: 'eventos', component: EventosComponent, canActivate: [AuthService]},
  {path:'evento/:id', component: PaginaEventoComponent},
  {path:'relatorio', component: RelatorioComponent, canActivate: [AuthService]},
  {path:'inscricoes', component: InscricoesComponent, canActivate: [AuthService]},
  {path:'eventoform', component: EventoFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
