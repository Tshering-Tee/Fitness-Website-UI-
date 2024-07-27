import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm:FormGroup = new FormGroup ({
    fullName: new FormControl(null, Validators.required),
    Email: new FormControl(null, [Validators.required, Validators.email]),
    contactNumber: new FormControl(null, Validators.required),
    message: new FormControl(null, [Validators.minLength(10), Validators.required])

  })

  onFormSubmitted(){
    console.log(this.contactForm.value);
  }
}

