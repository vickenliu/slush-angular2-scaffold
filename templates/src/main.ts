import { bootstrap }      from '@angular/platform-browser-dynamic';
import { AppComponent }   from '../app/components/app.component'
import { HTTP_PROVIDERS } from "@angular/http";

bootstrap(AppComponent, [
    HTTP_PROVIDERS
]);
