import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteListComponent } from './notes/note-list/note-list.component';
import { NoteDetailComponent } from './notes/note-detail/note-detail.component';
import { NoteFormComponent } from './notes/note-create/note-form.component';
import { NotesService } from './service/notes.service';
import { LookupService } from './service/lookup.service';
import { YouTubeService } from './service/youtube.service';
import { AuthService } from "./service/authService"
import { ProfileService} from "./service/profile.service"
import { NoteEditComponent } from "./notes/note-edit/note-edit.component";
import { LoginComponent } from "./user/login.component";
import { ProfileComponent} from "./user/profile.component"
import { Error404Component } from "./errors/404.component";
import { BjjNoteRouteActivator } from "./service/bjjnote-route-activator.service"

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteDetailComponent,
    NoteFormComponent,
    NoteEditComponent,
    Error404Component,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NotesService, LookupService, BjjNoteRouteActivator, YouTubeService, AuthService, ProfileService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
