import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  about= {
    title : "About",
    content1: "I am a versatile professional with expertise spanning data science, software development, front-end development, and Android app development. With a passion for harnessing data-driven insights and crafting intuitive digital experiences, I bring a unique blend of analytical thinking and creative problem-solving to every project.",
    content2:""


  }
  services={
    dsa:"Data Science",
    swd:"Software Developer",
    fed:"Front-End Developer",
    ad:"Android Developer"

  };

}
