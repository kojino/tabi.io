      // This will let you use the .remove() function later on
      if (!('remove' in Element.prototype)) {
        Element.prototype.remove = function() {
          if (this.parentNode) {
            this.parentNode.removeChild(this);
          }
        };
      }
      var stores =
        {
          "type": "FeatureCollection",
          "features": [
            {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [
                  -77.034084142948,
                  38.909671288923
                ]
              },
              "properties": {
                "phoneFormatted": "(202) 234-7336",
                "phone": "2022347336",
                "address": "1471 P St NW",
                "city": "Washington DC",
                "country": "United States",
                "crossStreet": "at 15th St NW",
                "postalCode": "20005",
                "state": "D.C."
              }
            },
            {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [
                  -77.049766,
                  38.900772
                ]
              },
              "properties": {
                "phoneFormatted": "(202) 507-8357",
                "phone": "2025078357",
                "address": "2221 I St NW",
                "city": "Washington DC",
                "country": "United States",
                "crossStreet": "at 22nd St NW",
                "postalCode": "20037",
                "state": "D.C."
              }
            },
            {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [
                  -77.043929,
                  38.910525
                ]
              },
              "properties": {
                "phoneFormatted": "(202) 387-9338",
                "phone": "2023879338",
                "address": "1512 Connecticut Ave NW",
                "city": "Washington DC",
                "country": "United States",
                "crossStreet": "at Dupont Circle",
                "postalCode": "20036",
                "state": "D.C."
              }
            },
            {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [
                  -77.0672,
                  38.90516896
                ]
              },
              "properties": {
                "phoneFormatted": "(202) 337-9338",
                "phone": "2023379338",
                "address": "3333 M St NW",
                "city": "Washington DC",
                "country": "United States",
                "crossStreet": "at 34th St NW",
                "postalCode": "20007",
                "state": "D.C."
              }
            },
            {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [
                  -77.002583742142,
                  38.887041080933
                ]
              },
              "properties": {
                "phoneFormatted": "(202) 547-9338",
                "phone": "2025479338",
                "address": "221 Pennsylvania Ave SE",
                "city": "Washington DC",
                "country": "United States",
                "crossStreet": "btwn 2nd & 3rd Sts. SE",
                "postalCode": "20003",
                "state": "D.C."
              }
            },
            {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [
                  -76.933492720127,
                  38.99225245786
                ]
              },
              "properties": {
                "address": "8204 Baltimore Ave",
                "city": "College Park",
                "country": "United States",
                "postalCode": "20740",
                "state": "MD"
              }
            },
            {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [
                  -77.097083330154,
                  38.980979
                ]
              },
              "properties": {
                "phoneFormatted": "(301) 654-7336",
                "phone": "3016547336",
                "address": "4831 Bethesda Ave",
                "cc": "US",
                "city": "Bethesda",
                "country": "United States",
                "postalCode": "20814",
                "state": "MD"
              }
            },
            {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [
                  -77.359425054188,
                  38.958058116661
                ]
              },
              "properties": {
                "phoneFormatted": "(571) 203-0082",
                "phone": "5712030082",
                "address": "11935 Democracy Dr",
                "city": "Reston",
                "country": "United States",
                "crossStreet": "btw Explorer & Library",
                "postalCode": "20190",
                "state": "VA"
              }
            },
            {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [
                  -77.10853099823,
                  38.880100922392
                ]
              },
              "properties": {
                "phoneFormatted": "(703) 522-2016",
                "phone": "7035222016",
                "address": "4075 Wilson Blvd",
                "city": "Arlington",
                "country": "United States",
                "crossStreet": "at N Randolph St.",
                "postalCode": "22203",
                "state": "VA"
              }
            },
            {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [
                  -75.28784,
                  40.008008
                ]
              },
              "properties": {
                "phoneFormatted": "(610) 642-9400",
                "phone": "6106429400",
                "address": "68 Coulter Ave",
                "city": "Ardmore",
                "country": "United States",
                "postalCode": "19003",
                "state": "PA"
              }
            },
            {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [
                  -75.20121216774,
                  39.954030175164
                ]
              },
              "properties": {
                "phoneFormatted": "(215) 386-1365",
                "phone": "2153861365",
                "address": "3925 Walnut St",
                "city": "Philadelphia",
                "country": "United States",
                "postalCode": "19104",
                "state": "PA"
              }
            },
            {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [
                  -77.043959498405,
                  38.903883387232
                ]
              },
              "properties": {
                "phoneFormatted": "(202) 331-3355",
                "phone": "2023313355",
                "address": "1901 L St. NW",
                "city": "Washington DC",
                "country": "United States",
                "crossStreet": "at 19th St",
                "postalCode": "20036",
                "state": "D.C."
              }
            }
          ]
        };
      function buildLocationList(data) {
        // Iterate through the list of stores
        for (i = 0; i < data.features.length; i++) {
          var currentFeature = data.features[i];
          // Shorten data.feature.properties to just `prop` so we're not
          // writing this long form over and over again.
          var prop = currentFeature.properties;
          // Select the listing container in the HTML and append a div
          // with the class 'item' for each store
          var listings = document.getElementById('listings');
          var listing = listings.appendChild(document.createElement('div'));
          listing.className = 'item';
          listing.id = 'listing-' + i;

          // Create a new link with the class 'title' for each store
          // and fill it with the store address
          var link = listing.appendChild(document.createElement('a'));
          link.href = '#';
          link.className = 'title';
          link.dataPosition = i;
          link.innerHTML = prop.address;

          // Create a new div with the class 'details' for each store
          // and fill it with the city and phone number
          var details = listing.appendChild(document.createElement('div'));
          details.innerHTML = prop.city;
          if (prop.phone) {
            details.innerHTML += ' &middot; ' + prop.phoneFormatted;
          }
        }
      }

      mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWRrYy0iLCJhIjoiY2l2MGhsM2Q5MDVqYzJvcGQ5ODMzemZxaiJ9.sdo-IMgy5aHNUoqD_-C_Ww';
      var map = new mapboxgl.Map({
         container: 'map', // container id
         style: 'mapbox://styles/davidkc-/civezf9mr000m2juz3el3dr2p', //stylesheet location
         center: [-97, 40], // starting position
         zoom: 3.5 // starting zoom
      });
      map.on('load', function(e) {
        // Add the stores data as a source
        map.addSource('places', {
          type: 'geojson',
          data: stores
        });

        // Add a layer to the map with styling rules to render the source
        map.addLayer({
          id: 'locations',
          type: 'symbol',
          source: 'places',
          layout: {
            'icon-image': 'restaurant-15',
            'icon-allow-overlap': true
          }
        });
      });

      // Add an event listener for when a user clicks on the map
      map.on('click', function(e) {
        // Query all the rendered points in the view
        var features = map.queryRenderedFeatures(e.point, { layers: ['locations'] });
        if (features.length) {
          var clickedPoint = features[0];
          // 1. Fly to the point
          flyToStore(clickedPoint.geometry.coordinates);
          // 2. Close all other popups and display popup for clicked store
          createPopUp(clickedPoint);
          // 3. Highlight listing in sidebar (and remove highlight for all other listings)
          var activeItem = document.getElementsByClassName('active');
          if (activeItem[0]) {
            activeItem[0].classList.remove('active');
          }
          // Find the index of the store.features that corresponds to the clickedPoint that fired the event listener
          var selectedFeature = clickedPoint.properties.address;

          for (var i = 0; i < stores.features.length; i++) {
            if (stores.features[i].properties.address === selectedFeature) {
              selectedFeatureIndex = i;
            }
          }
          // Select the correct list item using the found index and add the active class
          var listing = document.getElementById('listing-' + selectedFeatureIndex);
          listing.classList.add('active');
        }
      });

      function flyToStore(coordinates) {
        map.flyTo({
          center: coordinates, // [longitude, latitude]
          zoom: 9
        });
      }

      function createPopUp(currentFeature) {
        var popUps = document.getElementsByClassName('mapboxgl-popup');
        // Check if there is already a popup on the map and if so, remove it
        if (popUps[0]) popUps[0].remove();

        var popup = new mapboxgl.Popup({ closeOnClick: false })
          .setLngLat(currentFeature.geometry.coordinates)
          .setHTML('<h3>Sweetgreen</h3>' +
            '<h4>' + currentFeature.properties.address + '</h4>')
          .addTo(map);
      }

      // var request = require('request'); // Call before making GET requests
      var geo = navigator.geolocation // Set up location services

      function nearestAirport(latitude, longitude) {
        var closestAirport = {
          'city' : '',
          'lat' : '',
          'long' : '',
          'airport' : '',
          'airportName' : ''
        };
        request('http://api.sandbox.amadeus.com/v1.2/airports/nearest-relevant?latitude=' + latitude + '&longitude=' + longitude + '&apikey=eQ0LUMGXplEM91Ze7Jnis2iOl46bb2WM', function (error, response, body) {
          if (!error && response.statusCode == 200) {
            // console.log(JSON.parse(body)[0])

            closestAirport.airport = JSON.parse(body)[0].airport;
            closestAirport.airportName = JSON.parse(body)[0].airport_name;
            closestAirport.city = JSON.parse(body)[0].city_name;
            closestAirport.lat = JSON.parse(body)[0].location.latitude;
            closestAirport.long = JSON.parse(body)[0].location.longitude;

            // console.log(closestAirport)

            return closestAirport
          }
        })
      }

      function getDestinations(airport, departureDate, duration, maxPrice) {
        request('http://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?origin=' + airport + '&departure_date=' + departureDate + '&duration=' + duration + '&max_price=' + maxPrice + '&apikey=eQ0LUMGXplEM91Ze7Jnis2iOl46bb2WM', function (error, response, body) {
          if (!error && response.statusCode == 200) {
            var cities = [];
            for (i = 0; i < 20; i++) {
              cities.push(JSON.parse(body).results[i].destination)
            }
            // console.log(cities)

            return cities
          }
        })
      }

      function getCoordinates(airport) {
        var destinationInfo = {
          'city' : "",
          'lat' : "",
          'long' : "",
          'airport' : ""
        };

        request('http://api.sandbox.amadeus.com/v1.2/location/' + airport + '/?apikey=eQ0LUMGXplEM91Ze7Jnis2iOl46bb2WM', function (error, response, body) {
          if (!error && response.statusCode == 200) {
            // console.log(JSON.parse(body))
            // console.log(JSON.parse(body).city.name)
            // console.log(JSON.parse(body).airports[0].name)
            // console.log(JSON.parse(body).city.location.latitude)
            // console.log(JSON.parse(body).city.location.longitude)

            destinationInfo.city = JSON.parse(body).city.name;
            destinationInfo.lat = JSON.parse(body).city.location.latitude;
            destinationInfo.long = JSON.parse(body).city.location.longitude;
            destinationInfo.airport = JSON.parse(body).airports[0].name;

            console.log(destinationInfo)

            return destinationInfo;
          }
        })
      }

      geo.getCurrentPosition(function(position) {
        flyToStore([position.coords.longitude, position.coords.latitude]);
      });

      buildLocationList(stores);
