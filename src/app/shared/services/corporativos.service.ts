import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CorporativosService {
  url_api:string = environment.apiURL
  constructor(private httpService: HttpClient) { }

  getList(){
    return this.httpService.get(`${this.url_api}/corporativos`)
  }

  getDetail(id:number){
    return this.httpService.get(`${this.url_api}/corporativos/${id}`)
  }

  add(contact){
    return this.httpService.post(`${this.url_api}/contactos`, contact)
  }

  update(contact, id:number){
    return this.httpService.put(`${this.url_api}/contactos/${id}`, contact)
  }

  deleteContact(id){
    return this.httpService.delete(`${this.url_api}/contactos/${id}`)
  }

}
