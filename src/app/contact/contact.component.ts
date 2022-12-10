import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import {MessageService} from '../services/message.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  messageForm:FormGroup
  constructor(private beta:FormBuilder, private http:HttpClient, private service:MessageService, private router: Router) { }

  ngOnInit(): void {
    // this.messageForm=this.beta.group({
    
    //   name:[''],
    //   email:[''],
    //   message:['']
      
    // })
  }
async message(){
  const res:any = await this.service.message(this.messageForm.value)
  if(res.success){
    //  alert(res.message)
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    // this.router.navigateByUrl('/');
  }
  else
  // alert(res.message)
   
Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Something went wrong!',
  footer: '<a href>Why do I have this issue?</a>'
})
}

}
