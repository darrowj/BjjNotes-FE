import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styles: []
})
export class NoteDetailComponent implements OnInit {

  note =
    {
      id: "1",
      title: "Title 1",
      description: "Descption NUmber 1"
    }

  constructor() { }

  ngOnInit() {
  }

}
