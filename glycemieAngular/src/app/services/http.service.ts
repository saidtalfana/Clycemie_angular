import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Glycemie } from '../model/glycemie';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: string = 'http://localhost:8080/'

  constructor(private http:HttpClient) {}

  public fetchAll(): Observable<Glycemie[]> {
    return this.http.get<Glycemie[]>(this.url + 'glycemie');
  }


  public addGlycemie(glycemie: Glycemie) {

    return this.http.post<Glycemie>(this.url + 'add', glycemie);
  }

  public delete(id: number) {
    return this.http.delete<Glycemie>(this.url + 'delete/' + id);
  }
  
  public update(id: number, glycemie: Glycemie) {
    return this.http.put<Glycemie>(this.url + 'update/' + id, glycemie);
  }
  public findById(id: number){
    return this.http.get<Glycemie>(this.url+'findbyid/'+id)
  }
  
 
  
}
