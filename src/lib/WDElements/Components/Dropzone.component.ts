import { Component, ElementRef, inject } from "@angular/core";
import { ContentTreeService } from "../ContentTree.service";

@Component({
    selector: 'app-dropzone',
    standalone: true,
    templateUrl: 'Dropzone.component.html',
    styleUrl: 'Dropzone.component.scss'
})
export class DropzoneComponent {
    public contentTreeService = inject(ContentTreeService); 
    public element: HTMLElement;
    
    constructor(private el: ElementRef){
        this.element = el.nativeElement as HTMLElement
        
    }

    ngAfterViewInit(): void {
        //console.log(this.element.children[0])
        //this.element = this.element.getElementsByClassName("dropzone")[0] as HTMLElement
    }

    Drop(event: DragEvent){
        this.element.children[0].classList.remove("dropzone-active");
        console.log("Dropped", this.contentTreeService.getNewDraggedElement(), "Into PreviewPane")
    }

    DragEnd(event: DragEvent){
        
    }

    DragEnter(event: DragEvent){
        const target = event.target as HTMLElement;
        if(target.ELEMENT_NODE === this.element.ELEMENT_NODE){
            this.element.children[0].classList.add("dropzone-active");
        }
    }

    DragLeave(event: DragEvent){
        const rect = this.element.getBoundingClientRect()
        if(event.x < rect.left || event.x >= rect.right - 1 || event.y < rect.top || event.y >= rect.bottom) {
            this.element.children[0].classList.remove("dropzone-active");
        }
    }

    DragOver(event: DragEvent){
        event.preventDefault()
    }
}