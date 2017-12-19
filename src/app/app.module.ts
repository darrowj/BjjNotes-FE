import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import {NgxPaginationModule} from "ngx-pagination";


// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

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
import {HomeComponent} from "./home.component";
import {CreateBjjNoteRouteActivator} from "./service/createBjjNote-route-activator.service";
import { GeneralPagesComponent } from "./general/general-pages.component"

export const firebaseConfig = {
  apiKey: "AIzaSyCT59Ad6E066OZlUaSn0pSjS8n97SeWzFU",
  authDomain: "ngfbauth-7ccf1.firebaseapp.com",
  databaseURL: "https://ngfbauth-7ccf1.firebaseio.com",
  projectId: "ngfbauth-7ccf1",
  storageBucket: "ngfbauth-7ccf1.appspot.com",
  messagingSenderId: "865003744764"
};

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteDetailComponent,
    NoteFormComponent,
    NoteEditComponent,
    Error404Component,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    GeneralPagesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgxPaginationModule
  ],
  providers: [NotesService,
              LookupService,
              BjjNoteRouteActivator,
              CreateBjjNoteRouteActivator,
     YouTubeService, AuthService, ProfileService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
