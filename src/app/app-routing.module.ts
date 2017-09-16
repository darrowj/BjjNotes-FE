import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteListComponent} from './note-list/note-list.component'
import { NoteFormComponent} from './note-form/note-form.component'
import { NoteDetailComponent} from './note-detail/note-detail.component'
import { NoteEditComponent} from './note-edit/note-edit.component'
import { Error404Component } from "./errors/404.component";
import { LoginComponent} from "./user/login.component"
import { BjjNoteRouteActivator } from "./service/bjjnote-route-activator.service"

const routes: Routes = [
  { path: '', component: NoteListComponent },
  { path: 'note-list', component: NoteListComponent },
  { path: 'note-form', component: NoteFormComponent },
  { path: 'note-detail/:noteId', component: NoteDetailComponent },
  { path: 'note-edit/:noteId', component: NoteEditComponent },
  { path: 'login', component: LoginComponent},
  { path: '404', component: Error404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
