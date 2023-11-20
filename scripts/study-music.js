// Name: study music

import "@johnlindquist/kit";

const getLofi = async () => {
  const url =
    "https://youtube-v31.p.rapidapi.com/search?channelId=UCSJ4gkVC6NrvII8umztf0Ow&part=snippet%2Cid&order=date&maxResults=50";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "getyourown",
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
  },
  {
    title:
      "Phonk music 2023 ※ Aggressive Drift Phonk ※ Murder In My Mind / IN THE CLUB / RAVE / NEON BLADE",
    link: "https://www.youtube.com/watch?v=G2uGZ9Bt8JU&pp=ygUFcGhvbms%3D",
  },
  {
    title: "Top 50 Phonk Songs - Best of Phonk",
    link: "https://www.youtube.com/watch?v=8WtRKHwVROs&t=558s&pp=ygUFcGhvbms%3D",
  },
  {
    title: "Songs that boost you into GODMODE 🤯💎",
    link: "https://www.youtube.com/watch?v=KzKqzvBAhTs&pp=ygUQdmlkZW8gZ2FtZSBtdXNpYw%3D%3D",
  },
];
const videoGameMusic = [
  {
    title:
      "calm nintendo video game music for studying, sleep, work while it's raining",
    link: "https://www.youtube.com/watch?v=sA0qrPOMy2Y",
  },
  {
    title: "Zelda Music To Relax/Study/Work/Game",
    link: "https://www.youtube.com/watch?v=MXDF0wVcWfA&pp=ygUQdmlkZW8gZ2FtZSBtdXNpYw%3D%3D",
  },
  {
    title:
      "relaxing music winter video game 2 hour (mostly nintendo) ❄️ w/ snowfall ambience",
    link: "https://www.youtube.com/watch?v=3nny-oOtMfs&pp=ygUQdmlkZW8gZ2FtZSBtdXNpYw%3D%3D",
  },
];

let music = await arg("Select music genre", ["Lofi", "Phonk", "VideoGame"]);

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
} else if (music === "Phonk") {
  let choice = await arg(
    "Select Phonk",
    phonkMusic.map((phonk) => ({
      name: phonk.title,
      description: phonk.link,
    }))
  );
  open(choice.link);
} else if (music === "VideoGame") {
  let choice = await arg(
    "Select VideoGame",
    videoGameMusic.map((videoGame) => ({
      name: videoGame.title,
      description: videoGame.link,
    }))
  );
  open(choice.link);
}
