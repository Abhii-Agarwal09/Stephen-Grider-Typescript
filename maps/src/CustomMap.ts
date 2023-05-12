export interface Mappable {
  location: { lat: number; lng: number };
  infowindowContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(elementId) as HTMLElement,
      {
        zoom: 1,
        center: { lat: 0, lng: 0 },
      }
    );
  }

  // User | Company -> takes intersection of the common prop., and we can refer to only those properties. mappable.catchPhrase -> not accessible. But this can result to very big code if we introduce 10 more classes that can be mapped -> use interfaces
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: { lat: mappable.location.lat, lng: mappable.location.lng },
    });
    marker.addListener('click', () => {
      const infowindow = new google.maps.InfoWindow({
        content: mappable.infowindowContent(),
      });
      infowindow.open(this.googleMap, marker);
    });
  }
}
