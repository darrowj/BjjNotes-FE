import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Note } from '../model/note';

@Injectable()
export class NotesService {

  private _notesUrl = 'http://localhost:8080/Notes';
  private _userNotesUrl = 'http://localhost:8080/UserNotes';
  private _homeNotesUrl = 'http://localhost:8080/HomeNotes';
  private _noteCountUrl = 'http://localhost:8080/NoteCount';
  private _homeNoteCountUrl = 'http://localhost:8080/HomeNoteCount';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getNotes(uid: string): Observable<Note[]> {
    return this.http.get(this._userNotesUrl  + '/' + uid)
      .map((res: Response) => {
        let notes = res.json();
        return notes;
      })
      .catch(this.handleError);

  }

  getHomeNotes(): Observable<Note[]> {
    return this.http.get(this._homeNotesUrl)
      .map((res: Response) => {
        let notes = res.json();
        return notes;
      })
      .catch(this.handleError);

  }

  getNote(id: string): Observable<Note> {
    return this.http.get(this._notesUrl  + '/' + id)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  public deleteNoteById(noteId: string)  : Observable<string> {
    return this.http.delete(this._notesUrl  + '/' + noteId)
      .map((res: Response) => res)
      .catch(this.handleError);
  }

  getNoteCount(uid: string): Observable<string> {
    return this.http.get(this._noteCountUrl  + '/' + uid)
      .map((res: Response) => res.text())
      .catch(this.handleError);
  }

  getHomeNoteCount(): Observable<string> {
    return this.http.get(this._homeNoteCountUrl)
      .map((res: Response) => res.text())
      .catch(this.handleError);
  }

  insertNote(note: Note) : Observable<Note> {
    console.log("This is the note being submitted: " + note.uid);
    return this.http.post(this._notesUrl, note)
      .map((res: Response) => {
        let note = res.json();
        console.log('Insert Note status: ' + note);
        return note;
      })
      .catch(this.handleError);
  }

  updateNote(note: Note) : Observable<Note> {
    return this.http.put(this._notesUrl, note)
      .map((res: Response) => {
        console.log('Update Note return: ' + res.json());
        let note = res.json();
        return note;
      })
      .catch(this.handleError);
  }



  private handleError(error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
