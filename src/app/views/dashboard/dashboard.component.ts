import { Component, OnInit } from '@angular/core';
import { LinkRouter } from 'src/app/shared/linkrouter';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public readonly linkrouter:LinkRouter) { }

  ngOnInit(): void {
  }

}
