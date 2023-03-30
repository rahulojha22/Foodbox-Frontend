import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { fileHandler } from 'src/app/Models/fileHandler';
import { PublicService } from 'src/app/Services/public.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  carouselImage: fileHandler[] = [];

  constructor(private publicApi: PublicService, private sanitizer: DomSanitizer) { 
    this.publicApi.getCarousel().subscribe((response: any) => {
      this.createCarouselImage(response);
    })
  }

  ngOnInit(): void {
  }

  createCarouselImage(carouselData: any){
    for(let i=0; i<carouselData.length; i++){
      const carouselBlob = this.carouselURLtoBlob(carouselData[i]);
      const carouselImageFile = new File([carouselBlob], carouselData[i].carouselName+'.jpg', {type: carouselData[i].carouselImageType});
      const carouselImageFileUrl = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(carouselImageFile));
      this.carouselImage.push({file: carouselImageFile, url: carouselImageFileUrl});
    }    
  }

  carouselURLtoBlob(carousaelBlobData: any){
    const byteString = window.atob(carousaelBlobData.carouselImageByte);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for(let i=0; i<byteString.length; i++){
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: carousaelBlobData.carouselImageType});
    return blob;
  }

}
