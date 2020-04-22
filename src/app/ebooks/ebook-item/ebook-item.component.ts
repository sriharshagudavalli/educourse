import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-ebook-item',
  templateUrl: './ebook-item.component.html',
  styleUrls: ['./ebook-item.component.css']
})
export class EbookItemComponent implements OnInit {
  ks=[{color:'Red'},{color:'Blue-Grey'},{color:'Pink'},{color:'Purple'},{color:'Deep-Purple'},{color:'Indigo'},{color:'Blue'},{color:'Light-Blue'},{color:'Cyan'},{color:'Teal'},{color:'Green'},{color:'Light-Green'},{color:'Lime'},{color:'Yellow'},{color:'Amber'},{color:'Orange'},{color:'Deep-Orange'},{color:'Brown'},{color:'Grey'},{color:'Blue-Grey'}];
  constructor() { }

  ngOnInit(): void {
    $(function() {
      $('.material-card > .mc-btn-action').click(function () {
          var card = $(this).parent('.material-card');
          var icon = $(this).children('i');
          icon.addClass('fa-spin-fast');

          if (card.hasClass('mc-active')) {
              card.removeClass('mc-active');

              window.setTimeout(function() {
                  icon
                      .removeClass('fa-arrow-left')
                      .removeClass('fa-spin-fast')
                      .addClass('fa-bars');

              }, 100);
          } else {
              card.addClass('mc-active');

              window.setTimeout(function() {
                  icon
                      .removeClass('fa-bars')
                      .removeClass('fa-spin-fast')
                      .addClass('fa-arrow-left');

              }, 100);
          }
      });
  });
  }

}
