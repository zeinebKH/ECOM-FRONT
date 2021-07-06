import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import { Router } from '@angular/router';
import {ProductModelServer, serverResponse} from '../../model/product.model';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: ProductModelServer[] = [];
  constructor(private productService: ProductService,
              private cartService: CartService,
              private router: Router ) { }

  ngOnInit(): void {
    this.productService.showMassege();
    this.productService.getAllProducts().subscribe((prods: serverResponse ) => {
      this.products = prods.products;
      console.log(this.products);
    });
  }

  selectProduct(id: number) {
    this.router.navigate(['/products', id]).then();
  }

  AddProduct(id: number) {
    this.cartService.AddProductToCart(id);
  }
}
