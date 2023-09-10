import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventoFormComponent } from '../containers/evento-form/evento-form.component';
import { EventoPageComponent } from '../components/evento/evento-page/evento-page.component';
import { EventosComponent } from '../containers/eventos/eventos.component';
import { ToolbarPrincipalComponent } from '../components/toolbar/toolbar-principal/toolbar-principal.component';


const routes: Routes = [
  {path:'page/:id', component: EventoPageComponent},
  {path:'', redirectTo:'eventos', pathMatch:'full'},
  {path: '', component: ToolbarPrincipalComponent, title:'Home',
   children: [
    { path: 'eventos', component: EventosComponent, title: 'Eventos'},
    { path: 'new', component: EventoFormComponent, title: 'Novo Evento'},
    { path: 'edit/:id', component: EventoFormComponent, title: 'Editar Evento'}
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
