import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeOption } from '../models/administration/type-option.model';

@Injectable({
  providedIn: 'root'
})
export class TypeOptionService {

  private baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = "http://localhost:8080/option";
  }

  getTypeOptionsList(): Observable<TypeOption[]>{
    let baseUrlGet = this.baseUrl+"/getAll";
    return this.httpClient.get<TypeOption[]>(baseUrlGet)
  }

  createTypeOption(typeOption: TypeOption): Observable<Object>{
    let baseUrlGet = this.baseUrl+"/create";
    return this.httpClient.post(baseUrlGet, typeOption)
  }

  getTypeOptionById(typeOptionId: number): Observable<TypeOption>{
    let baseUrlGet = this.baseUrl+"/get/" + typeOptionId;
    console.log(baseUrlGet);
    return this.httpClient.get<TypeOption>(baseUrlGet)
  }

  updateTypeOption(typeOptionId: number, typeOption: TypeOption): Observable<Object>{
    let baseUrlGet = this.baseUrl+"/update/" + typeOptionId;
    return this.httpClient.put(baseUrlGet, typeOption)
  }

  deleteTypeOption(typeOptionId: number): Observable<Object>{
    let baseUrlGet = this.baseUrl+"/delete/" + typeOptionId
    alert('Delete ?')
    return this.httpClient.delete(baseUrlGet)
    alert('Deleted !')
  }
}
