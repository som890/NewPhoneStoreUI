import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../_model/product.model';
import { ProductService } from '../_service/product.service';

@Component({
  selector: 'app-product-view-details',
  templateUrl: './product-view-details.component.html',
  styleUrls: ['./product-view-details.component.css']
})
export class ProductViewDetailsComponent implements OnInit{

  product!: Product;
  selectedProductIndex = 0;
  
  constructor(private activedRoute: ActivatedRoute, private router: Router,
              private productService: ProductService){}
  
  ngOnInit(): void {
    this.product = this.activedRoute.snapshot.data['product'];
    console.log(this.product);
  }
  changeIndex(index: number) {
    this.selectedProductIndex = index;
  }

  buyProduct(productId: any) {
    this.router.navigate(['/buyProduct', {
      isSingleProductCheckOut: true, id: productId 
    }]);
  }

  addToCart(productId: any) {
    this.productService.addToCart(productId).subscribe(
      (response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      }
    )
  }

}
