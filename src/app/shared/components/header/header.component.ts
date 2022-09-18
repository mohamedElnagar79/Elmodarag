import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

}
