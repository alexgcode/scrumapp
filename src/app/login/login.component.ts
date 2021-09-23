import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

//Reference to app.js login
declare function addFocusBlurToInputs(): any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private elementRef:ElementRef) { }

  ngOnInit(): void {
    console.log("first");
  }

  ngAfterContentChecked():void{
    
    addFocusBlurToInputs();
    console.log("second");
  }

}
