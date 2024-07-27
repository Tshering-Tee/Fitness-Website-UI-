import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ImagsURL: string = "assets/Images/Workout-PNG.png";
  Fitness: string = "assets/Images/sales-fitness.png";

  constructor(private dialogRef: MatDialog){}

  openDialog(){
    this.dialogRef.open(ContactComponent, {
      panelClass: 'dialog-container',
      width: '1000px'
  
    });
  }
}

