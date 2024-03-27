import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="border">
      Panier :
      <app-cart />
    </div>
    
    <app-fruits-list />
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsAppComponent {

}
