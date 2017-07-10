import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styles: []
})
export class NoteListComponent implements OnInit {

  private nbNotes: number = 2;

  notes = [
    {
      id: "1",
      title: "Title 1",
      description: "Descption NUmber 1"
    },
    {
      id: "2",
      title: "Title 2",
      description: "Descption NUmber 2"
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
