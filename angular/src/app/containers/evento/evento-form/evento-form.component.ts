import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTabGroup } from '@angular/material/tabs';
import { Evento } from 'src/app/model/evento';
import { EventoService } from 'src/app/services/evento/evento.service';
import { CapaService } from 'src/app/services/pagina-evento/capa.service';
import { SobreService } from 'src/app/services/pagina-evento/sobre.service';

@Component({
  selector: 'app-evento-form',
  templateUrl: './evento-form.component.html',
  styleUrls: ['./evento-form.component.scss']
})
export class EventoFormComponent implements OnInit{

  infoBasic: FormGroup;
  eventPage: FormGroup;
  id: string | null = '';

  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private serviceInfoBasic: EventoService,
    private serviceCapa: CapaService,
    private serviceSobre: SobreService) {

    this.infoBasic = this.formBuilder.group({
      id: [''],
      endereco: ['', Validators.required],
      nome: ['', Validators.required],
      dataInicial: [new Date(), Validators.required],
      dataFinal: [new Date(), Validators.required],
      maxIncricoes: ['', Validators.required],
      whatsApp: ['', Validators.pattern('')]
    });

    this.eventPage = this.formBuilder.group({
      capa: this.formBuilder.group({
        evento: new FormGroup({
          id: new FormControl(),
        }),
        tituloEvento: [''],
        imgCapa: new FormControl()
      }),

      sobre: this.formBuilder.group({
        evento: new FormGroup({
          id: new FormControl(),
        }),
        descricao: [''],
        bgColor: ['']
      }),

      palestrantes: this.formBuilder.array([])
    })
  }

  ngOnInit(){
  }

  submitInfo(){
    if (this.infoBasic.valid) {
      this.serviceInfoBasic.save(this.infoBasic.value).subscribe(
        result => {
          this.onSuccess('Evento salvo com sucesso')
          this.id = result.id
          this.next()
        },
        error => this.onError('Erro ao salvar evento'));
    } else {
      this.invalid();
    }
  }

  submitPage(){
    this.saveCapa();
    this.saveSobre();
    this.savePalestrante();
  }

  saveCapa(){
    this.eventPage.get('capa.evento.id')?.setValue(this.id);
    const capa = this.eventPage.get('capa') as FormGroup;
    console.log(capa)
    //this.serviceCapa.save(capa.value).subscribe();
  }

  saveSobre(){
    if(this.eventPage.get('sobre')){
      this.eventPage.get('sobre.evento.id')?.setValue(this.id);
      const sobre = this.eventPage.get('sobre') as FormGroup;
      console.log(sobre)
      //this.serviceSobre.save(sobre.value).subscribe()
    }
  }

  savePalestrante(){
    if(this.eventPage.get('palestrante')){
      this.eventPage.get('palestrante.evento.id')?.setValue(this.id);
      const palestrante = this.eventPage.get('palestrante') as FormGroup;
      console.log(palestrante)
      //this.serviceSobre.save(sobre.value).subscribe()
    }
  }

  changeIMG(event: any){
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
    this.eventPage.get('capa.imgCapa')?.setValue(img);
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
  }

  private onError(body: string){
    this.snackBar.open(body, '', {duration: 5000});
  }

  private invalid(){
    this.snackBar.open('Preencha todos os campos corretamente', '', {duration: 5000});
  }
}
