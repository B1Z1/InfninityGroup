export default class{
    constructor(object){
        this.token = object.token;
        this.mapsettings = object.settings;
        this.markersettings = object.marker;
        this.init();
    }

    init(){
         //Map init 
         mapboxgl.accessToken = this.token;
         let map = new mapboxgl.Map({
             container: this.mapsettings.container, // container id
             style: this.mapsettings.style, // stylesheet location
             center: this.mapsettings.center, // starting position [lng, lat]
             zoom: this.mapsettings.zoom // starting zoom
         });
         let marker = this.generateMarker(map);
    }

    generateMarker(map){
        let markerHTML = document.createElement('img');
        markerHTML.src = this.markersettings.imageurl;
        markerHTML.alt = this.markersettings.alt;

        let marker = new mapboxgl.Marker(markerHTML)
            .setLngLat(this.markersettings.pos)
            .addTo(map);

        return marker;
    }

}