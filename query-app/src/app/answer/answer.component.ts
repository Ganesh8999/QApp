import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  resp: any;
  questionCount: number;
  public show:boolean = false;
 public  c:number;
  constructor(private httpobj: HttpClient) { }

  ngOnInit() {
    let responseData=this.httpobj.get("./assets/queryContent.json");
    responseData.subscribe((response)=>{
      this.resp=response; console.log(this.resp);
      this.questionCount = this.resp.length;
     this.c = 0;
    });
  }

  openAnswerWindow() {
    this.show = !this.show;
  }

}
