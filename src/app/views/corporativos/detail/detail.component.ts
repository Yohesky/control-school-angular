import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CorporativosService } from 'app/shared/services/corporativos.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: []
})
export class DetailComponent implements OnInit {
  id:string = ''
  ObjectKeys = Object.keys
  user:any = {}
  form: FormGroup
  formToSubmit: FormGroup
  edit:boolean = true
  editContact:boolean = false
  id_toEdit:number = 0
  constructor(
    private activatedRoute: ActivatedRoute,
    private cService: CorporativosService,
    private location: Location,
    private cd: ChangeDetectorRef,
    private fb: FormBuilder
  ) {
    this.createForm()
  }

  createForm(){
    this.formToSubmit = this.fb.group({
      S_Nombre: [],
      S_Puesto: [],
      S_Comentarios: [],
      N_TelefonoFijo: [],
      N_TelefonoMovil: [],
      S_Email: [],
    })

    this.form = this.fb.group({
      nombre_corto: [],
      nombre_completo: [],
      status: [],
      fecha_incorporacion: [],
      url: []
    })
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.getDetail()
  }

  getDetail(){
    this.cService.getDetail(Number(this.id))
    .subscribe((res:any) => {
      this.user = res.data.corporativo
      this.cd.detectChanges()
      this.form.patchValue({
        nombre_corto: this.user.S_NombreCorto,
        nombre_completo: this.user.S_NombreCompleto,
        status: this.user.S_Activo,
        fecha_incorporacion: this.user.D_FechaIncorporacion,
        url: this.user.S_SystemUrl
      })
      console.log(this.user)
    }, err => {
      window.alert('Ha ocurrido un error, intente nuevamente')
    })
  }

  back(){
    this.location.back()
  }

  sendContact(){
    let data = this.formToSubmit.value
    data.tw_corporativo_id = Number(this.id)

    if(!this.editContact){
      this.cService.add(data)
      .subscribe((res:any) => {
        this.user.tw_contactos_corporativo.push(res.data)
        this.formToSubmit.reset()
      }, err => {
        window.alert('Ha ocurrido un error, intente nuevamente')
      })
    }else{
      this.cService.update(data, this.id_toEdit)
      .subscribe((res:any) => {
        this.user.tw_contactos_corporativo = this.user.tw_contactos_corporativo.map(contact => contact.id === this.id_toEdit ? data : contact)
        this.cd.detectChanges()
        this.id_toEdit = 0
        this.edit = false
        this.formToSubmit.reset()
      }, err => {
        window.alert('Ha ocurrido un error, intente nuevamente')
      })
    }

  }

  trash(id){
    this.cService.deleteContact(id)
    .subscribe(res => {
      console.log(res)
      this.user.tw_contactos_corporativo = this.user.tw_contactos_corporativo.filter(contact => Number(contact.id) !== Number(id))
      this.cd.detectChanges()
    }, err => {
      window.alert('Ha ocurrido un error, intente nuevamente')
    })
  }

  setValues(contacto, id:number){
    this.editContact = true
    this.id_toEdit = id
    this.formToSubmit.patchValue({
      S_Nombre: contacto.S_Nombre,
      S_Puesto: contacto.S_Puesto,
      S_Comentarios: contacto.S_Comentarios,
      N_TelefonoFijo: contacto.N_TelefonoFijo,
      N_TelefonoMovil: contacto.N_TelefonoMovil,
      S_Email: contacto.S_Email,
    })
  }

}
