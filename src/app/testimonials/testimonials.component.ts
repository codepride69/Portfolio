import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  data = {
    name:"Henry Gate",
    service:"",
    intro:"",
    elevator:""
  };

}
