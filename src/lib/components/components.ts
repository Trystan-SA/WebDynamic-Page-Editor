import {InspectorComponentConfig} from './InspectorComponentConfig'
import {ComponentRuntimeConfig} from './componentRuntimeConfig'

export class Components {
    name = undefined;
    version = undefined;

    ComponentInspectorConfig: InspectorComponentConfig = new InspectorComponentConfig();
    componentRuntimeConfig: ComponentRuntimeConfig = new ComponentRuntimeConfig();

    constructor(){}
}