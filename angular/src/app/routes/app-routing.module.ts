import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventoFormComponent } from '../components/evento/evento-form/evento-form.component';
import { EventoListComponent } from '../components/evento/evento-list/evento-list.component';
import { EventoPageComponent } from '../components/evento/evento-page/evento-page.component';


const routes: Routes = [
  {path:'page/:id', component: EventoPageComponent},
  {path: 'eventos', redirectTo: 'eventos', pathMatch: 'full' },
  {path: 'eventos',
    children: [
      { path: '', component: EventoListComponent, title: 'Eventos'},
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
