import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
	selector: 'app-side-menu',
	templateUrl: './side-menu.component.html',
	styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

	constructor() { }

	ngOnInit() {
    this.initJquery(); // initialize jQuery
	}

	initJquery() {
		$(document).ready(function () {
			$(".sidebar-dropdown > a").click(function () {
				$(".sidebar-submenu").slideUp(200);
				if (
					$(this)
						.parent()
						.hasClass("active")
				) {
					$(".sidebar-dropdown").removeClass("active");
					$(this)
						.parent()
						.removeClass("active");
				} else {
					$(".sidebar-dropdown").removeClass("active");
					$(this)
						.next(".sidebar-submenu")
						.slideDown(200);
					$(this)
						.parent()
						.addClass("active");
				}
			});

			$("#close-sidebar").click(function () {
				$(".page-wrapper").removeClass("toggled");
			});
			$("#show-sidebar").click(function () {
				$(".page-wrapper").addClass("toggled");
			});
		});
	}

}
