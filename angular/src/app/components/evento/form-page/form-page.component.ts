import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventoService } from 'src/app/services/evento/evento.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent {
  form = this.formBuilder.group({
    tituloEvento: [''],
    imgCapa: new FormControl()
  })

  step = false;
  step2 = false;
  step3 = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: EventoService,
    private snackBar: MatSnackBar
    ) {}

    onSubmit(){
      this.service.save(this.form.value).subscribe(result => this.onSuccess(), error => this.onError());
    }

    private onError(){
      this.snackBar.open('Erro ao salvar evento', '', {duration: 3000});
    }

    private onSuccess(){
      this.snackBar.open('Evento salvo com sucesso', '', {duration: 5000});
    }

    onChange(event: any){
      const file = event.target.files[0];
      if(file){
        this.convertByte(file);
      }
    }

    convertByte(file: File){
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const img = event.target.result;
        const imgByte = new Uint8Array(img);
        const numberArray = Array.from(imgByte);
        this.setImgForm(numberArray)
      }
      reader.readAsArrayBuffer(file);
    }

    setImgForm(img: number[]){
      this.form.get('imgCapa')?.setValue(img);
    }
}
