import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo', //#id.class, tarname( Sử dụng selector như tag name của component )
  templateUrl: './demo.component.html', // nơi hiện thị nội dung của component ( giống hàm render )
  styleUrls: ['./demo.component.scss'] // phần css của component này ( component # sử dụng kg dc )
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

