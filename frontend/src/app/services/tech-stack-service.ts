import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { techStack } from '../Model/techStack';

@Injectable({
  providedIn: 'root',
})
export class TechStackService {
  private apiurl = 'http://localhost:8080/techstack';

  constructor(private http : HttpClient){}

  getTechStack():Observable<techStack[]>{
    return this.http.get<techStack[]>(this.apiurl);
  }

  getTechStacks() {
  return this.http.get<any[]>('http://localhost:8080/techstack');
}


}
