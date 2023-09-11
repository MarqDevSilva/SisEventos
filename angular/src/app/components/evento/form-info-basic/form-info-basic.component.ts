import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-info-basic',
  templateUrl: './form-info-basic.component.html',
  styleUrls: ['./form-info-basic.component.scss']
})
export class FormInfoBasicComponent {

  @Input() infoBasic: FormGroup = new FormGroup({});

  constructor() {}
}
