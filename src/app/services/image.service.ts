import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private baseURL = 'http://localhost:8080/image';

  constructor(
    private http: HttpClient
  ) {
  }

  uploadImage(formData: FormData): Observable<File> {
    console.log(formData);
    return this.http.post<File>(`${this.baseURL}`, formData);
  }

  retrieveImage(fileName: string): Observable<any> {
    return this.http.get(`${this.baseURL}/${fileName}`)
  }
}
