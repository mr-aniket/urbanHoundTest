// (function ($) {
// 	"use strict";

// 	$('.color-trigger').on('click', function () {
// 		$(this).parent().toggleClass('visible-palate');
// 	});

// 	$('.color-palate .colors-list .palate').on('click', function () {
// 		var newThemeColor = $(this).attr('data-theme-file');
// 		var targetCSSFile = $('link[id="theme-color-file"]');
// 		$(targetCSSFile).attr('href', newThemeColor);
// 		$('.color-palate .colors-list .palate').removeClass('active');
// 		$(this).addClass('active');

// 		let root = document.documentElement;

// 		switch (newThemeColor) {
// 			case "css/color-themes/green-theme.css":
// 				root.style.setProperty('--pt_orange', '#2ECC40');
// 				break;
// 			case "css/color-themes/blue-theme.css":
// 				root.style.setProperty('--pt_orange', '#0074D9');
// 				break;
// 			case "css/color-themes/orange-theme.css":
// 				root.style.setProperty('--pt_orange', '#ff7e00');
// 				break;
// 			case "css/color-themes/purple-theme.css":
// 				root.style.setProperty('--pt_orange', '#bb54e1');
// 				break;
// 			case "css/color-themes/teal-theme.css":
// 				root.style.setProperty('--pt_orange', '#14c599');
// 				break;
// 			case "css/color-themes/brown-theme.css":
// 				root.style.setProperty('--pt_orange', '#ab8b40');
// 				break;
// 			case "css/color-themes/redd-color.css":
// 				root.style.setProperty('--pt_orange', '#FF4136');
// 				break;
// 			default:
// 				root.style.setProperty('--pt_orange', '#e7470c');
// 		}
// 	});




// }(jQuery));

(function ($) {
    "use strict";

	// for opening the color plate box 
		$('.color-trigger').on('click', function () {
		$(this).parent().toggleClass('visible-palate');
		});

    // Automatically change the color theme at regular intervals
    let check = 0;

    const colors = [
        { color: '#2ECC40', theme: 'css/color-themes/green-theme.css' },
        { color: '#0074D9', theme: 'css/color-themes/blue-theme.css' },
        { color: '#ff7e00', theme: 'css/color-themes/orange-theme.css' },
        { color: '#bb54e1', theme: 'css/color-themes/purple-theme.css' },
        { color: '#14c599', theme: 'css/color-themes/teal-theme.css' },
        { color: '#ab8b40', theme: 'css/color-themes/brown-theme.css' },
        { color: '#FF4136', theme: 'css/color-themes/redd-color.css' },
        { color: '#e7470c', theme: 'css/color-themes/default-theme.css' } // default
    ];

    const updateTheme = () => {
        let root = document.documentElement;
        const color = colors[check];

        // Update the theme color CSS file
        const targetCSSFile = $('link[id="theme-color-file"]');
        $(targetCSSFile).attr('href', color.theme);

        // Change root CSS variable for the color
        root.style.setProperty('--pt_orange', color.color);

        check = (check + 1) % colors.length; 
    };

    
    setInterval(updateTheme, 2000);

})(jQuery);
