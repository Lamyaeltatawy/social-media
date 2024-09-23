import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  selected?: number;

  constructor() { }

  ngOnInit(): void {
  }
  checkedvalue(value:number){
  this.selected=value
  console.log(this.selected);
  
  }
}
