import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  resp: any;
  constructor(private httpobj: HttpClient) { }

  ngOnInit() {
    let responseData=this.httpobj.get("./assets/queryContent.json");
    responseData.subscribe((response)=>{ this.resp=response; console.log(this.resp); });
  }

}
