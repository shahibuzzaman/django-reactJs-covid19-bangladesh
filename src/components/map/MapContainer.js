import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import useSWR from 'swr';
import 'mapbox-gl/dist/mapbox-gl.css';

import './Map.css';
mapboxgl.accessToken =
  'pk.eyJ1Ijoic2hhaGlidXp6YW1hbiIsImEiOiJjazhtMjlsZGMwZTdwM2xvNHYyZWZnaW95In0.wv7TDBBzK5g_Rqwi32PWag';

function MapContainer() {
  const mapContainer = useRef(null);

  const fetcher = (url) =>
    fetch(url)
      .then((r) => r.json())
      .then((data) =>
        data.map((point, index) => ({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [point.long, point.lat],
          },
          properties: {
            id: index,
            districtName: point.districtName,
            totalCases: point.totalCases,
            casesToday: point.casesToday,
            casesYesterday: point.casesYesterday,
          },
        }))
      );

  const { data } = useSWR('http://127.0.0.1:8000/api/district/', fetcher);

  useEffect(() => {
    if (data) {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/shahibuzzaman/ck9d82lq30lqz1ipj48u3r56u',
        center: [90.1, 23.8],
        minZoom: 6.03,
      });

      map.once('load', function () {
        map.addSource('points', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: data,
          },
        });

        map.addLayer({
          id: 'circles',
          source: 'points',
          type: 'circle',
          paint: {
            'circle-opacity': 0.75,
            'circle-stroke-width': 1,
            'circle-radius': [
              'interpolate',
              ['linear'],
              ['get', 'totalCases'],
              1,
              4,
              10,
              6,
              100,
              8,
              500,
              10,
              1000,
              14,
              10000,
              16,
              50000,
              18,
              100000,
              20,
            ],
            'circle-color': 'red',
          },
        });
        const popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false,
        });
        let lastId;
        map.on('mousemove', 'circles', (e) => {
          const id = e.features[0].properties.id;

          if (id !== lastId) {
            lastId = id;

            map.getCanvas().style.cursor = 'pointer';

            const {
              districtName,
              totalCases,
              casesToday,
              casesYesterday,
            } = e.features[0].properties;
            const coordinates = e.features[0].geometry.coordinates.slice();

            const totalCasesConvert = totalCases.toLocaleString('bn');
            const casesTodayConvert = casesToday.toLocaleString('bn');
            const casesYesterdayConvert = casesYesterday.toLocaleString('bn');

            const HTML = ` <h5>${districtName}</h5>
            <hr/>
            <p > <strong> মোট আক্রান্তঃ </strong> ${totalCasesConvert} জন</p>
            <p> <strong> ২৪ ঘণ্টায় আক্রান্তঃ </strong> ${casesTodayConvert} জন</p>
            <p> <strong> গতকাল আক্রান্তঃ </strong> ${casesYesterdayConvert} জন</p>
            

                      `;

            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
              coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            popup.setLngLat(coordinates).setHTML(HTML).addTo(map);
          }
        });

        map.on('mouseleave', 'circles', function () {
          lastId = undefined;
          map.getCanvas().style.cursor = '';
          popup.remove();
        });
      });
    }
  }, [data]);

  return (
    <div>
      <div className=''></div>
      <div ref={mapContainer} className='mapContainer shadow-sm' />
    </div>
  );
}

export default MapContainer;
