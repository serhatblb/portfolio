import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SevicesComponent } from './sevices/sevices.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    FooterComponent,
    HomeComponent,
    MainComponent,
    NavbarComponent,
    SevicesComponent,
    SkillsComponent,
    WorkComponent
],
  templateUrl: './app.component.html',
  styleUrl: './css/style.css'
})
export class AppComponent {
  title = 'portfolio';
}
