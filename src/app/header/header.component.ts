import { Component, OnInit } from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private clipboard: Clipboard, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    // this.animatedProgress()
  }
  copyEmail(){
    this.clipboard.copy('dinesh.dadwal999@gmail.com');
    // alert('Email Copied!')
  
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open("Email Copied", action, {
      duration: 2000,
      
    });
  }
//   animatedProgress(){
//     var loader = document.getElementById("pro")
//     var flow = new XMLHttpRequest()
//       flow.open("GET","index.html",true);
//       flow.onprogress = () =>{
//         loader.style.display = "block"
//         setTimeout(()=>{loader.style.width = "30%" }, 1 )
       
//         setTimeout(()=>{loader.style.width = "50%" }, 1000 )
//       }
//       flow.onload = function(){
//         if (flow.status === 200){
//           console.log("ok")
//           setTimeout(()=>{loader.style.width = "100%" }, 5000 )
//           setTimeout(()=>{loader.style.display = "none" }, 6000 )
//         }
//         }
      
//       flow.send();
// }
}