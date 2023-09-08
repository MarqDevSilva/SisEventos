import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth-service/auth.service';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ErrorDialogComponent } from './components/dialog/error-dialog/error-dialog.component';
import { EventoFormComponent } from './components/evento/evento-form/evento-form.component';
import { EventoPageComponent } from './components/evento/evento-page/evento-page.component';
import { FormInfoBasicComponent } from './components/evento/form-info-basic/form-info-basic.component';
import { FormPageComponent } from './components/evento/form-page/form-page.component';
import { FormPayComponent } from './components/evento/form-pay/form-pay.component';
import { ToolbarIndexComponent } from './components/toolbar/toolbar-index/toolbar-index.component';
import { ToolbarLoginComponent } from './components/toolbar/toolbar-login/toolbar-login.component';
import { ToolbarPrincipalComponent } from './components/toolbar/toolbar-principal/toolbar-principal.component';
import { AccountUserComponent } from './components/user/account-user/account-user.component';
import { NewUserComponent } from './components/user/new-user/new-user.component';
import { ContaComponent } from './conta/conta.component';
import { InscricoesComponent } from './inscricoes/inscricoes.component';
import { LoginComponent } from './login/login.component';
import { PaginaEventoComponent } from './pagina-evento/pagina-evento.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { ShareModule } from './share/share.module';
import { EventoListComponent } from './components/evento/evento-list/evento-list.component';

@NgModule({
    declarations: [
        AppComponent,
        CadastroComponent,
        AppComponent,
        ContaComponent,
        LoginComponent,
        PaginaEventoComponent,
        InscricoesComponent,
        RelatorioComponent,
        EventoFormComponent,
        NewUserComponent,
        AccountUserComponent,
        EventoPageComponent,
        ToolbarLoginComponent,
        ToolbarPrincipalComponent,
        ToolbarIndexComponent,
        ErrorDialogComponent,
        FormInfoBasicComponent,
        FormPayComponent,
        FormPageComponent,
        EventoListComponent,

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
        FormInfoBasicComponent,
        FormPageComponent
    ]
})
export class AppModule { }
