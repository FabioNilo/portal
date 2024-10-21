import { Component,AfterViewInit, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-crime-map',
  standalone: true,
  imports: [],
  templateUrl: './crime-map.component.html',
  styleUrl: './crime-map.component.css'
})
export class CrimeMapComponent implements OnInit {
  private map!: L.Map;
  months = [
  { id: 1, name: 'Janeiro' },
  { id: 2, name: 'Fevereiro' },
  { id: 3, name: 'Março' },
  { id: 4, name: 'Abril' },
  { id: 5, name: 'Maio' },
  { id: 6, name: 'Junho' },
  { id: 7, name: 'Julho' },
  { id: 8, name: 'Agosto' },
  { id: 9, name: 'Setembro' },
  { id: 10, name: 'Outubro' },
  { id: 11, name: 'Novembro' },
  { id: 12, name: 'Dezembro'}

  ]

  cities = [
    {id:1, name:'Ilhéus'},
    {id:2, name:'Salvador'},
    {id:3, name:'Itabuna'},
    {id:4, name:'Feira de santana'}]

  // Defina as coordenadas das ocorrências policiais
  private policeOccurrences = [
    { lat: -23.55052, lng: -46.633308, description: 'Ocorrência 1' },
    { lat: -23.906847, lng: -43.172896, description: 'Ocorrência 2' },
    // Adicione mais ocorrências aqui
  ];

  // Ícone personalizado
  private customIcon = L.icon({
    iconUrl: 'assets/marker-icon.png', // Ícone personalizado
    shadowUrl: 'assets/marker-shadow.png', // Sombra do marcador
    iconSize: [25, 41], // Tamanho do ícone
    iconAnchor: [12, 41], // Posição do ícone em relação à coordenada
    popupAnchor: [1, -34], // Posição do popup em relação ao ícone
    shadowSize: [41, 41] // Tamanho da sombra
  });

  ngOnInit(): void {
    this.initMap();
    this.addMarkers();
  }

  
  private initMap(): void {
    this.map = L.map('map').setView([-23.55052, -46.633308], 10); // Centralizado em São Paulo

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  // Adicionar os marcadores com ícone personalizado
  private addMarkers(): void {
    this.policeOccurrences.forEach(occurrence => {
      const marker = L.marker([occurrence.lat, occurrence.lng], { icon: this.customIcon })
        .addTo(this.map)
        .bindPopup(occurrence.description);
    });
  }
}
