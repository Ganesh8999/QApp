import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnswerComponent } from './answer/answer.component';
import { SpaceComponent } from './space/space.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'answer', component: AnswerComponent},
  {path: 'space', component: SpaceComponent},
  {path: 'notification', component: NotificationComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'content', component: ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
