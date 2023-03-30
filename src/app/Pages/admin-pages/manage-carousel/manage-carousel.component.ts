import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { fileHandler } from 'src/app/Models/fileHandler';
import { AdminService } from 'src/app/Services/admin.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-manage-carousel',
  templateUrl: './manage-carousel.component.html',
  styleUrls: ['./manage-carousel.component.css']
})
export class ManageCarouselComponent implements OnInit {

  ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
    {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
    {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
    {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
    {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
    {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
    {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
    {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
    {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
    {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  carousel: {carouselName: string} = {carouselName: ''};
  carouselImage: { name: string, carouselImg: fileHandler[]} = { name: '', carouselImg: [] };
  // carouselFormData: any;
  carouselIm: any;
  path: any;

  carouselImageData!: fileHandler;
  carouselActive = true;
  ifs = '';
  carouselData = new FormGroup({
                                carouselName: new FormControl()
                              });
  carouselFormData = new FormData();  

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private adminApi: AdminService, private sanitizer: DomSanitizer, private router: Router) { 
    // this.adminApi.getCarousel().subscribe((response: any) => {
    //   this.carouselIm = response;
    //   console.log(response);      
    //   this.createCarouselImage();  
    // });       
  }

  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;
  } 

  carouselSelect(carouselImage: any){
    if(carouselImage.target.files){
      const file = carouselImage.target.files[0];
      this.carouselImageData = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }      
    }
    // if(event.target.files){
    //   const file = event.target.files[0];
    //   const fileHandle: fileHandler = {
    //     file: file,
    //     url: this.sanitizer.bypassSecurityTrustUrl(
    //       window.URL.createObjectURL(file)
    //     )
    //   }
    //   console.log(file);
    //   this.carousel.carouselName = file.name;
    //   this.carouselImage.name = file.name;
    //   this.carouselImage.carouselImg.push(fileHandle);
    //   console.log(this.carouselImage);
    // }
    // this.carouselFormData = this.prepareCarouselForm();
    // console.log(this.carouselFormData);
  }

  carouselDrop(carouselImage: any){
    this.carouselImageData = {
      file: carouselImage.file,
      url: carouselImage.url
    }
  }

  prepareCarouselForm(){
    this.carouselFormData.append('carouselData', new Blob([JSON.stringify(this.carouselData.value)], {type: 'application/json'}));
    this.carouselFormData.append('carouselImage', this.carouselImageData.file);
    this.addCarousel();
  }

  addCarousel(){    
    this.adminApi.addCarousel(this.carouselFormData).subscribe((response: any) => {
      console.log(response);
      
    })    
  }

  // prepareCarouselForm(): FormData{
  //   const carouselForm = new FormData();
  //   carouselForm.append(
  //     'carousel', new Blob([JSON.stringify(this.carousel)], {type: 'application/json'})
  //   );
  //   carouselForm.append(
  //     'carouselImage', this.carouselImage.carouselImg[0].file
  //   );
  //   return carouselForm;
  // }  

  createCarouselImage(){
    const carouselBlob = this.carouselURItoBlob();
    const carouselImageFile = new File([carouselBlob], 'Rahul.jpg', {type: 'image/jpg'});
    const carouselImageFileUrl = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(carouselImageFile));
    const carouselImageFileHandle: fileHandler = {file: carouselImageFile, url: carouselImageFileUrl};
    this.path = carouselImageFileUrl;
  }

  carouselURItoBlob(){
    const byteString = window.atob(this.carouselIm.picByte);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for(let i=0; i<byteString.length; i++){
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/jpg'});
    return blob;
  }

}
