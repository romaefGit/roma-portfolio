import { Component } from '@angular/core';
import { Experience } from 'src/core/models/experience/experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experienceList: Experience[] = [
    {
      date: 'May 2023 - Present',
      company: "Endless Adventures",
      position: "Front End Developer",
      description: "Senior consultant web developer",
      details: "Creating with Angular the web page of their tool that create video games without code."
    },
    {
      date: 'Sep 2020 - Sep 2022',
      company: "COINK",
      position: "Front End Developer",
      description: "IONIC developer",
      details: "I used the IONIC framework with Angular 12 working on the markup and logic of the app, compiling for IOS and sending version to the AppStore."
    },
    {
      date: 'Jan 2018 - Nov 2019',
      company: "El Tiempo",
      position: "Front End | Back End | Developer",
      description: "Web developer",
      details: "Languages like Drupal 8, Drupal 7 and PHP5 in a framework called Codeigniter and other project with NodeJs, LoopBack3 and Angular7. - Go and closure of production in every digital event, like CyberDays and BlackFriday. "
    },
    {
      date: 'Oct 2017 - Nov 2017',
      company: "Cultivando Futuro",
      position: "Front End Developer",
      description: "Angular developer",
      details: "Angular handling, supporting administration processes."
    },
    {
      date: 'Mar 2017 - Oct 2017',
      company: "GLOGIC",
      position: "Front End Developer",
      description: "Angular developer",
      details: "Angular handling, supporting administration processes and statistical graphs."
    },
    {
      date: 'Mar 2014 - Mar 2017',
      company: "GRIMORUM",
      position: "Front End | Back End | Developer",
      description: "Web developer",
      details: "Manage multiple projects of innovation, supporting web pages and web apps with IONIC."
    }
  ]
}
