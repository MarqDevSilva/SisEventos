import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContaComponent } from './conta/conta.component';
import { EditarEventoComponent } from './editar-evento/editar-evento.component';
import { EventosComponent } from './eventos/eventos.component';
import { InscricoesComponent } from './inscricoes/inscricoes.component';
import { NovoEventoComponent } from './novo-evento/novo-evento.component';
import { PaginaEventoComponent } from './pagina-evento/pagina-evento.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth-service/auth.service';


const routes: Routes = [
  {path: 'cadastro', component: CadastroComponent,},
  {path: 'conta', component: ContaComponent, canActivate: [AuthService]},
  {path: 'login', component: LoginComponent},
  {path: 'eventos', component: EventosComponent, canActivate: [AuthService]},
  {path:'novo-evento', component: NovoEventoComponent},
  {path:'edit', component: EditarEventoComponent, canActivate: [AuthService]},
  {path:'evento/:id', component: PaginaEventoComponent},
  {path:'relatorio', component: RelatorioComponent, canActivate: [AuthService]},
  {path:'inscricoes', component: InscricoesComponent, canActivate: [AuthService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
