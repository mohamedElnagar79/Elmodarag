import { Component, OnInit } from '@angular/core';
import { faStar , faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.scss']
})
export class DepartmentDetailsComponent implements OnInit {
  faStar = faStar;
  faUsers = faUsers;

  constructor() { }

  ngOnInit() {
  }

}
