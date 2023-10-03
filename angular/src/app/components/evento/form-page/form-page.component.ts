import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

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

  palestrantes: any[] = [];

  @Input() capa: FormGroup = new FormGroup({});
  @Input() sobre: FormGroup = new FormGroup({});
  @Output() changeIMG: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  onAdd(){
    this.palestrantes.push({ nome: '', descricao: '' });
  }

  onDelete(index: number) {
    if (index >= 0 && index < this.palestrantes.length) {
      this.palestrantes.splice(index, 1);
    }
  }

  onChange(event: any){
    this.changeIMG.emit(event)
  }

  onFileSelected(event: any, index: number) {
    const file: File = event.target.files[0];
    if (file) {
      this.palestrantes[index].selectedFile = file;
      this.displaySelectedImage(index);
    }
  }

  displaySelectedImage(index: number) {
    if (this.palestrantes[index].selectedFile) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.palestrantes[index].selectedFileUrl = event.target.result;
      };
      reader.readAsDataURL(this.palestrantes[index].selectedFile);
    }
  }
}
