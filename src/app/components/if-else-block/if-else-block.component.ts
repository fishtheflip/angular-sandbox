import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-else-block',
  templateUrl: './if-else-block.component.html',
  styleUrls: ['./if-else-block.component.css']
})
export class IfElseBlockComponent implements OnInit {
  message = "I'm read only!";
  canEdit = false;
 
  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = "I'm read only!";
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
