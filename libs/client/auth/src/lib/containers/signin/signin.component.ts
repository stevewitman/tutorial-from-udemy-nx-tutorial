import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'udemy-nx-tutorial-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  ngOnInit(): void {
    console.log('Signin Component')
  }

  signin() {
    console.log('signin button clicked')
  }
}
