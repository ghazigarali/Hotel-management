import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-chambres',
  imports: [],
  templateUrl: './list-chambres.html',
  styleUrl: './list-chambres.css',
})
export class ListChambresComponent implements OnInit {

  chambres: string[];

  constructor() {
    this.chambres = ["Suite Présidentielle", "Chambre Double", "Chambre Simple"];
  }

  ngOnInit(): void {}
}
