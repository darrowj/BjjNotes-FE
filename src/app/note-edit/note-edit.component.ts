import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService} from '../service/notes.service';
import { Note} from '../service/Note';
import 'rxjs/Rx';
import { Lookup } from '../service/Lookup';
import { LookupService} from '../service/lookup.service';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styles: []
})
export class NoteEditComponent implements OnInit {

  note: Note = new Note();
  categories: Lookup = new Lookup();
  engagements: Lookup = new Lookup();
  guards: Lookup = new Lookup();
  postures: Lookup = new Lookup();
  offensivePositions: Lookup = new Lookup();
  sweeps: Lookup = new Lookup();
  submissions: Lookup = new Lookup();
  errorMessage: string;

  constructor(private router: Router, private route: ActivatedRoute, private notesService: NotesService, private lookupService: LookupService) { }

  ngOnInit() {
    this.lookupService.getLookup("Category").subscribe(lookup => this.categories = lookup);
    this.lookupService.getLookup("Engagement").subscribe(lookup => this.engagements = lookup);
    this.lookupService.getLookup("Guards").subscribe(lookup => this.guards = lookup);
    this.lookupService.getLookup("Posture").subscribe(lookup => this.postures = lookup);
    this.lookupService.getLookup("OffensivePosition").subscribe(lookup => this.offensivePositions = lookup);
    this.lookupService.getLookup("Sweeps").subscribe(lookup => this.sweeps = lookup);
    this.lookupService.getLookup("Submissions").subscribe(lookup => this.submissions = lookup);
    this.route.params
      .map(params => params['noteId'])
      .switchMap(id => this.notesService.getNote(id))
      .subscribe(note => this.note = note);
  }

  submitUpdateNote(note: Note) {
    //console.log(note)
    this.notesService.updateNote(note)
      .subscribe((note: Note) => {
          if (note) {
            this.router.navigate(['/note-list']);
          } else {
            this.errorMessage = 'Unable to save BJJ Note';
          }
        },
        (err: any) => console.log(err));

  }

}
