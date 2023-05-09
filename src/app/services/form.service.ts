import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private baseURL = 'http://localhost:8080/form';

  constructor(
    private http: HttpClient
  ) {
  }

  uploadForm(formData: FormData): Observable<File> {
    console.log(formData);
    return this.http.post<File>(`${this.baseURL}`, formData);
  }

  getForm(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${id}`)
  }
}
