import { Component, OnInit } from '@angular/core';
import { LinkRouter } from 'src/app/shared/linkrouter';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public readonly linkrouter:LinkRouter) { }

  ngOnInit(): void {
  }

}
