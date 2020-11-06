var map;
  var el = $('#map');

    function enableScrollingWithMouseWheel() {
        map.setOptions({ scrollwheel: true });
    }

    function disableScrollingWithMouseWheel() {
        map.setOptions({ scrollwheel: false });
    }

  function initMap() {
   var eonplan = {lat: 45.840517, lng: 15.917375};
    map = new google.maps.Map(el[0], {
            zoom: 13,
            center: eonplan,
            scrollwheel: false,
        disableDefaultUI: true,
          styles:  [
                {elementType: 'geometry', stylers: [{color: '#67819d'}]} ,
                {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.fill', stylers: [{color: '#FFFFFF'}]},
                {
                  featureType: 'administrative.locality',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#acbc37'}]
                },
                {
                  featureType: 'poi',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#d59563'}]
                },
                {
                  featureType: 'poi.park',
                  elementType: 'geometry',
                  stylers: [{color: '#778fa9'}]
                },
                {
                  featureType: 'poi.park',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#6b9a76'}]
                },
                {
                  featureType: 'road',
                  elementType: 'geometry',
                  stylers: [{color: '#e2ecf8'}]
                },
                {
                  featureType: 'road',
                  elementType: 'geometry.stroke',
                  stylers: [{color: '#acbc37'}]
                },
                {
                  featureType: 'road',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#FFFFFF'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'geometry',
                  stylers: [{color: '#acbc37'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'geometry.stroke',
                  stylers: [{color: '#acbc37'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#f3d19c'}]
                },
                {
                  featureType: 'transit',
                  elementType: 'geometry',
                  stylers: [{color: '#67819d'}]
                },
                {
                  featureType: 'transit.station',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#67819d'}]
                },
                {
                  featureType: 'water',
                  elementType: 'geometry',
                  stylers: [{color: '#778fa9'}]
                },
                {
                  featureType: 'water',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#515c6d'}]
                },
                {
                  featureType: 'water',
                  elementType: 'labels.text.stroke',
                  stylers: [{color: '#17263c'}]
                } 
          ]
        });    

     var marker = new google.maps.Marker({
          position: eonplan,
          map: map,
          title:"Eon plan d.o.o.",
          label:"E"
        });


      var contentString = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h2 id="firstHeading" class="firstHeading"><img src="http://localhost:4000/assets/images/eonplan-logo.png" /></h2>'+
          '<div id="bodyContent">'+
          '<p><b>Eon plan d.o.o.</b><br  />' +
          'Zagreb, Krvarić 26A'+
          '</div>'+
          '</div>';

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

    $('body').on('mousedown', function(event) {
        var clickedInsideMap = $(event.target).parents('#map').length > 0;

        if(!clickedInsideMap) {
            disableScrollingWithMouseWheel();
        }

    });

    google.maps.event.addListener(map, 'mousedown', function(){
        enableScrollingWithMouseWheel();
    });

    $(window).scroll(function() {
        disableScrollingWithMouseWheel();
    });  

      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });

      map.addListener('click', function() {
        infowindow.close(map, marker);
      });

  }