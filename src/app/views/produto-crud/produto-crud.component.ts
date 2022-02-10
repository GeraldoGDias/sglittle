import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinkRouter } from 'src/app/shared/linkrouter';

@Component({
  selector: 'app-produto-crud',
  templateUrl: './produto-crud.component.html',
  styleUrls: ['./produto-crud.component.css']
})
export class ProdutoCrudComponent implements OnInit {

  constructor(private router: Router, private readonly linkRouter: LinkRouter) { }

  ngOnInit(): void {

  }

  navigateToProductCreate(): void {
    this.router.navigate([this.linkRouter.ProdutoCreateLink]);
  }

}
