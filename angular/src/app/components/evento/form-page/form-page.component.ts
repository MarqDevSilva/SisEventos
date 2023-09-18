import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { event } from 'jquery';

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

  @Input() pageForm: FormGroup = new FormGroup({});
  @Output() changeIMG: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  onChange(event: any){
    this.changeIMG.emit(event)
  }
}
