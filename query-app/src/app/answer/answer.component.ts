import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import { AnswerService } from '../answer.service';
import { AnswerTable } from './model/answer.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

form = new  FormGroup({
  answer :  new FormControl('',[
    Validators.required
  ])
})

  resp: any;

  questionsCount: number;
  public show:boolean = false;
  public  c:number;
  //public i : number;
  // public answerDesc :string;
  // public postedBy : number;
  // public answeredBy : number;
  // public questionId : number;

  constructor(private answerService: AnswerService, private http: HttpClient,private entry : AnswerTable ) { }

  ngOnInit() {



    let responseData= this.http.get("http://localhost:8080/query/answer");
    responseData.subscribe((response)=>{this.resp=response;
    this.questionsCount = this.resp.length;});

   
    
  }

   openAnswerWindow(i :number) {
    console.log(i);
    $('#textBox'+i).toggle();
  }
 submitAnswer(ansform){
  // console.log(form.value);

 
   this.entry.answerDesc =  ansform.controls['answer'].value;
  this.entry.answeredBy = ansform.controls['answeredBy'].value;
  this.entry.postedBy = ansform.controls['postedBy'].value;
  this.entry.questionId = ansform.controls['questionId'].value;
  console.log(this.entry);
  
  this.answerService.enterAnswerDetails(this.entry).subscribe();
  $('#feed'+ansform.controls['feedNo'].value).hide();

   
 }

  
}


