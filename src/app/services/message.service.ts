import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  url="http://localhost:3000"
  constructor(private http:HttpClient) { }

async message(formData){
  return this.http.post(`${this.url}/message/message`, formData).toPromise();
}


}
