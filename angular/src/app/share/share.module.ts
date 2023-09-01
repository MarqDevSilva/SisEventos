import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolbarInicialComponent } from './toolbar-inicial/toolbar-inicial.component';




@NgModule({
  declarations: [
    ErrorDialogComponent,
    ToolbarComponent,
    ToolbarInicialComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule
  ],
  exports:[
    ErrorDialogComponent,
    ToolbarComponent,
    ToolbarInicialComponent
  ]
})
export class ShareModule { }
