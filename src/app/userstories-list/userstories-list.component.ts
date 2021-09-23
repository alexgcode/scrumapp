import { Component, OnInit } from '@angular/core';
import { faStar, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-userstories-list',
  templateUrl: './userstories-list.component.html',
  styleUrls: ['./userstories-list.component.css']
})
export class UserstoriesListComponent implements OnInit {

  faStar = faStar;
  faPlus = faPlus;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
