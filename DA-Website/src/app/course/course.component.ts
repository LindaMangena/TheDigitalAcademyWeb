import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course = [
    { 'id': 1, 'name': 'Learn Angular', 'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assests/Angular.png' },
    { 'id': 2, 'name': 'Learn Typerscript', 'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assests/Typescript.png' },
    { 'id': 3, 'name': 'Learn Nodejs', 'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'image':'../../assests/nodejs.jpeg' },
    { 'id': 4, 'name': 'Learn JavaScript', 'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assests/Javascript.png' }
  ]

}
