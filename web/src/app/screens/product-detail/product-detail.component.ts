import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params}  from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId =0;

  constructor( private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = parseInt(this.route.snapshot.paramMap.get('id'));
  }

}
