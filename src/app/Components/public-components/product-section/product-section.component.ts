import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PublicService } from 'src/app/Services/public.service';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.css']
})
export class ProductSectionComponent implements OnInit {

  productList: any = [];

  constructor(private publicApi: PublicService, private sanitizer: DomSanitizer) { 
    this.publicApi.getProductList().subscribe((response: any) => {
      this.createProductList(response);
    })
  }

  ngOnInit(): void {
  }

  createProductList(productData: any){
    for(let i=0; i<productData.length; i++){
      const productBlob = this.productURLtoBlob(productData[i].productImageByte, productData[i].productImageType);
      const productImageFile = new File([productBlob], productData[i].productName+'.jpg', {type: productData[i].productlImageType});
      const productImageFileUrl = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(productImageFile));
      this.productList.push({productId: productData[i].productId,
                            productName: productData[i].productName,
                            productCategory: productData[i].productCategory,
                            productBasePrice: productData[i].productBasePrice,
                            pricingMethod: productData[i].pricingMethod,
                            productActive: productData[i].productActive,
                            productDescription: productData[i].productDescription,                            
                            productInstructions: productData[i].productInstructions,                            
                            file: productImageFile,
                            url: productImageFileUrl,                            
                          });
    }
    console.log(this.productList);
  }

  productURLtoBlob(productImageByte: any, productImageType: any){
    const byteString = window.atob(productImageByte);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for(let i=0; i<byteString.length; i++){
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: productImageType});
    return blob;
  }

}
