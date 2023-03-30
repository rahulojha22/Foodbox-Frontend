import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { fileHandler } from 'src/app/Models/fileHandler';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  prodImageData!: fileHandler;
  prodData = new FormGroup({
                            productName: new FormControl(),
                            productCategory: new FormControl(),
                            productBasePrice: new FormControl(),
                            pricingMethod: new FormControl(),
                            productDescription: new FormControl(),
                            productInstructions: new FormControl(),
                          });
  prodFormData = new FormData();

  constructor(private adminApi: AdminService, private sanitizer: DomSanitizer, private router: Router) { }

  ngOnInit(): void {
  }

  prodSelect(prodImage: any){
    console.log(prodImage)
    if(prodImage.target.files){
      const file = prodImage.target.files[0];
      this.prodImageData = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }
      this.prepareProdImageForm();
    }
  }

  prodDrop(prodImage: any){
    this.prodImageData = {
      file: prodImage.file,
      url: prodImage.url
    }
    this.prepareProdImageForm();
  }

  prepareProdImageForm(){
    this.prodFormData.append('productImage', this.prodImageData.file);
  }

  addProd(){
    console.log(this.prodData.value);
    this.prodFormData.append('productData', new Blob([JSON.stringify(this.prodData.value)], {type: 'application/json'}));
    this.adminApi.addProduct(this.prodFormData).subscribe((response: any) => {
      console.log(response);
      window.location.reload();
    })
  }

}
