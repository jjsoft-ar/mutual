import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  constructor() { }
  services = [
    {
      img: 'assets/images/gallery/1.jpg',
      servicio: 'Ayudas económicas',
      link: 'servicios',
      titulo: '30 minutos • Precio variable',
      // tslint:disable-next-line: max-line-length
      text: 'Para turismo, bienes y servicios, personales, negocios y comercios, empleados de industrias y comercios, empleados públicos activos provinciales y de consumo.'
    },
    {
      img: 'assets/images/gallery/2.jpg',
      servicio: 'Asesoramiento legal y contable',
      link: 'servicios',
      titulo: '30 minutos • Precio variable',
      text: 'Para comercios, empresas e instituciones'
    },
    {
      img: 'assets/images/gallery/3.jpg',
      servicio: 'Subsidios',
      link: 'servicios',
      titulo: '30 minutos • Precio variable',
      // tslint:disable-next-line: max-line-length
      text: 'Medico a domicilio.Medico Pediatra a domicilio.Emergencias médicas.Red SIEM, cubrimos emergencias médicas y consultas domiciliarias en más de 700 localidades de Argentina, Chile, Uruguay, Brasil, Perú, Ecuador y Venezuela.'
    },
    {
      img: 'assets/images/gallery/1.jpg',
      servicio: 'Otros beneficios',
      link: 'servicios',
      titulo: '30 minutos • Precio variable',
      text: '- Correo Postal OCA.- Traslados programados. Ofertas mensuales y financiadas.- Bolsón de alimentos no perecederos.'
    },
    {
      img: 'assets/images/gallery/2.jpg',
      servicio: 'Comercio 5',
      link: 'servicios',
      title: 'titulo 5',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.< br >Quis quos officiis numquam!'
    },
    {
      img: 'assets/images/gallery/3.jpg',
      servicio: 'Comercio 6',
      link: 'servicios',
      titulo: 'titulo 6',
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

}
