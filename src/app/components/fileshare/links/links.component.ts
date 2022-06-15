import { Component, OnInit } from '@angular/core';
import { Link } from '../../../types/Link';
import { AuthCookieService } from '../../../services/auth-cookie.service';
import { LinkService } from '../../../services/link.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  links: Link[] = [];
  constructor(private authCookieService: AuthCookieService, private LinkService: LinkService) { }

  ngOnInit(): void {
    this.LinkService.RetrieveAllLinks().subscribe((data: Link[]) =>  {
      data.forEach(element => {
        let link: Link = {
          address: element.address, 
          allowedDownloads: element.allowedDownloads,
          fileName: element.fileName,
          id: element.id,
          receiverID: element.receiverID,
          senderID: element.senderID
        };
        this.links.push(link);
      });
    });

  }

  Logout() {
    this.authCookieService.RemoveAuthCookies();
  }

}
