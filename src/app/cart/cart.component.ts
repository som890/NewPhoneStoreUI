import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_service/product.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  displayedColumns: string[] = ['Name', 'description','Price','Discounted Price','Actions'];

  cartDeatils: any[] = [];

  ngOnInit(): void {
    this.getCartDetails();
   }
  constructor(private productService: ProductService, private router: Router) {}

  public getCartDetails() {
    this.productService.getCartDetails().subscribe(
     ( response: any) => {
        console.log(response);
        this.cartDeatils = response;
     }, (error) => {
      console.log(error)
     }
    )
  }
  checkOut() {
    this.router.navigate(['/buyProduct', {
      isSingleProductCheckOut: false, id: 0 
    }]);
  //   this.productService.getProductDetails(false, 0).subscribe(
  //      (response) => {
  //        console.log(response)
  //      }, (error) => {
  //        console.log(error);
  //      }
  //    )
   }
   delete(cartId: number) {
    console.log(cartId);
    this.productService.deleteCartItem(cartId).subscribe(
      (response) => {
        console.log(response);
        this.getCartDetails();
      }, (error) => {
        console.log(error);
      }
    )
   }

}
