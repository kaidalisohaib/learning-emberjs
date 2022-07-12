import Component from '@glimmer/component';
import ENV from 'learning-emberjs/config/environment';
const MAPBOX_API = 'https://maps.geoapify.com/v1/staticmap';

export default class MapComponent extends Component {
  get src() {
    let { lng, lat, width, height, zoom } = this.args;

    let coordinates = `center=lonlat:${lng},${lat}`;
    let dimensions = `width=${width}&height=${height}`;
    let zoomValue = `zoom=${zoom}`;
    let accessToken = `apiKey=${this.token}`;
    return `${MAPBOX_API}?${coordinates}&${dimensions}&${zoomValue}&${accessToken}`;
  }
  get token() {
    return encodeURIComponent(ENV.GEOAPIFY_API_KEY);
  }
}
