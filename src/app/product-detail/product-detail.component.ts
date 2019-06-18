import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product;

  constructor(
    private router: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
        this.product = products[+params.get('id')];
    })
  }

  addProductToCard(product) {
    this.cartService.addToCard(product);
    window.alert('added to cart. thank you!');
  }

}