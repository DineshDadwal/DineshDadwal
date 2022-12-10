import { Component, OnInit } from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private clipboard: Clipboard,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  //  this.allProgress()
  
  }
  copyEmail(){
    this.clipboard.copy('dinesh.dadwal999@gmail.com');
    this._snackBar.open('Email Copied!', 'ok');
  }
//  allProgress = function(){
//    var barOne =  document.getElementById("progress-bar-1")
//    barOne.style.width = "10%"
//    var barTwo = document.getElementById("progress-bar-2")
//    barTwo.style.width = "20%"
//    var barThree = document.getElementById("progress-bar-3")
//    barThree.style.width = "30%"
//    var barFour = document.getElementById("progress-bar-4")
//    barFour.style.width = "50%"
//    setTimeout(() => {
//    barOne.style.display =  "flex"
//    barTwo.style.display =  "flex"
//    barThree.style.display =  "flex"
//    barFour.style.display =  "flex"
//   }, 3000);
//  }

    
  Scroll = function(){
   document.getElementById("scroll")
window.onscroll
scrollTo.call
  }

  }
