import { Component, OnInit } from '@angular/core';

import {Clipboard} from '@angular/cdk/clipboard';
import {TooltipPosition} from '@angular/material/tooltip';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
    popcorn = document.querySelector('#popcorn');
    tooltip = document.querySelector('#tooltip');
 
  

  constructor(private clipboard: Clipboard) { }

  ngOnInit(): void {
    this.loading()
    // this.popper()
  }
//  target() {
//   var toolTip = document.getElementsByClassName('profile');
//   toolTip.focus()
//  }
loading(){
  var page = document.documentElement.style.display
    setInterval(page,1500)
}
copyEmail(){
  this.clipboard.copy('dinesh.dadwal999@gmail.com');
  alert('Email Copied!')
}
// popper(){createPopper(this.popcorn,this.tooltip,{
//   placement: 'right-start',
// });
// }

}
