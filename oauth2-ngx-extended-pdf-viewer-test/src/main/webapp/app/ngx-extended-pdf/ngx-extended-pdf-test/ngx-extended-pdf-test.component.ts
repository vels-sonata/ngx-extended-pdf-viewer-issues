import { Component, OnInit } from '@angular/core';
import { KeycloakService } from '../../oauth2/KeycloakService';

@Component({
  selector: 'jhi-ngx-extended-pdf-test',
  templateUrl: './ngx-extended-pdf-test.component.html',
  styleUrls: ['./ngx-extended-pdf-test.component.scss'],
})
export class NgxExtendedPdfTestComponent implements OnInit {
  public bearerToken: string | undefined = undefined;

  constructor(private keycloakService: KeycloakService) {}

  ngOnInit(): void {
    this.bearerToken = 'Bearer ' + this.keycloakService.getToken();
  }
}
