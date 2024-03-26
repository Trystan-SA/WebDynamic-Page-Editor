import { Component, Input } from "@angular/core";
import { ElementEditor } from "../ElementEditor";

@Component({
    selector: 'app-elements-item',
    standalone: true,
    providers: [],
    templateUrl: './ElementsItem.component.html',
    styleUrl: './ElementsItem.component.scss'
})
export class ElementsItemComponent {
    @Input({required: true}) item !: [string, ElementEditor];
}