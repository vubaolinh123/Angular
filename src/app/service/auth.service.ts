import { IUser } from './../models/Auth';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(infoUser: IUser): Observable<IUser[]> {
    return this.http.post<IUser[]>("http://localhost:3001/api/register", infoUser)
  }

  login(infoUser: IUser): Observable<IUser[]> {
    return this.http.post<IUser[]>("http://localhost:3001/api/login", infoUser)
  }
}
