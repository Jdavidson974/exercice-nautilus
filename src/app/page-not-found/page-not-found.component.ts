import { Component,} from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <h1 class="text-center text-danger">
      {{"Cette page n'éxiste pas" | uppercase}}
    </h1>
  `,
})
export class PageNotFoundComponent {}
