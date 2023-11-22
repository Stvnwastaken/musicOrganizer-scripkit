// Name: study music

import "@johnlindquist/kit";
import "dotenv/config";

const getLofi = async () => {
  const url =
    "https://youtube-v31.p.rapidapi.com/search?channelId=UCSJ4gkVC6NrvII8umztf0Ow&part=snippet%2Cid&order=date&maxResults=50";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  return result;
};

const phonkMusic = [
  {
    title: "1 Hour of PHONK/MEMPHIS/808/COWBELL | EPISODE 4",
    link: "https://www.youtube.com/watch?v=049F3eoi98k",
    thumbnail:
      "https://i.ytimg.com/vi/049F3eoi98k/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCNMufsPOW2rwOokndn-zTvOXPHBg",
  },
  {
    title:
      "Phonk music 2023 ※ Aggressive Drift Phonk ※ Murder In My Mind / IN THE CLUB / RAVE / NEON BLADE",
    link: "https://www.youtube.com/watch?v=G2uGZ9Bt8JU&pp=ygUFcGhvbms%3D",
    thumbnail:
      "https://i.ytimg.com/vi/G2uGZ9Bt8JU/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA700NAJfTzvUyrYD9HJPQVQGOnDw",
  },
  {
    title: "Top 50 Phonk Songs - Best of Phonk",
    link: "https://www.youtube.com/watch?v=8WtRKHwVROs&t=558s&pp=ygUFcGhvbms%3D",
    thumbnail:
      "https://i.ytimg.com/vi/8WtRKHwVROs/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLConghaEXcQrI1jtz-uRt1yYqXLtQ",
  },
  {
    title: "Songs that boost you into GODMODE 🤯💎",
    link: "https://www.youtube.com/watch?v=KzKqzvBAhTs&pp=ygUQdmlkZW8gZ2FtZSBtdXNpYw%3D%3D",
    thumbnail:
      "https://i.ytimg.com/vi/KzKqzvBAhTs/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDaCEGaWqOdV7UCAkJnOjeOAYsQ-w",
  },
];
const videoGameMusic = [
  {
    title:
      "calm nintendo video game music for studying, sleep, work while it's raining",
    link: "https://www.youtube.com/watch?v=sA0qrPOMy2Y",
    thumbnail:
      "https://i.ytimg.com/vi/sA0qrPOMy2Y/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCAA4SzSrXHAQkTcCjAwXvr8s2f3A",
  },
  {
    title: "Zelda Music To Relax/Study/Work/Game",
    link: "https://www.youtube.com/watch?v=MXDF0wVcWfA&pp=ygUQdmlkZW8gZ2FtZSBtdXNpYw%3D%3D",
    thumbnail:
      "https://i.ytimg.com/vi/MXDF0wVcWfA/hqdefault.jpg?sqp=-oaymwE9COADEI4CSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Ac4GgALgA4oCDAgAEAEYNiBlKF4wDw==&rs=AOn4CLBQiBvv2JFFi4xuWslvGTSrdSYwOw",
  },
  {
    title:
      "relaxing music winter video game 2 hour (mostly nintendo) ❄️ w/ snowfall ambience",
    link: "https://www.youtube.com/watch?v=3nny-oOtMfs&pp=ygUQdmlkZW8gZ2FtZSBtdXNpYw%3D%3D",
    thumbnail:
      "https://i.ytimg.com/vi/3nny-oOtMfs/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLChthBJVnPEFVGWBNfv1d-Bw3Xs5g",
  },
];

const backgrounds = [
  {
    title:
      "Raining in Lofi City - lofi chill night [Listen to it to escape from a hard day]",
    link: "https://www.youtube.com/watch?v=xocnshwEbrM&t=2213s",
    thumbnail:
      "https://i.ytimg.com/vi/xocnshwEbrM/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCqskxBJTZ9aGwjL5eXqFSqvQoooQ",
  },
  {
    title: "a peaceful place. [lofi / jazzhop / chillhop mix]",
    link: "https://www.youtube.com/watch?v=DbuebKNKQsQ&pp=ygUWbG9maSBiYWNrZ3JvdW5kIHNjcmVlbg%3D%3D",
    thumbnail:
      "https://i.ytimg.com/vi/DbuebKNKQsQ/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAN9rQ7Pr8oI3tJgjCySaV7RTYf_Q",
  },
  {
    title: "Secret Forest 🍃 Chill Lofi Beats",
    link: "https://www.youtube.com/watch?v=NvftPSb5Xtw&pp=ygUWbG9maSBiYWNrZ3JvdW5kIHNjcmVlbg%3D%3D",
    thumbnail:
      "https://i.ytimg.com/vi/NvftPSb5Xtw/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAyxpitNM_z1cDRdi4EylJM0pnBTA",
  },
  {
    title: "3 AM Coding Session - Lofi Hip Hop Mix [Study & Coding Beats]",
    link: "https://www.youtube.com/watch?v=_ITiwPMUzho&pp=ygUWbG9maSBiYWNrZ3JvdW5kIHNjcmVlbg%3D%3D",
    thumbnail:
      "https://i.ytimg.com/vi/_ITiwPMUzho/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC_Sap_4TdYeWNwgEQni0fVLDVOPQ",
  },
];

let music = await arg("Select music genre", [
  "Lofi",
  "Phonk",
  "VideoGame",
  "Background",
]);

if (music === "Lofi") {
  const lofi = await getLofi();
  let choice = await arg(
    "Select lofi",
    lofi.items.map((item) => ({
      name: item.snippet.title,
      description: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      preview: `<img src=${item.snippet.thumbnails.high.url}>`,
    }))
  );
  open(choice.description);
} else if (music === "Phonk") {
  let choice = await arg(
    "Select Phonk",
    phonkMusic.map((phonk) => ({
      name: phonk.title,
      description: phonk.link,
      preview: `<img src=${phonk.thumbnail}>`,
    }))
  );
  open(choice.description);
} else if (music === "VideoGame") {
  let choice = await arg(
    "Select VideoGame",
    videoGameMusic.map((videoGame) => ({
      name: videoGame.title,
      description: videoGame.link,
      preview: `<img src=${videoGame.thumbnail}>`,
    }))
  );
  open(choice.description);
} else if (music === "Background") {
  let choice = await arg(
    "Select Background",
    backgrounds.map((background) => ({
      name: background.title,
      description: background.link,
      preview: `<img src=${background.thumbnail}>`,
    }))
  );
  open(choice.description);
}
