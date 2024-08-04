window.onload = function() {
    var logoContainer = document.getElementById('logoContainer');
    var logos = logoContainer.querySelectorAll('.weekly-single');
    var index = 0;

    function showTwoLogos() {
        // Hide all logos
        logos.forEach(function(logo) {
            logo.style.display = 'none';
        });

        // Show the next two logos
        for (var i = index; i < index + 2; i++) {
            if (i < logos.length) {
                logos[i].style.display = 'block';
            }
        }

        // Update index for next iteration
        index = (index + 2) % logos.length;
    }

    // Show the first two logos immediately
    showTwoLogos();

    // Set interval to show next two logos after 5 seconds
    var interval = setInterval(showTwoLogos, 5000); // 5 seconds
}
