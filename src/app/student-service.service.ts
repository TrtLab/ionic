import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API: string = "http://localhost:3000/students";

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http: HttpClient) { }

  findAll(): any {
    return this.http.get(API);
  }

  findById(id: number): any {
    return this.http.get(API + '/' + id);
  }
}
