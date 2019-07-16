import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import { AnswerService } from '../answer.service';
import { AnswerTable } from './model/answer.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Follow } from './model/follow.model';
import { Draft } from './model/draft.model';
import { DraftService } from '../draft.service';




@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {


  public window: any;
  public FB: any;
public laterAnsweredQuestions:any;
  public resp: any;
  public followerCount: any;
  public followers : number;
  public questionsCount: number;
  public laterQueCount: number;
  public show:boolean = false;
  public  c:number;
  public btnStyle : string;
  public showMsg : boolean;

  public followName: string   = "Follow"; 
  public interested: string = "Topic that might you like";

  
  

  constructor(private answerService: AnswerService, private http: HttpClient,private entry : AnswerTable,private follow : Follow,private draft : Draft,private draftService : DraftService ) {

  }

  
  ngOnInit() {

     this.laterAnsweredQuestions = this.http.get("http://localhost:8080/query/draft"); 
    this.laterAnsweredQuestions.subscribe((response)=>{this.resp=response;this.laterQueCount = this.resp.length});
 
    let responseData= this.http.get("http://localhost:8080/query/answer");
    responseData.subscribe((response)=>{this.resp=response;
    this.questionsCount = this.resp.length;
   
   
  //console.log(this.resp);

  });


  


  }

  getAnswerLaterQuestions(){
  
   // let laterAnsweredQuestions = this.http.get("http://localhost:8080/query/draft"); 
    this.laterAnsweredQuestions.subscribe((response)=>{this.resp=response;});
  }

  answerLater(questionId,userId){
    console.log("hello");
    this.draft.questionId = questionId;
    this.draft.userId = userId;

    this.draftService.addIntoDraft(this.draft).subscribe(() =>{this.ngOnInit()});
  // $('#feed'+ansform.controls['feedNo'].value).hide();
  }
  // checkLength(len){
  //   if(len.length){

  //   }
  // }

   openAnswerWindow(i :number) {
    console.log(i);
    $('#textBox'+i).toggle();
  }
 submitAnswer(ansform){
   console.log(ansform.value);

  console.log(ansform.controls['answer'].value.length);
 
  if( ansform.controls['answer'].value != "" && ansform.controls['answer'].value.length != 0 && ansform.controls['answer'].value.length > 10){
    
   this.entry.answerDesc =  ansform.controls['answer'].value;
   this.entry.answeredBy = ansform.controls['answeredBy'].value;
   this.entry.postedBy = ansform.controls['postedBy'].value;
   this.entry.questionId = ansform.controls['questionId'].value;
   console.log(this.entry);
   
   this.answerService.enterAnswerDetails(this.entry).subscribe(() =>{this.ngOnInit()});
   $('#feed'+ansform.controls['feedNo'].value).hide();
   console.log(" card must be hide before this");
   
  }else{
    
      $('#answerSizeDiv'+ansform.controls['answerSizeDiv'].value).show();
   
    setTimeout(function(){
      $('#answerSizeDiv'+ansform.controls['answerSizeDiv'].value).hide();
    },3000);

   
  }


 }
 

 followCounter(questionIdForFollow,userId,abc){

  this.follow.questionId = questionIdForFollow;
  this.follow.userId = userId;
  this.follow.follow = 1;
    // this.follow.questionId =  questionIdForFollowTable;
    // this.follow.follow = 0;
   //console.log(this.follow);

  this.answerService.followCounter(this.follow).subscribe(() =>{
    
    this.ngOnInit();
  });
  
 //this.answerService.followCounter(questionIdForFollowTable);
 // console.log(questionId);
 
 }

 

//   fbShare(url, title, descr, image, winWidth, winHeight) {
//    this.winTop  = (screen.height / 2) - (winHeight / 2);
//    this.winLeft = (screen.width / 2) - (winWidth / 2);
//   window.open('http://www.facebook.com/sharer.php?s=100&p[title]=' + title + '&p[summary]=' + descr + '&p[url]=' + url + '&p[images][0]=' + image, 'sharer', 'top=' + this.winTop + ',left=' + this.winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
// }

  
}


