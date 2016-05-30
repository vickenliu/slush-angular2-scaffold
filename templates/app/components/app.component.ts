import {Component}     from '@angular/core';
declare function require(name:string);

@Component({
  selector:'my-app',
  template: require('../templates/app.component.html'),
  styles: [require('../style/app.component.css')]
})

export class AppComponent{

}
