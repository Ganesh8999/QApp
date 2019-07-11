import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import { AnswerService } from '../answer.service';
import { AnswerTable } from './model/answer.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Follow } from './model/follow.model';




@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {


  public window: any;
  public FB: any;

  public resp: any;
  public followerCount: any;
  public followers : number;
  public questionsCount: number;
  public show:boolean = false;
  public  c:number;
  public btnStyle : string;

  
  

  constructor(private answerService: AnswerService, private http: HttpClient,private entry : AnswerTable,private follow : Follow ) {

  }

  
  ngOnInit() {
 
    let responseData= this.http.get("http://localhost:8080/query/answer");
    responseData.subscribe((response)=>{this.resp=response;
    this.questionsCount = this.resp.length;
   
  console.log(this.resp);

  });


  // window.fbAsyncInit = function() {
  //   FB.init({appId: 'YOUR APP ID', status: true, cookie: true,
  //   xfbml: true});
  //   };
  //   (function() {
  //   var e = document.createElement('script'); e.async = true;
  //   e.src = document.location.protocol +
  //   '//connect.facebook.net/en_US/all.js';
  //   document.getElementById('fb-root').appendChild(e);
  //   }());


  }

  // $(document).ready(function(){
  //   $('#share_button').click(function(e){
  //   e.preventDefault();
  //   FB.ui(
  //   {
  //   method: 'feed',
  //   name: 'This is the content of the "name" field.',
  //   link: 'http://www.groupstudy.in/articlePost.php?id=A_111213073144',
  //   picture: 'http://www.groupstudy.in/img/logo3.jpeg',
  //   caption: 'Top 3 reasons why you should care about your finance',
  //   description: "What happens when you don't take care of your finances? Just look at our country -- you spend irresponsibly, get in debt up to your eyeballs, and stress about how you're going to make ends meet. The difference is that you don't have a glut of taxpayers…",
  //   message: ""
  //   });
  //   });
  //   });

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
  console.log(" card must be hide before this");
  
 }

 followCounter(questionIdForFollow,userId){

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


