# Speak & Print

A single-page web app: press the microphone, talk, and your words become editable
text you can send straight to a printer.

No build step, no dependencies, no accounts. It is one HTML file.

## Features

- Live speech-to-text using the browser's built-in Web Speech API
- 32 languages, grouped in the dropdown: four English variants, eleven from
  the subcontinent (Hindi, Marathi, Gujarati, Punjabi, Bengali, Tamil, Telugu,
  Kannada, Malayalam, Urdu, Nepali) and seventeen others including Arabic,
  Mandarin, French, German, Japanese, Korean, Russian, Spanish and Turkish
- Automatic capital letters and full stops between sentences
- The text stays editable, so you can fix mistakes before printing
- **Print** produces a clean page: title, date and your words only, with none of
  the app's buttons on the paper
- Copy to clipboard, save as `.txt`, and clear
- Your text is kept in the browser, so closing the tab does not lose it

## Using it online

Open the deployed URL in Chrome or Edge, click **Start speaking**, and allow the
microphone when the browser asks.

## Running it locally

The microphone only works on `https://` or on `http://localhost`. Browsers
always refuse microphone access to a page opened directly from disk as a
`file:///` address, so a small local server is included.

On Windows, double-click **`Start Speak and Print.bat`**. It serves the folder
and opens your browser at <http://localhost:8765/>. Keep the console window open
while you use the app.

Any other static server works too:

    node server.js
    # or
    python -m http.server 8765

## Browser support

Speech recognition needs Chrome or Edge. Firefox and Safari do not implement the
Web Speech API for dictation, and the app will say so on load.

Recognition is performed by the browser vendor's online service, so an internet
connection is required while dictating.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The whole app — markup, styles and script |
| `server.js` | Dependency-free static server for local use |
| `Start Speak and Print.bat` | Windows one-click launcher |

## Licence

MIT
