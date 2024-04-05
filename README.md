<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parking Finder</title>
    <style>
        /* Stiluri CSS */
        body {
            font-family: Arial, sans-serif;
            color: #fff;
            background-color: #000;
            padding: 20px;
        }
        h1 {
            color: #ffd700;
            text-align: center;
        }
        p {
            margin-bottom: 20px;
            line-height: 1.6;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
        }
        img {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0 auto;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to Parking Finder</h1>
        <p>
            Parking Finder is a web application developed using HTML, CSS, and JavaScript. It is designed to help users find parking spaces near their location.
        </p>
        <p>
            Our application locates the nearest parking lots with available spaces, making it easier for users to park their vehicles. It provides information about parking facilities including the number of parking spaces, spaces for disabled persons, charging stations, visitor parking spaces, and bicycle parking spaces.
        </p>
        <p>
            Users can simply visit the website, and the app will automatically detect their location (geolocation API) and display the nearest parking options. They can also reload the location if needed.
        </p>
        <img src="website_preview.png" alt="Website Preview">
        <p>
            Parking Finder can be further improved by adding additional features such as real-time parking availability, integration with navigation apps, and user reviews for parking facilities. Feedback from users can help identify areas for enhancement and refinement.
        </p>
        <p>
            Try out Parking Finder today and say goodbye to parking woes!
        </p>
    </div>
</body>
</html>
