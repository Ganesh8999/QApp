import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AnswerComponent } from './answer/answer.component';
import { SpaceComponent } from './space/space.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { ContentComponent } from './content/content.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FooterComponent } from './footer/footer.component';
import { AnswerService } from './answer.service';
import { AnswerTable } from './answer/model/answer.model';
import { Follow } from './answer/model/follow.model';






@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AnswerComponent,
    SpaceComponent,
    NotificationComponent,
    ProfileComponent,
    ContentComponent,
    FooterComponent,
   
    

  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [AnswerService,AnswerTable,Follow],
  bootstrap: [AppComponent]
})
export class AppModule { }
