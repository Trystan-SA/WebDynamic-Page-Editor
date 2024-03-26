import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { InspectorComponent } from './inspector/inspector.component';
import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';
import { EditorPanelComponent } from './editor-panel/editor.component';
import { AngularSplitModule, ISplitDirection } from 'angular-split'

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [
        TopMenuComponent, 
        ExplorerComponent, 
        InspectorComponent, 
        BottomMenuComponent, 
        EditorPanelComponent,
        AngularSplitModule
    ],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss'
})
export class LayoutComponent {
    public direction: ISplitDirection = 'horizontal'
    collapseArea(index: number, areaToCollapseDirection: 'before' | 'after'){}
}
