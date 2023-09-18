import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTabGroup } from '@angular/material/tabs';
import { EventoService } from 'src/app/services/evento/evento.service';
import { CapaService } from 'src/app/services/pagina-evento/capa.service';

@Component({
  selector: 'app-evento-form',
  templateUrl: './evento-form.component.html',
  styleUrls: ['./evento-form.component.scss']
})
export class EventoFormComponent implements OnInit{

  infoBasic: FormGroup;
  capa: FormGroup;

  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private serviceInfoBasic: EventoService,
    private serviceCapa: CapaService) {

    this.infoBasic = this.formBuilder.group({
      id: [''],
      endereco: ['', Validators.required],
      nome: ['', Validators.required],
      dataInicial: [new Date(), Validators.required],
      dataFinal: [new Date(), Validators.required],
      maxIncricoes: ['', Validators.required],
      whatsApp: ['', Validators.pattern('')]
    });

    this.capa = this.formBuilder.group({
      tituloEvento: [''],
      imgCapa: new FormControl()
    })
  }

  ngOnInit(){
  }

  submitInfo(){
    if (this.infoBasic.valid) {
      this.serviceInfoBasic.save(this.infoBasic.value).subscribe(
        result => this.onSuccess('Evento salvo com sucesso'),
        error => this.onError('Erro ao salvar evento'));
    } else {
      this.invalid();
    }
  }

  submitPage(){
    if (this.capa.valid) {
      this.serviceCapa.save(this.capa.value).subscribe(
        result => this.onSuccess('Página salva com sucesso'),
        error => this.onError('Erro ao salvar página'));
    } else {
      this.invalid();
    }
  }

  changeIMG(event: any){
    const file = event.target.files[0];
    if(file){
      this.convertByte(file);
      console.log(this.capa)
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
    this.capa.get('imgCapa')?.setValue(img);
  }

  next(){
    const currentIndex = this.tabGroup.selectedIndex;
    const tabCount = this.tabGroup._tabs.length;
    if (currentIndex !== null && currentIndex < tabCount - 1) {
      this.tabGroup.selectedIndex = currentIndex + 1;
    }
  }

  previous(){
    const currentIndex = this.tabGroup.selectedIndex;
    if (currentIndex !== null && currentIndex > 0) {
    this.tabGroup.selectedIndex = currentIndex - 1;
    }
  }

  private onSuccess(body: string){
    this.snackBar.open(body, '', {duration: 5000});
    this.next();
  }

  private onError(body: string){
    this.snackBar.open(body, '', {duration: 5000});
  }

  private invalid(){
    this.snackBar.open('Preencha todos os campos corretamente', '', {duration: 5000});
  }
}
