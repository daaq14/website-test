var map = L.map('map').setView([7.898023,-72.500620], 18);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        var marker = L.marker([7.898023,-72.500620]).addTo(map);

        var marker = L.marker([7.129369,-73.115661]).addTo(map);

//        var marker = L.marker([7.086012,-73.117774]).addTo(map);