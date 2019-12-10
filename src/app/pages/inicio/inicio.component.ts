import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  slides = [
    {
      img: 'slider-1',
      text: 'Ayudas Económicas',
      link: 'turno',
      button: 'solicitar ya!',
      tag: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.< br >Quis quos officiis numquam!'
    },
    {
      img: 'slider-2', text: 'Subsidios',
      link: 'turno',
      button: 'Solicitar',
      tag: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. < br >Quis quos officiis numquam!'
    },
    {
      img: 'slider-3', text: 'Asesoramiento legal y contable',
      link: 'servicios',
      button: 'Servicios',
      tag: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. < br >Quis quos officiis numquam!' }
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000
  };

  services = [
    {
      img: 'assets/images/gallery/1.jpg',
      comercio: 'Comercio 1',
      link: 'comercios',
      rubro: 'Rubro 1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.< br >Quis quos officiis numquam!'
    },
    {
      img: 'assets/images/gallery/2.jpg',
      comercio: 'Comercio 2',
      link: 'comercios',
      rubro: 'Rubro 2',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.< br >Quis quos officiis numquam!'
    },
    {
      img: 'assets/images/gallery/3.jpg',
      comercio: 'Comercio 3',
      link: 'comercios',
      rubro: 'Rubro 3',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.< br >Quis quos officiis numquam!'
    },
    {
      img: 'assets/images/gallery/1.jpg',
      comercio: 'Comercio 4',
      link: 'comercios',
      rubro: 'Rubro 4',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.< br >Quis quos officiis numquam!'
    },
    {
      img: 'assets/images/gallery/2.jpg',
      comercio: 'Comercio 5',
      link: 'comercios',
      rubro: 'Rubro 5',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.< br >Quis quos officiis numquam!'
    },
    {
      img: 'assets/images/gallery/3.jpg',
      comercio: 'Comercio 6',
      link: 'comercios',
      rubro: 'Rubro 6',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.< br >Quis quos officiis numquam!'
    }
  ];

  serviceConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: '<div class=\'nav-btn next-slide\'></div>',
    // prevArrow: '<div class=\'nav-btn prev-slide\'></div>',
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000
  };
  ngOnInit() {
  }

  addSlide() {
    // tslint:disable-next-line: comment-format
    //this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

}
