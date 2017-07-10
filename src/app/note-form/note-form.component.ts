import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styles: []
})
export class NoteFormComponent implements OnInit {

  private note =
    {
      id: "1",
      title: "Title 1",
      description: "Descption NUmber 1"
    }

  constructor() { }

  ngOnInit() {
  }

}
