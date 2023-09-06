import { MatTableModule } from '@angular/material/table';
import { ContaComponent } from './conta/conta.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ShareModule } from "./share/share.module";
import { LoginComponent } from './login/login.component';
import { EventosComponent } from './eventos/eventos.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NovoEventoComponent } from './novo-evento/novo-evento.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PaginaEventoComponent } from './pagina-evento/pagina-evento.component';
import { InscricoesComponent } from './inscricoes/inscricoes.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { EditarEventoComponent } from './editar-evento/editar-evento.component';
import { AuthService } from './auth-service/auth.service';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { EventoFormComponent } from './components/evento/evento-form/evento-form.component';
import { EventoListComponent } from './components/evento/evento-list/evento-list.component';
import { NewUserComponent } from './components/user/new-user/new-user.component';
import { AccountUserComponent } from './components/user/account-user/account-user.component';
import { EventoPageComponent } from './components/evento/evento-page/evento-page.component';
import { ToolbarLoginComponent } from './components/toolbar/toolbar-login/toolbar-login.component';
import { ToolbarPrincipalComponent } from './components/toolbar/toolbar-principal/toolbar-principal.component';
import { ToolbarIndexComponent } from './components/toolbar/toolbar-index/toolbar-index.component';
import { ErrorDialogComponent } from './components/dialog/error-dialog/error-dialog.component';

@NgModule({
    declarations: [
        AppComponent,
        CadastroComponent,
        AppComponent,
        ContaComponent,
        LoginComponent,
        EventosComponent,
        NovoEventoComponent,
        PaginaEventoComponent,
        InscricoesComponent,
        RelatorioComponent,
        EditarEventoComponent,
        EventoFormComponent,
        EventoListComponent,
        NewUserComponent,
        AccountUserComponent,
        EventoPageComponent,
        ToolbarLoginComponent,
        ToolbarPrincipalComponent,
        ToolbarIndexComponent,
        ErrorDialogComponent,
    ],
    providers: [ AuthService],
    bootstrap: [AppComponent],
    imports: [
        MatExpansionModule,
        MatSlideToggleModule,
        RouterModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatProgressBarModule,
        MatTabsModule,
        HttpClientModule,
        MatTableModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        FormsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        ShareModule,
        CommonModule
    ],
    exports:[
    ]
})
export class AppModule { }
