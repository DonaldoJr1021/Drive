import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider} from './../../providers/rest/rest';

/**
 * Generated class for the ServicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google: any;
@IonicPage()
@Component({
  selector: 'page-servicio',
  templateUrl: 'servicio.html',
})
export class ServicioPage {
 servicio: any = {
   "precio":"",
   "origen":"",
   "destino":"",
   "valoracion": "1"
  }
  @ViewChild('map') mapRef:ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public RestProvider: RestProvider) {
  }

  ionViewDidLoad() {
    this.ShowMap();
  }

  initAutocomplete() {
    var mapas = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -33.8688, lng: 151.2195},
      zoom: 13,
      mapTypeId: 'roadmap'
    });

  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  mapas.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  mapas.addListener('bounds_changed', function() {
    searchBox.setBounds(mapas.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: mapas,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    mapas.fitBounds(bounds);
  });
}
  // Solicitar(){
  //   this.RestProvider.Servicios(this.servicio).then(res =>{
  //     console.log(res)
  //   }).catch(err =>{
  //     console.log(err)
  //   })
  //   alert("Registro Exitoso!");
  //   this.navCtrl.push(LoginPage);
  // }


  ShowMap() {

    const location = new google.maps.LatLng(10.391049,-75.479424);

    const options = {
      center:location,
      zoom:10,
      streetViewControl:true,
      mapTypeId:'hybrid'
    };
    const map = new google.maps.Map(this.mapRef.nativeElement,options);
    this.addMarker(location,map);
  };

  addMarker(position,map) {
    return new google.maps.Marker({
      position,
      map
    });
  };

}
