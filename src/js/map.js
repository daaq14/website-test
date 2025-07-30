var map = L.map('map').setView([7.898023,-72.500620], 18);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        var marker = L.marker([7.898023,-72.500620]).addTo(map);

        var marker = L.marker([7.102338, -73.127116]).addTo(map);

        var marker = L.marker([4.60151,-74.07078]).addTo(map);

        function centerTo(lat, lng) {
            map.setView([lat, lng], 18);
        }