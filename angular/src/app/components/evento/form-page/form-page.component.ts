import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

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

  palestrantes: FormArray;

  @Input() eventPage: FormGroup = new FormGroup({});
  @Output() changeIMG: EventEmitter<void> = new EventEmitter<void>();

  constructor(private formBuilder: FormBuilder) {
    this.palestrantes = this.formBuilder.array([])
  }

  create(){
    return new FormGroup({
      nome: new FormControl(''),
      descricao: new FormControl(''),
      selectedFile: new FormControl(null),
      selectedFileUrl: new FormControl(null),
    });
  }

  onAdd(){
    this.palestrantes.push(this.create());
  }

  onDelete(index: number) {
    this.palestrantes.removeAt(index);
  }

  onChange(event: any){
    this.changeIMG.emit(event)
  }

  onFileSelected(event: any, index: number) {
    const file: File = event.target.files[0];
    if (file) {
      const selectedFileControl = this.palestrantes.at(index).get('selectedFile');
      selectedFileControl?.setValue(file);
      this.displaySelectedImage(index);
    }
  }

  displaySelectedImage(index: number) {
    const selectedFileControl = this.palestrantes.at(index).get('selectedFile');
    if (selectedFileControl?.value) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const selectedFileUrlControl = this.palestrantes.at(index).get('selectedFileUrl');
        selectedFileUrlControl?.setValue(event.target.result);
      };
      reader.readAsDataURL(selectedFileControl.value);
    }
  }
}
