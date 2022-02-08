import { Component, Input, OnInit } from '@angular/core';
import { Animals } from './models/Animals';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {

  allAnimals: Animals[] = [
    new Animals('Katt', 'Liten', 3, true),
    new Animals('Blåmes', 'Pytte', 2, false),
    new Animals('Mus', 'Pytte', 4, true)
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
