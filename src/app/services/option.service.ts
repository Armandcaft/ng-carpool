import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Option } from '../models/option.model';

@Injectable({
  providedIn: 'root'
})
export class OptionService {

  private baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = "http://localhost:8081/option";
  }

  getOptionsList(): Observable<Option[]>{
    let baseUrlGet = this.baseUrl+"/getAll";
    return this.httpClient.get<Option[]>(baseUrlGet)
  }

  createOption(option: Option): Observable<Object>{
    let baseUrlGet = this.baseUrl+"/create";
    return this.httpClient.post(baseUrlGet, option)
  }

  getOptionById(optionId: number): Observable<Option>{
    let baseUrlGet = this.baseUrl+"/get/" + optionId;
    console.log(baseUrlGet);
    return this.httpClient.get<Option>(baseUrlGet)
  }

  updateOption(optionId: number, option: Option): Observable<Object>{
    let baseUrlGet = this.baseUrl+"/update/" + optionId;
    return this.httpClient.put(baseUrlGet, option)
  }

  deleteOption(optionId: number): Observable<Object>{
    let baseUrlGet = this.baseUrl+"/delete/" + optionId
    alert('Delete ?')
    return this.httpClient.delete(baseUrlGet)
    alert('Deleted !')
  }
}
