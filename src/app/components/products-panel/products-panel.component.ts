import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-products-panel',
  templateUrl: './products-panel.component.html',
  styleUrls: ['./products-panel.component.css']
})
export class ProductsPanelComponent implements OnInit {

  products : Array<Product>
  errorWhileObtainingProducts = false

  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.productService.getAll(null).subscribe(
      (response : Product[]) => {
        this.products.splice(0, this.products.length, ...response)
      },
      err => {
        this.errorWhileObtainingProducts = true
      }
    )
  }

}
