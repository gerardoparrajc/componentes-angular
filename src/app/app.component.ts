import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy  {
  title = 'componentes';

  constructor() {
    console.log('Constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges', changes);
  }

  ngOnInit(): void {
    console.log('OnInit');
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');
  }

}
