import { NgModule } from '@angular/core';

import { AgendaVirtualSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [AgendaVirtualSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [AgendaVirtualSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class AgendaVirtualSharedCommonModule {}
