


var xhr = new XMLHttpRequest();
xhr.open("GET", "rockbands.json");
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var bands = JSON.parse(xhr.responseText);

        var bandDropdown = document.getElementById("band");
        var artistDropdown = document.getElementById("artist");

        // Populate bands dropdown
        bandDropdown.innerHTML = '<option value="">Select a band</option>';
        for (var bandName in bands) {
            bandDropdown.innerHTML += `<option value="${bandName}">${bandName}</option>`;
        }

        // Function to populate artists dropdown based on selected band
        bandDropdown.addEventListener("change", function() {
            var selectedBand = bandDropdown.value;
            artistDropdown.innerHTML = '<option value="">Select an artist</option>';

            if (selectedBand !== "") {
                bands[selectedBand].forEach(function(artist) {
                    artistDropdown.innerHTML += `<option value="${artist.value}">${artist.name}</option>`;
                });
            }
        });

        // Function to open artist's link when selected
        artistDropdown.addEventListener("change", function() {
            var selectedLink = artistDropdown.value;
            if (selectedLink !== "") {
                window.open(selectedLink, "_blank"); // Opens link in new tab
            }
        });
    }
};











