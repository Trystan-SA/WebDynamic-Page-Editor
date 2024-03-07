import { Component } from '@angular/core';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { InspectorComponent } from './inspector/inspector.component';
import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';
import { EditorPanelComponent } from './editor-panel/editor.component';
import { ResizablePanelComponent } from '../../components/resizable-panel/resizable-panel.component';

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [
        TopMenuComponent, 
        ExplorerComponent, 
        InspectorComponent, 
        BottomMenuComponent, 
        EditorPanelComponent,
        ResizablePanelComponent
    ],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
