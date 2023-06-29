import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isSidebarOpen = true;
  sidebarMode: 'side' | 'over' = 'side';
  private resizeSubscription: Subscription | undefined;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.sidebarMode = this.isSidebarOpen ? 'side' : 'over';
    if (!this.isSidebarOpen && this.isMobile()) {
      this.sidenav.close();
    } else {
      this.sidenav.open();
    }
  }

  ngAfterViewInit() {
    this.resizeSubscription = window.addEventListener('resize', () => {
      if (this.isMobile() && !this.isSidebarOpen) {
        this.sidenav.close();
      } else if (!this.isMobile() && !this.isSidebarOpen) {
        this.sidenav.open();
      }
    }) as unknown as Subscription;
  }

  ngOnDestroy(): void {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }

  isMobile() {
    return window.innerWidth <= 768;
  }

  showSidebarButton(): boolean {
    return !this.isMobile() || this.isSidebarOpen;
  }
}
