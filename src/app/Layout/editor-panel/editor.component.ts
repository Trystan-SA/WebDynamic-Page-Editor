import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core'
import { ElementService } from '~lib/WDElements/Element.service'
import {ContentTreeService} from '~lib/WDElements/ContentTree.service'

@Component({
  selector: 'app-editor-panel',
  standalone: true,
  providers: [ElementService, ContentTreeService],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss',
})
export class EditorPanelComponent implements OnInit {
    private elementService = inject(ElementService);
    public contentTreeService = inject(ContentTreeService);
    private changeDetectorRef = inject(ChangeDetectorRef);

    ngOnInit(): void {
        //TODO - Better change detection
        this.changeDetectorRef.detach();
        setTimeout(() => {
           this.updateEditorViewport(); 
        }, 500);
    }

    updateEditorViewport(){
        this.changeDetectorRef.detectChanges()
    }
}
