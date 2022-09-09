import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = "http://localhost:8081/role";
  }

  getRolesList(): Observable<Role[]>{
    let baseUrlGet = this.baseUrl+"/getAll";
    return this.httpClient.get<Role[]>(baseUrlGet)
  }

  createRole(role: Role): Observable<Object>{
    let baseUrlGet = this.baseUrl+"/create";
    return this.httpClient.post(baseUrlGet, role)
  }

  getRoleById(roleId: number): Observable<Role>{
    let baseUrlGet = this.baseUrl+"/get/" + roleId;
    console.log(baseUrlGet);
    return this.httpClient.get<Role>(baseUrlGet)
  }

  updateRole(roleId: number, role: Role): Observable<Object>{
    let baseUrlGet = this.baseUrl+"/update/" + roleId;
    return this.httpClient.put(baseUrlGet, role)
  }

  deleteRole(roleId: number): Observable<Object>{
    let baseUrlGet = this.baseUrl+"/delete/" + roleId
    alert('Delete ?')
    return this.httpClient.delete(baseUrlGet)
    alert('Deleted !')
  }
}
