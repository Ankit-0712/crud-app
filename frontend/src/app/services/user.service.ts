import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private apiurl  ='http://localhost:8080/users';

  constructor(private http : HttpClient){}

  getUser(id: any): Observable<User[]>{
    return this.http.get<User[]>(this.apiurl);
  }

  getUserById(id : number) : Observable<User>{
    return this.http.get<User>(`${this.apiurl}/${id}`);
  }

  createUser(user : User): Observable<User>{
    return this.http.post<User>(this.apiurl, user);
  }

  updateUser(id : number, user: User){
    return this.http.put<User>(`${this.apiurl}/${id}`, user);
  }

 deleteUser(id: number): Observable<string> {
  return this.http.delete(`${this.apiurl}/${id}`, { responseType: 'text' });
}
}
