import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})

export class FormPageComponent {

  sobre = false
  palestrantes = false
  programacao = false
  local = false
  background: string = '#FFFFFF'

  @Input() infoBasic: FormGroup = new FormGroup({});
  @Output() submitted: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  changeIMG(){
    this.submitted.emit()
  }
}
