import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './Student'

const API: string = "http://localhost:3000/students";

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Student[]> {
    return this.http.get<Student[]>(API);
  }

  findById(id: number): Observable<Student> {
    return this.http.get<Student>(API + '/' + id);
  }
}
