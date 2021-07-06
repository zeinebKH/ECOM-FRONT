import { Component, OnInit } from '@angular/core';
import {CartModelServer} from '../../model/cart.model';
import {OrderService} from '../../services/order.service';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {FormBuilder, Validators} from '@angular/forms';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {
  cartData: CartModelServer;
  cartTotal: number;
  showSpinner: boolean;
  checkoutForm: any;
  constructor(private cartService: CartService,
              private orderService: OrderService,
              private router: Router,
              private  spinner: NgxSpinnerService,
              private fb: FormBuilder) {

    this.checkoutForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],

    });
  }
  ngOnInit() {
    this.cartService.cartData$.subscribe(data => this.cartData = data);
    this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);
  }
  onCheckout() {
    this.spinner.show().then(p => {
      this.cartService.CheckoutFromCart(1);
    });
  }

}
