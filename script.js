document.getElementById("launchBtn").addEventListener("click", function () {
  // Configuration
  const proxyUrl =
    "https://cdn.jsdelivr.net/gh/Dazaike/study-sync@main/dashboard.html?v=3"; // Point to our custom dashboard
  const fakeTitle = "Standardized Test Prep | Mathematics";
  const fakeFavicon =
    "https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico"; // Google Docs icon

  // 1. Open a new about:blank window
  const newWin = window.open("about:blank", "_blank");

  if (newWin) {
    // 2. Prepare the injected content
    const injectedHtml = `
            <!DOCTYPE html>
            <html lang="en" style="margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden;">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${fakeTitle}</title>
                <link rel="icon" type="image/x-icon" href="${fakeFavicon}">
                <style>
                    body, html {
                        margin: 0;
                        padding: 0;
                        width: 100%;
                        height: 100%;
                        overflow: hidden;
                        background: #000;
                    }
                    iframe {
                        width: 100%;
                        height: 100%;
                        border: none;
                        display: block;
                    }
                </style>
            </head>
            <body>
                <iframe src="${proxyUrl}" allowfullscreen></iframe>
            </body>
            </html>
        `;

    // 3. Write content to the new window
    newWin.document.open();
    newWin.document.write(injectedHtml);
    newWin.document.close();

    // 4. Optional: Add a subtle confirmation or console log
    console.log("Portal launched in about:blank tab.");
  } else {
    // Handle popup blocking
    alert(
      "The portal was blocked by your browser. Please allow popups for this site to access the workstation.",
    );
  }
});
