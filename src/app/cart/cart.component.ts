import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = [];
  checkoutForm;

  constructor(
    private cartService: CartService,
    private fb: FormBuilder
  ) {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.fb.group({
      name: '',
      address: ''
    })
  }

  onSubmit(customerData) {
    console.warn('your order has been submited', customerData);
    this.cartService.clearItem();
    this.checkoutForm.reset();
  }

  ngOnInit() {
  }

}