import { Component, OnInit } from '@angular/core';
import { faUsers, faStar, faTable, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  faUsers = faUsers;
  faStar = faStar;
  faTable = faTable;
  faCheck = faCheck;
  constructor() { }

  ngOnInit() {
  }

}
