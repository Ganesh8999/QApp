import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AnswerTable } from './answer/model/answer.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AnswerService{

  constructor(private http:HttpClient) { }

  private userUrl = "http://localhost:8080/query/answer";


  public enterAnswerDetails(answer: AnswerTable){
    //alert("fdsgs");
    console.log(answer);
    return this.http.post(this.userUrl, answer, httpOptions);
  }
}
