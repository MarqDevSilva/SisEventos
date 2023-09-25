import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { event } from 'jquery';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})

export class FormPageComponent {

  sobreToggle = false
  palestrantesToggle = false
  programacaoToggle = false
  localToggle = false

  selectedFile: File | null = null;
  selectedFileUrl: string | null = null;

  @Input() capa: FormGroup = new FormGroup({});
  @Input() sobre: FormGroup = new FormGroup({});
  @Input() palestrantes: FormArray = new FormArray<FormGroup>([]);
  @Input() palestrante: FormGroup = new FormGroup({});

  @Output() changeIMG: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  onAdd(){
    this.palestrantes.push(this.palestrante)
  }

  onChange(event: any){
    this.changeIMG.emit(event)
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.displaySelectedImage();
    }
  }

  displaySelectedImage() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.selectedFileUrl = event.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
}
