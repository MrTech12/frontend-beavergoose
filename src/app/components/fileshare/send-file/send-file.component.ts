import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { UploadFile } from '../../../types/UploadFile';
import { Router } from '@angular/router';
import { FileshareService } from '../../../services/fileshare.service';
import { FileReceiver } from '../../../types/FileReciever';
import { AccountService } from '../../../services/account.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-send-file',
  templateUrl: './send-file.component.html',
  styleUrls: ['./send-file.component.css']
})
export class SendFileComponent implements OnInit {

  file!: Blob;
  receiverId = new FormControl('', [Validators.required]);
  allowedDownloads = new FormControl('', [Validators.required]);

  fileReceivers: FileReceiver[] = [];
  disableSubmitBtn: boolean = false;
  hideSpinner: boolean = true;
  fileTypeError: boolean = false;
  fileSizeError: boolean = false;

  constructor(private fileshareService: FileshareService, private accountService: AccountService , private router: Router) { }

  ngOnInit(): void {
    this.accountService.getAllUsers().subscribe((data: FileReceiver[]) => {
      data.forEach(element => {
        let filereceiver: FileReceiver = {
          userId: element.userId,
          userName: element.userName
        };
        this.fileReceivers.push(filereceiver);

      })
    })
  }

  onSelectFile(event: Event) {
    this.fileTypeError = false;
    this.fileSizeError = false;

    let file = (<HTMLInputElement>event.target).files;
    if (file != null) {
      if (file[0].size > 524288000) {
        this.fileSizeError = true;
      }
      else {
        this.file = file[0];
      }
    }
  }
  

  async onSubmit(): Promise<void> {

    if(this.file.size === 0){
      return;
    }

    this.disableSubmitBtn = true;
    this.hideSpinner = false;

    let fileContent:string = "";

    await this.file.text().then(text => {fileContent = text});

    let newFile: UploadFile = {
      File: this.file,
      SenderId: "",
      ReceiverId: this.receiverId.value,
      AllowedDownloads: this.allowedDownloads.value
    }

    this.fileshareService.UploadFile(newFile).subscribe((data: any) => {
      console.log(data);
      this.router.navigateByUrl('links');
    },
    (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

}
