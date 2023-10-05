import { MediaMatcher } from '@angular/cdk/layout';
import {ChangeDetectorRef, Component,OnDestroy, OnInit,} from '@angular/core';
// import { MenuItems } from '../../shared/menu-items/menu-items';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnDestroy, OnInit {
  color = "primary"
  menuItems: any = []
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    // public menuItems: MenuItems,
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    // this.getAllMenuList();
    }

    // getAllMenuList = () => {
    //   const groupId = sessionStorage.getItem('groupId')
    //   this._profileService.getAllMenuList({"groupId":groupId}).subscribe(
    //     (res: any) => {
    //       console.log(res);
    //       if (res["status"] === 200) {
    //         this.menuItems = res["data"]
    //         // let tablist = res["data"][0].permission
    //         // let abc;
    //         // var i;
    //         // for(i = 0; i<tablist.length; i++){
    //         //   this.menuItems = tablist[i]
    //         //   console.log(this.menuItems);

    //         // }
    //         console.log('this.menuItems');
    //         console.log(this.menuItems);
    //       } else {
    //         this.menuItems = [];
    //       }
    //     },
    //     (err) => {
    //       // this.isLoading = this.LoadingService.hideLoader();

    //       console.log(err);
    //     }
    //   );
    // };

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
