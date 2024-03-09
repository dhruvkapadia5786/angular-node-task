import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://gold-sore-sawfish.cyclic.app/api/users'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  addUser(user: any) {
    return this.http.post('https://gold-sore-sawfish.cyclic.app/api/users', user);
  } 

}
