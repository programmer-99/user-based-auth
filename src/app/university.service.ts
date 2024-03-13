import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

 

  private apiUrl = 'http://universities.hipolabs.com/search?country=Pakistan';

  constructor(private http: HttpClient) { }

  getUniversities(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
