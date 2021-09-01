const fetch = require("node-fetch");
const notifier = require("node-notifier");
const NotificationCenter = notifier.NotificationCenter;
const path = require("path");
let notificationCenterNotifier = new NotificationCenter({
  withFallback: true,
});

/* ERSÄTT DETTA MED DEN KOPIERADE KODEN FRÅN TRAFIKVERKETS HEMSIDA */
/* --------------------------------- */
fetch("https://fp.trafikverket.se/boka/occasion-bundles", {
  //...
})
  /* --------------------------------- */
  .then((res) => res.json())
  .then((json) => {
    const data = json.data.bundles;
    console.dir(data);
    let date = data[0].occasions[0].date;
    notificationCenterNotifier.notify(
      {
        title: "🔥körkortstider🔥",
        message: "Närmaste tiden för uppkörning: " + date,
        sound: "Tink",
        icon: path.join(__dirname, "icon.jpg"),
        contentImage: path.join(__dirname, "icon.jpg"),
        open: "https://quizera.se", //Ändra denna till den länk du vill komma till
        timeout: 1800,
      },
      function (error, response, metadata) {
        console.log(response, metadata);
      }
    );
  });
