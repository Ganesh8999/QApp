import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AnswerTable } from './answer/model/answer.model';
import { Observable } from 'rxjs';
import { Follow } from './answer/model/follow.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AnswerService{

  constructor(private http:HttpClient) { }

  private userUrl = "http://localhost:8080/query/answer";

  private followUrl = "http://localhost:8080/query/follow";


  public enterAnswerDetails(answer: AnswerTable){
    
    console.log(answer);
    return this.http.post(this.userUrl, answer, httpOptions);
  }

  public followCounter(followObject : Follow){
   console.log(followObject);
   //console.log("url : " + this.followUrl);
   return this.http.post(this.followUrl, followObject, httpOptions);
  }
}
