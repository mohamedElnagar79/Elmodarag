import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgxBootstrapModule } from './ngx-bootstrap/ngx-bootstrap.module';
import { MatrialModule } from './matrial/matrial.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    NgxBootstrapModule,
    MatrialModule,
    FontAwesomeModule,
    TranslateModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
    NgxBootstrapModule,
    MatrialModule,
    FontAwesomeModule,
    TranslateModule
  ]
})
export class SharedModule { }
