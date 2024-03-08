import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://node-demo-hwh938n0c-bob-0f3d1387.vercel.app/api/users'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  addUser(user: any) {
    return this.http.post('https://node-demo-hwh938n0c-bob-0f3d1387.vercel.app/api/users', user);
  } 

}
