LAMITAF AUTOS WEBSITE
=====================

PAGES
- index.html       Home
- cars.html        Vehicle showcase with live search/filter
- about.html       About the dealership and simplified DOM structure
- services.html    Service information
- inquiries.html   Enquiry and inspection booking form
- contact.html     Contact information

SHARED FILES
- style.css        External CSS used by every page
- script.js        Mobile navigation, dynamic year, car filtering and form behaviour
- assets/logo.svg  Custom LAMITAF AUTOS logo
- assets/honda-civic.jpg and assets/mercedes-benz.jpg  Your uploaded car photos

HOW TO PREVIEW
1. Extract the ZIP file.
2. Open the folder in VS Code (or another code editor).
3. Open index.html in a browser. For a local development server, use VS Code Live Server.
4. All six pages share the same navigation, announcement marquee and footer.

IMPORTANT BEFORE PUBLISHING
- The website contact details are set to 07086607371 and lamitafautos000@gmail.com. Update them if the business contact details change.
- The form is front-end only. It prepares a WhatsApp message; it does not store submissions or automatically confirm bookings.
- Vehicle listings are illustrative. Confirm and enter actual stock, model years, prices, specifications and availability.
- Add your official showroom address, social media links, policies and real appointment availability.
- The CSS imports Google Fonts; if the visitor is offline, fallback fonts are used.

DOM STRUCTURE
document
└── html
    ├── head (metadata, title, style.css)
    └── body
        ├── header (brand logo and navigation)
        ├── div.ticker (marquee announcement)
        ├── main (page-specific content)
        ├── footer (quick links and contact information)
        └── script.js (interactive JavaScript)
