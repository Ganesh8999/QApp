import { Injectable } from '@angular/core';
import { Draft } from './answer/model/draft.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DraftService {

  constructor(private http:HttpClient) { }

  private draftUrl = "http://localhost:8080/query/draft";


  public  addIntoDraft(draft: Draft){
    
    console.log(draft);
    return this.http.post(this.draftUrl, draft, httpOptions);
  }
}
