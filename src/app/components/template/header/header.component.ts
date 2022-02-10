import { Component, OnInit } from '@angular/core';
import { LinkRouter } from 'src/app/shared/linkrouter';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public readonly linkrouter:LinkRouter) { }

  ngOnInit(): void {
  }

}
