import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { UploadFile } from '../../../types/UploadFile';
import { Router } from '@angular/router';
import { FileshareService } from '../../../services/fileshare.service';
import { FileReceiver } from '../../../types/FileReciever';
import { AccountService } from '../../../services/account.service';


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
    let file = (<HTMLInputElement>event.target).files;
    if (file != null) {
      this.file = file[0];
      // console.log(file[0]);
    }
  }
  

  onSubmit(): void {

    if(this.file.size === 0){
      return;
    }

    this.disableSubmitBtn = true;
    this.hideSpinner = false;

    let newFile: UploadFile = {
      file: this.file,
      ReceiverID: this.receiverId.value,
      AllowedDownloads: this.allowedDownloads.value
    }

    console.table(newFile);

    // this.fileshareService.UploadFile(newFile).subscribe((data: any) => {
    //   this.router.navigateByUrl('links');
    // });
  }

}
