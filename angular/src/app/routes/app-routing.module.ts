import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventoPageComponent } from '../containers/evento/evento-page/evento-page.component';
import { ToolbarPrincipalComponent } from '../containers/toolbar/toolbar-principal/toolbar-principal.component';
import { EventoFormComponent } from '../containers/evento/evento-form/evento-form.component';
import { EventosComponent } from '../containers/evento/eventos/eventos.component';
import { EventoEditComponent } from '../containers/evento/evento-edit/evento-edit.component';


const routes: Routes = [
  {path:'page/:id', component: EventoPageComponent},
  {path:'', redirectTo:'eventos', pathMatch:'full'},
  {path: '', component: ToolbarPrincipalComponent, title:'Home',
   children: [
    { path: 'eventos', component: EventosComponent, title: 'Eventos'},
    { path: 'new/:id', component: EventoFormComponent, title: 'Novo Evento'},
    { path: 'edit/:id', component: EventoEditComponent, title: 'Editar Evento'}
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
