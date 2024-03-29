import { AfterViewInit, Directive, ElementRef, Host, HostListener, inject } from "@angular/core";
import { ContentTreeService } from '../ContentTree.service'

@Directive({
    selector: '[Dropzone]',
    standalone: true
})
export class DropzoneDirective implements AfterViewInit {
    public contentTreeService = inject(ContentTreeService); 
    public element: HTMLElement;
    
    constructor(private el: ElementRef){
        this.element = el.nativeElement;
        console.log("CONSTRUCTOR")
        console.log(this.element)
        this.element.addEventListener('drop', this.Drop)
        this.element.addEventListener('dragend', this.DragEnd)
        this.element.addEventListener('dragenter', this.DragEnter)
        this.element.addEventListener('dragleave', this.DragLeave)
        this.element.addEventListener('dragover', this.DragOver)
        
    }

    ngAfterViewInit(): void {
        //console.log(this.element.children[0])
        //this.element = this.element.getElementsByClassName("dropzone")[0] as HTMLElement
    }

    Drop(event: DragEvent){
        console.log("Dropped", this.contentTreeService.getNewDraggedElement(), "Into PreviewPane")
    }

    DragEnd(event: DragEvent){
   
    }

    DragEnter(event: DragEvent){
        const target = event.target as HTMLElement;
        if(target.hasAttribute("Dropzone")){
            console.log("DRAG ENTER")
            //this.element.classList.add('dropzone-active')
        }
    }

    DragLeave(event: DragEvent){
        const target = event.target as HTMLElement;
        this.element.classList.remove('dropzone-active');
    }

    DragOver(event: DragEvent){
        //@ts-ignore
        event.preventDefault()
        console.log("OVER")
        console.log(this.el.nativeElement)
        this.element.classList.add('dropzone-active');
    }

   
}