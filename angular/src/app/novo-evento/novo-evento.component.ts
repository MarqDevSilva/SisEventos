import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NovoEventoService } from '../novo-evento/service/novo-evento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-evento',
  templateUrl: './novo-evento.component.html',
  styleUrls: ['./novo-evento.component.scss']
})
export class NovoEventoComponent {

  form = this.formBuilder.group({
    endereco: ['', Validators.required],
    nome: ['', Validators.required],
    dataInicial: new FormControl (null,  Validators.required),
    dataFinal: new FormControl(null, Validators.required),
    maxIncricoes: [],
    whatsApp: [],
    tituloEvento: [''],
    imgCapa: new FormControl()
  })

  step = 0;
  step1 = true;
  step2 = false;
  step3 = false;

  constructor(private formBuilder: FormBuilder,
    private service: NovoEventoService,
    private snackBar: MatSnackBar,
    private router : Router,
    ) {
   }

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

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
