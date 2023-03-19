import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { fileHandler } from '../Models/fileHandler';

@Directive({
  selector: '[appDragImage]'
})
export class DragImageDirective {

  @HostBinding("style.background") private background = "#eee";
  @Output() files: EventEmitter<fileHandler> = new EventEmitter();

  constructor(private sanitizer: DomSanitizer) { }

  @HostListener("dragover", ["$event"])
  public onDragOver(event: DragEvent){
    event.preventDefault();
    event.stopPropagation();
    this.background = "#999";
  }

  @HostListener("dragleave", ["$event"])
  public onDragLeave(event: DragEvent){
    event.preventDefault();
    event.stopPropagation();
    this.background = "#eee";
  }

  @HostListener("drop", ["$event"])
  public onDrop(event: DragEvent){
    event.preventDefault();
    event.stopPropagation();
    this.background = "#eee";
    let fileHandle: fileHandler;
    const file = event.dataTransfer?.files[0];
    if(file){
      const url = this.sanitizer.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file)
      )
      fileHandle = {file, url};
      this.files.emit(fileHandle);
    }    
  }

}
