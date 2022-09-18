import { Component, OnInit } from '@angular/core';
import { faUsers, faStar, faTable, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {
  faUsers = faUsers;
  faStar = faStar;
  faTable = faTable;
  faCheck = faCheck;

  constructor() { }

  ngOnInit() {
  }

}
