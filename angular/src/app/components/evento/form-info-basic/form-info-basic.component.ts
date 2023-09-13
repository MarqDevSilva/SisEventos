import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-info-basic',
  templateUrl: './form-info-basic.component.html',
  styleUrls: ['./form-info-basic.component.scss'],
})

export class FormInfoBasicComponent {

  minDate: Date;

  @Input() infoBasic: FormGroup = new FormGroup({});
  @Output() submitted: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
    this.minDate = new Date();
  }

  onSubmit(){
    this.submitted.emit()
  }
}
