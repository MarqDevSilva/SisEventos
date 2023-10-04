import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})

export class FormPageComponent {

  @Input() eventPage: FormGroup = new FormGroup({});
  @Output() changeIMG: EventEmitter<void> = new EventEmitter<void>();

  sobreToggle = false
  palestrantesToggle = false
  programacaoToggle = false
  localToggle = false

  selectedFile: File | null = null;
  selectedFileUrl: string | null = null;

  palestrantes = this.eventPage.get('palestrantes') as FormArray;

  constructor() {
  }

  onAdd(){
    this.palestrantes.push(this.create());
  }

  create(){
    return new FormGroup({
      evento: new FormGroup({
        id: new FormControl(),
      }),
      nome: new FormControl(),
      descricao: new FormControl(),
      img: new FormControl(),
    });
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
