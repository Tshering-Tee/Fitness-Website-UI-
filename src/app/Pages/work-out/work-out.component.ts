import { Component } from '@angular/core';

@Component({
  selector: 'app-work-out',
  templateUrl: './work-out.component.html',
  styleUrls: ['./work-out.component.css']
})
export class WorkOutComponent {
  age18: string = "assets/Images/Work-out/18-29v5.webp"
  age30: string = "assets/Images/Work-out/30-39v5.webp" 
  age40: string = "assets/Images/Work-out/40-49v5.webp"
  age50: string = "assets/Images/Work-out/50+v5.webp"
}
