import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService} from '../service/notes.service';
import { LookupService} from '../service/lookup.service';
import { Note } from '../service/Note';
import { Lookup } from '../service/Lookup';
import { DatePipe } from '@angular/common';
import 'rxjs/Rx';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styles: []
})
export class NoteFormComponent implements OnInit {

  note =
    {
      id: null,
      title: "Enter Title Here",
      description: "Enter Desciption Here",
      engagement: "",
      guard: "",
      posture: "",
      offensivePosition: "",
      sweep: "",
      submission: ""
    }

  engagement: Lookup = new Lookup();
  guards: Lookup = new Lookup();
  postures: Lookup = new Lookup();
  offensivePositions: Lookup = new Lookup();
  sweeps: Lookup = new Lookup();
  submissions: Lookup = new Lookup();

  errorMessage: string;

  constructor(private router: Router, private route: ActivatedRoute, private notesService: NotesService, private lookupService: LookupService) { }

  submitNewNote() {

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
    this.lookupService.getLookup("Engagement").subscribe(lookup => this.engagement = lookup);
    this.lookupService.getLookup("Guards").subscribe(lookup => this.guards = lookup);
    this.lookupService.getLookup("Posture").subscribe(lookup => this.postures = lookup);
    this.lookupService.getLookup("OffensivePosition").subscribe(lookup => this.offensivePositions = lookup);
    this.lookupService.getLookup("Sweeps").subscribe(lookup => this.sweeps = lookup);
    this.lookupService.getLookup("Submissions").subscribe(lookup => this.submissions = lookup);
  }
}
