import { Component } from '@angular/core';

import { PendientesComponent } from '../pendientes/pendientes.component';
import { TerminadosComponent } from '../terminados/terminados.component';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = PendientesComponent;
  tab2Root: any = TerminadosComponent;
  tab3Root = ContactPage;

  constructor() {

  }
}
