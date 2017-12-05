import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService} from '../../service/notes.service';
import { LookupService} from '../../service/lookup.service';
import { Note } from '../../model/note';
import { Lookup } from '../../model/lookup';
import { DatePipe } from '@angular/common';
import 'rxjs/Rx';
import {AngularFireAuth} from "angularfire2/auth";
import {AuthService} from "../../service/authService";
import {ProfileService} from "../../service/profile.service";


@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styles: []
})
export class NoteFormComponent implements OnInit {

  note =
    {
      id: null,
      uid: "",
      title: "Enter Title Here",
      category: "",
      description: "Enter Description Here",
      engagement: "",
      guard: "",
      posture: "",
      offensivePosition: "",
      sweep: "",
      submission: "",
      published: ""
    }

  categories: Lookup = new Lookup();
  engagement: Lookup = new Lookup();
  guards: Lookup = new Lookup();
  postures: Lookup = new Lookup();
  offensivePositions: Lookup = new Lookup();
  sweeps: Lookup = new Lookup();
  submissions: Lookup = new Lookup();
  public isLoggedIn: boolean;

  errorMessage: string;
  userId: string;

  constructor(private router: Router, private route: ActivatedRoute, private notesService: NotesService,
              private lookupService: LookupService, private authService: AuthService,
              private profileService: ProfileService, private afAuth: AngularFireAuth) {
    authService.isAuthenticated()
      .subscribe(
        success => this.isLoggedIn = success
      );

    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
  }

  submitNewNote() {
      this.note.uid = this.userId;

      this.notesService.insertNote(this.note)
        .subscribe((note: Note) => {
            if (note) {
              this.router.navigate(['/note-list']);
            } else {
              this.errorMessage = 'Unable to save BJJ Note';
            }
          },
          (err: any) => console.log(err));

  }

  ngOnInit() {
    var profileCheck
    if(!this.isLoggedIn) {
      this.router.navigate(['/404'])
    }

    this.profileService.checkProfileExists(this.userId).subscribe(count => {
      profileCheck = count;
      if (profileCheck != 1) {
        this.router.navigate(['/profile']);
      }
    });



    this.lookupService.getLookup("Engagement").subscribe(lookup => this.engagement = lookup);
    this.lookupService.getLookup("Guards").subscribe(lookup => this.guards = lookup);
    this.lookupService.getLookup("Posture").subscribe(lookup => this.postures = lookup);
    this.lookupService.getLookup("OffensivePosition").subscribe(lookup => this.offensivePositions = lookup);
    this.lookupService.getLookup("Sweeps").subscribe(lookup => this.sweeps = lookup);
    this.lookupService.getLookup("Submissions").subscribe(lookup => this.submissions = lookup);
    this.lookupService.getLookup("Category").subscribe(lookup => this.categories = lookup);
  }
}
