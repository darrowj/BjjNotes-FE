import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteListComponent} from './note-list/note-list.component'
import { NoteFormComponent} from './note-form/note-form.component'
import { NoteDetailComponent} from './note-detail/note-detail.component'

const routes: Routes = [
  { path: '', component: NoteListComponent },
  { path: 'note-list', component: NoteListComponent },
  { path: 'note-form', component: NoteFormComponent },
  { path: 'note-detail/:noteId', component: NoteDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
