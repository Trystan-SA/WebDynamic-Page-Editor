import { Component, Input, inject } from "@angular/core";
import { ElementEditor } from "../ElementEditor";
import { ContentTreeService } from "../ContentTree.service";

/** Elements showing in the Explorer Elements Picker */
@Component({
    selector: 'app-elements-item',
    standalone: true,
    templateUrl: './ElementsItem.component.html',
    styleUrl: './ElementsItem.component.scss',
})
export class ElementsItemComponent {
    @Input({required: true}) item !: [string, ElementEditor];

    private contentTreeService = inject(ContentTreeService);

    onDragStart(event: DragEvent){
        //@ts-ignore
        this.contentTreeService.setNewDraggedElement(event.target.id)
    }

    onDragEnd(){
        //this.contentTreeService.setNewDraggedElement('EMPTY'); 
    }

}