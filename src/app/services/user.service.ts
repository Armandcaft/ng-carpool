import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = "http://localhost:8080/users/allusers?name=&page=0&size=1";
  }

  getUsersList(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.baseUrl)
  }
}
