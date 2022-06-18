import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Link } from '../../../types/Link';

@Component({
  selector: 'app-link-item',
  templateUrl: './link-item.component.html',
  styleUrls: ['./link-item.component.css']
})
export class LinkItemComponent implements OnInit {
  @Input() link!: Link;
  @Output() onDownloadFile: EventEmitter<Link> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDownload(link: Link): void {
    this.onDownloadFile.emit(link);
  }

}
