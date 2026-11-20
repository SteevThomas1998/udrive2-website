# UDrive2 School of Motoring — Website

Single-page website for UDrive2 School of Motoring, a driving school serving Oldham and Ashton-under-Lyne.

Plain HTML/CSS/JS — no build step. Open `index.html` locally or serve the folder from any static host.

## Structure
- `index.html` — page markup, styles and scripts
- `assets/` — logo
- `img/` — photography (WebP)

## Booking form
Enquiries are sent as a JSON POST to the endpoint in `FORM_CONFIG` (near the bottom of `index.html`):

```js
const FORM_CONFIG = {
  endpoint: '',      // Formspree: https://formspree.io/f/XXXXXXXX  ·  FormSubmit: https://formsubmit.co/ajax/name@example.com
  responseTime: ''   // e.g. 'within 24 hours' — only promise what the school can keep
};
```

Until `endpoint` is set, the form prepares a text message to 07843 449 667 instead. Call and text links stay available either way.

## Publishing more content
- **Reviews:** the reviews section is built but `hidden`. Add verified reviews to `REVIEWS` in the script, remove `hidden`, add `data-road="Reviews"`, and restore the nav link.
- **Areas:** only Oldham and Ashton-under-Lyne are listed. Add confirmed towns to the list (and pins to the map).

## Accreditation logos
The trust section shows "DVSA Approved Driving Instructor" and "Pass Plus Registered Instructor" badges. To show the official logos, save the artwork DVSA supplies (apply at gov.uk/guidance/get-permission-to-use-dvsa-logos) as:
- `assets/dvsa-adi-logo.png`
- `assets/pass-plus-logo.png`

They appear automatically once the files exist; until then the badges show text only.

## Credits
Stock photography via [Unsplash](https://unsplash.com) (Unsplash Licence): takahiro taguchi, Hari Perisetla, Agamveer Singh, Zoltan Tasi, Ben Elliott, Holiday Extras, Stephan Mahlke, Bas Peperzak, Ian Cylkowski, Chloë Forbes-Kindlen, Patrycja Olszak, Waldemar Brandt, Alicia Christin Gerald, James Read, why kei, Andraz Lazic, William V, Jan Baborák, Mehrdad Jiryaee.
