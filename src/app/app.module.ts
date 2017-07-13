import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { NotesService } from './service/notes.service';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteDetailComponent,
    NoteFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
