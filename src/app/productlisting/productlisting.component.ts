import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';
import productsData from 'productlisting.json';

@Component({
  selector: 'app-productlisting',
  templateUrl: './productlisting.component.html',
  styleUrls: ['./productlisting.component.css'],
})
export class ProductListingComponent implements OnInit {
name='Angular';
  products: Product[] =productsData;
  
  showPrompt: boolean = false;
  promptMessage: string = '';

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.showPrompt = true;
    this.promptMessage = 'Added to Cart';

    setTimeout(() => {
      this.showPrompt = false;
    }, 2000); // Hide prompt after 2 seconds
  }

  decreaseQuantity(product: Product): void {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

  increaseQuantity(product: Product): void {
    product.quantity++;
  }
}
