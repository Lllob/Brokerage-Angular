import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

  export class NavigationComponent implements OnInit {
    constructor(public authService: AuthService) {  }

    ngOnInit() {
      //console.log( this.authService.isAuthenticated())
    }


}
