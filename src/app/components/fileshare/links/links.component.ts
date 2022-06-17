import { Component, OnInit } from '@angular/core';
import { Link } from '../../../types/Link';
import { AuthCookieService } from '../../../services/auth-cookie.service';
import { LinkService } from '../../../services/link.service';
import { FileshareService } from '../../../services/fileshare.service';
import * as fileSaver from 'file-saver';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  links: Link[] = [];
  noFiles: boolean = false;
  fileNotFound: boolean = false;
  constructor(private authCookieService: AuthCookieService, private linkService: LinkService, private fileshareService: FileshareService) { }

  ngOnInit(): void {
    this.linkService.RetrieveAllLinks().subscribe((data: Link[]) =>  {
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
    }, 
    (error: HttpErrorResponse) => {
      if (error.status == 404) {
        this.noFiles = !this.noFiles;
      }
    });
  }

  downloadFile(link: Link): void {
    this.fileshareService.DownloadFile(link.fileName).subscribe((data: any) => {
      let blob:any = new Blob([data], { type: `${data}; charset=utf-8'` });
      fileSaver.saveAs(blob, undefined);
      const linkIndex = this.links.indexOf(link);
      this.links.splice(linkIndex, 1);
    },
    (error: HttpErrorResponse) => {
      if (error.status == 404) {
        this.fileNotFound = !this.fileNotFound;
      }
    });
  }

  logout(): void {
    this.authCookieService.RemoveAuthCookies();
  }
}
