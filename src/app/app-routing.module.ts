import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteListComponent} from './notes/note-list/note-list.component'
import { NoteFormComponent} from './notes/note-create/note-form.component'
import { NoteDetailComponent} from './notes/note-detail/note-detail.component'
import { NoteEditComponent} from './notes/note-edit/note-edit.component'
import { Error404Component } from "./errors/404.component";
import { LoginComponent} from "./user/login.component"
import { ProfileComponent } from "./user/profile.component"
import {HomeComponent} from "./home.component";
import { BjjNoteRouteActivator } from "./service/bjjnote-route-activator.service"
import {CreateBjjNoteRouteActivator} from "./service/createBjjNote-route-activator.service";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'note-list', component: NoteListComponent},
  { path: 'note-form', component: NoteFormComponent },
  { path: 'note-detail/:noteId', component: NoteDetailComponent },
  { path: 'note-edit/:noteId', component: NoteEditComponent, canActivate: [BjjNoteRouteActivator] },
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'profile/:profileId', component: ProfileComponent},
  { path: '404', component: Error404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
