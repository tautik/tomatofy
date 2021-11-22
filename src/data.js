import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "Beaver Creek",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Illegal Caviar",
      cover: "https://i.scdn.co/image/ab67616d0000b2732e979029b5f9260a3e9f658d",
      artist: "Philanthrope, mommy",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27487",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Perfect Storm",
      cover: "https://i.scdn.co/image/ab67616d0000b2735ee8016d725358bfac550120",
      artist: "Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=23057",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nightfall",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reflection",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Main Samus Now",
      cover: "https://i.scdn.co/image/ab67616d0000b273949e1c9ca070c4d9759da347",
      artist: "Sleepy Fish",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24822",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Polaroid",
      cover: "https://i.scdn.co/image/ab67616d0000b273e0388f7a99ee3009d8e22128",
      artist: "Makzo,Mama Aiuto",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24767",
      color: ["#B7D1DA", "#EFC13B"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default chillHop;
