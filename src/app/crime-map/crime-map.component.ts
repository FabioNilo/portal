import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface policeOccurrences {
  lat: number;
  lng: number;
  description: string;
  cityId: number;
}

@Component({
  selector: 'app-crime-map',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './crime-map.component.html',
  styleUrl: './crime-map.component.css'
})
export class CrimeMapComponent implements OnInit {
  private map!: L.Map;
  private markers: L.Marker[] = []; 

  cities = [
    { id: 1, name: 'Ilhéus' },
    { id: 2, name: 'Salvador' },
    { id: 3, name: 'Itabuna' },
    { id: 4, name: 'Feira de Santana' }
  ];

  private policeOccurrences = [
  { lat: -14.796970, lng: -39.033757, description: 'Furto de veículo', cityId: 1 },
  { lat: -14.798624, lng: -39.032687, description: 'Assalto à mão armada', cityId: 1 },
  { lat: -14.802110, lng: -39.030123, description: 'Roubo a residência', cityId: 1 },
  { lat: -14.801000, lng: -39.033890, description: 'Tráfico de drogas', cityId: 1 },
  { lat: -12.971400, lng: -38.512400, description: 'Homicídio', cityId: 2 },
  { lat: -12.975888, lng: -38.502692, description: 'Roubo a banco', cityId: 2 },
  { lat: -12.969444, lng: -38.503333, description: 'Assalto coletivo', cityId: 2 },
  { lat: -12.963800, lng: -38.503200, description: 'Violência doméstica', cityId: 2 },
  { lat: -14.793200, lng: -39.276500, description: 'Furto de celular', cityId: 3 },
  { lat: -14.791800, lng: -39.275000, description: 'Vandalismo', cityId: 3 },
  { lat: -14.790500, lng: -39.273600, description: 'Tráfico de entorpecentes', cityId: 3 },
  { lat: -14.775206, lng: -39.262375, description: 'Agressão física', cityId: 3 },
  { lat: -12.266950, lng: -38.966900, description: 'Furto de bicicleta', cityId: 4 },
  { lat: -12.264000, lng: -38.964000, description: 'Assalto a pedestre', cityId: 4 },
  { lat: -12.265800, lng: -38.968500, description: 'Violação de propriedade', cityId: 4 },
  { lat: -12.268100, lng: -38.965300, description: 'Roubo de carga', cityId: 4 }
  ];

  private customIcon = L.icon({
    iconUrl: 'assets/marker-icon.png',
    shadowUrl: 'assets/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  ngOnInit(): void {
    this.initMap();
    this.addMarkers(); // Adicionar marcadores iniciais (todas as ocorrências)
  }

  private initMap(): void {
    this.map = L.map('map').setView([-14.798028, -39.034708], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  private clearMarkers(): void {
    this.markers.forEach(marker => {
      this.map.removeLayer(marker);
    });
    this.markers = [];
  }

  // Adicionar os marcadores com ícone personalizado
  private addMarkers(occurrences: policeOccurrences[] = this.policeOccurrences): void {
    this.clearMarkers(); // Limpar os marcadores existentes

    occurrences.forEach(occurrence => {
      const city = this.cities.find(city => city.id === occurrence.cityId);
      const popupContent = `
        <strong>${occurrence.description}</strong><br>
        Cidade: ${city ? city.name : 'Não especificada'}
      `;
      
      const marker = L.marker([occurrence.lat, occurrence.lng], { icon: this.customIcon })
        .addTo(this.map)
        .bindPopup(popupContent);

      this.markers.push(marker); // Adicionar o marcador ao array de marcadores
    });
  }

  onCitySelect(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const cityId = select.value ? parseInt(select.value) : null;

    if (cityId) {
      // Filtrar ocorrências pela cidade selecionada
      const filteredOccurrences = this.policeOccurrences.filter(
        occurrence => occurrence.cityId === cityId
      );
      
      // Adicionar apenas os marcadores filtrados
      this.addMarkers(filteredOccurrences);

      // Centralizar o mapa na primeira ocorrência da cidade
      if (filteredOccurrences.length > 0) {
        const firstOccurrence = filteredOccurrences[0];
        this.map.setView([firstOccurrence.lat, firstOccurrence.lng], 13);
      }
    } else {
      // Se "Todas as cidades" for selecionado, mostrar todas as ocorrências
      this.addMarkers();
      this.map.setView([-14.798028, -39.034708], 10);
    }
  }
}
