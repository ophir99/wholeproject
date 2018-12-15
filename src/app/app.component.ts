import { Component } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "project-complete";
  closeResult;
  headerIsThere;
  constructor(private bm: NgbModal, private router: Router) {
    this.router.events.subscribe(() => {
      if (this.router.url === "/") {
        this.headerIsThere = false;
      } else {
        this.headerIsThere = !false;
      }
    });
  }

  open(content) {
    this.bm.open(content, { ariaLabelledBy: "modal-basic-title" }).result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
        console.log(this.closeResult);
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        console.log(this.closeResult);
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
