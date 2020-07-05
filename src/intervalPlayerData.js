import {
  JawsTheme,
  PinkPanther,
  IsntSheLovely,
  DvorakNewWorldSymphony,
  ForElise,
  EntreDosAguas,
  JurassicPark,
  FallingSlowly,
  NutCrackerMarche,
  SilentHill,
  CanonInD,
  EightDaysAWeek,
  WillyKetzerQuartet,
  SummerTime,
  SwingLowSweetChariot,
  SymphonyNo5,
  NobodyKnowsTheTrouble,
  OverThereRemembering,
  ILoveYou,
  CanYouFeelTheLoveTonight,
  GriegOp46,
  HeyJude,
  StarSpangledBanner,
  CallMeMaybe,
  LoveStory,
  SeiDuMeinTrost,
  AnAmericanInParis,
  NoneButTheLonelyHeart,
  Acapulco,
  WillowWeepForMe,
  BornFree,
  EineKleinNachtmusik,
  GeorgeOfTheJungle,
  BachMinuetInG,
  GameOfThronesTheme,
  SwanLake,
  LaDanseMacabre,
  Rush,
  BeverlyHillCop,
  BrahamsLullaby,
  OCanada,
  SpiderManTheme,
  ShesAWoman,
  TheEntertainer,
  TheLonelyManHulk,
  SomewhereWestsideStoryMinor7th,
  SingingInTheRain,
  TheSoundOfMusic,
  AmazingGrace,
  BridalChorus,
  LoveMeTender,
  CelloPrelude,
  StarWars,
  SupermanTheme,
  AntonioVivaldi,
  MorningHasBroken,
  OhWhenTheSaints,
  TheSimpsons,
  WestSideStoryTritone,
  Nocturne,
  NBCChimes,
  DontKnowWhy
} from "./songs";

var intervalPlayerJSON;

intervalPlayerJSON = [
  {
    intervalName: "Ascending Minor 2nd",
    songs: [
      {
        title: "Jaws",
        file: JawsTheme,
        url: "https://www.youtube.com/watch?v=A9QTSyLwd4w",
        thumbnail:
          "https://vignette.wikia.nocookie.net/jaws/images/d/da/Jaws-movie-poster.jpg/revision/latest/window-crop/width/200/x-offset/0/y-offset/0/window-width/1545/window-height/1545?cb=20131015071208"
      },
      {
        title: "Pink Panther",
        file: PinkPanther,
        url: "https://www.youtube.com/watch?v=CQw7ZhXMKNs",
        thumbnail:
          "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0019/2539/brand.gif?itok=97rSwE0a"
      },
      {
        title: "Isn't She lovely",
        file: IsntSheLovely,
        url: "https://www.youtube.com/watch?v=IVvkjuEAwgU",
        thumbnail:
          "https://cdn.shopify.com/s/files/1/0146/5968/2352/collections/20099f2922a018b82de7bb3de82fcf47_1200x1200.jpg?v=1562177917"
      },
      {
        title: "Dvorak New World",
        file: DvorakNewWorldSymphony,
        url: "https://www.youtube.com/watch?v=vHqtJH2f1Yk",
        thumbnail:
          "https://www.vpr.net/uploads/photos/original/antonin_dvorak.jpg"
      }
    ]
  },
  {
    intervalName: "Descending Minor 2nd",
    songs: [
      {
        title: "Für Elise",
        file: ForElise,
        url: "https://www.youtube.com/watch?v=_mVW8tgGY_w",
        thumbnail:
          "https://www.biography.com/.image/t_share/MTI2NTgyMzIxOTcyMjU5NDU5/beethoven-600x600jpg.jpg"
      },
      {
        title: "Jurassic Park",
        file: JurassicPark,
        url: "https://www.youtube.com/watch?v=D8zlUUrFK-M",
        thumbnail:
          "https://vignette.wikia.nocookie.net/jurassicpark/images/c/ce/JP-MoviePoster.jpg/revision/latest/window-crop/width/200/x-offset/0/y-offset/0/window-width/1007/window-height/1007?cb=20141015011537"
      },
      {
        title: "Entre Dos Aguas",
        file: EntreDosAguas,
        url: "https://www.youtube.com/watch?v=2oyhlad64-s",
        thumbnail:
          "https://i.ebayimg.com/thumbs/images/g/dEsAAOSw9j9amp6L/s-l200.jpg"
      }
    ]
  },
  {
    intervalName: "Ascending Major 2nd",
    songs: [
      {
        title: "Nutcracker Marche tchaikovsky",
        file: NutCrackerMarche,
        url: "https://www.youtube.com/watch?v=h1j5IxOPXdY&t=24s",
        thumbnail:
          "https://www.biography.com/.image/t_share/MTE5NTU2MzE2Mzg0OTUzODY3/piotr-ilyich-tchaikovsky-9503375-1-402.jpg"
      },
      {
        title: "Falling Slowly",
        file: FallingSlowly,
        url: "https://www.youtube.com/watch?v=k8mtXwtapX4",
        thumbnail:
          "https://www.irishtimes.com/polopoly_fs/1.2033289.1418246216!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg"
      },

      {
        title: "Silent Night",
        file: SilentHill,
        url: "https://www.youtube.com/watch?v=UNpiQwgStNA",
        thumbnail:
          "https://mainlypiano.com/new_site/images/album_reviews/matt-johnson-silent-night-single.jpg"
      }
    ]
  },
  {
    intervalName: "Descending Major 2nd",
    songs: [
      {
        title: "Willy-Ketzer-Quartet ft. Roberta Gambarini",
        file: WillyKetzerQuartet,
        url: "https://www.youtube.com/watch?v=gbZeEGRj-JY#t=58s",
        thumbnail:
          "https://inandout-records.com/wp-content/uploads/2018/04/7046_front.jpg"
      },
      {
        title: "Canon In D",
        file: CanonInD,
        url: "https://www.youtube.com/watch?v=Ptk_1Dc2iPY",
        thumbnail:
          "https://assets.classicfm.com/2019/20/pachelbel-canon-in-d-1558710334-list-tablet-0.jpg"
      },
      {
        title: "Eight Days A Week",
        file: EightDaysAWeek,
        url: "https://www.youtube.com/watch?v=kle2xHhRHg4",
        thumbnail:
          "https://d2s36jztkuk7aw.cloudfront.net/sites/default/files/tile/image/BeatlesForSale_1.jpg"
      }
    ]
  },
  {
    intervalName: "Ascending Minor 3rd",
    songs: [
      {
        title: "Lullaby (Brahms)",
        file: BrahamsLullaby,
        url: "https://www.youtube.com/watch?v=t894eGoymio#t=8s",
        thumbnail:
          "https://images.squarespace-cdn.com/content/v1/5995d2bc15d5dbbf68aff6cd/1583954224043-OBF2P8G117W70WZFEA9B/ke17ZwdGBToddI8pDm48kJK4Mm1kch8SFO9ZNkN1NT97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmFk_H6M1tkD9NpL7mXac0oVSXdFfjxR5AjcLwGSebOiGBsFzzcw3xKxvyC_6CFFG_/Brahms+Image.jpg"
      },
      {
        title: "Beverly Hills Cop (theme)",
        file: BeverlyHillCop,
        url: "https://www.youtube.com/watch?v=i3iW-ERh8dg#t=9s",
        thumbnail:
          "https://cdn11.bigcommerce.com/s-lj8wphc2lt/images/stencil/1280x1280/products/439/1186/BeverlyHillsCop35thAnniversary-Web__45465.1572976787.jpg?c=2&imbypass=on"
      },

      {
        title: "O Canada (Canadian National Anthem)",
        file: OCanada,
        url: "https://www.youtube.com/watch?v=zwDvF0NtgdU#t=11s",
        thumbnail: "https://m.media-amazon.com/images/I/81GZsVO4KeL._SS500_.jpg"
      },
      {
        title: "Spiderman (cartoon theme)",
        file: SpiderManTheme,
        url: "https://www.youtube.com/watch?v=SUtziaZlDeE#t=10s",
        thumbnail:
          "https://i.pinimg.com/originals/31/81/6e/31816ec134a62eafbcba4783f35d3002.jpg"
      }
    ]
  },
  {
    intervalName: "Descending Minor 3rd",
    songs: [
      {
        title:
          "Peer Gynt - Suite No. 1, Op. 46 - I. Morning Mood (Edvard Grieg)",
        file: GriegOp46,
        url: "https://www.youtube.com/watch?v=kzTQ9fjforY#t=0s",
        thumbnail:
          "https://www.seattlechambermusic.org/wp-content/uploads/Edvard-Grieg.jpg"
      },
      {
        title: "Can you feel the love tonight (Elton John)",
        file: CanYouFeelTheLoveTonight,
        url: "https://www.youtube.com/watch?v=KjgWWjkNbhU#t=48s",
        thumbnail:
          "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed561437fe4060006bbce2a%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D49%26cropX2%3D1056%26cropY1%3D73%26cropY2%3D1080"
      },

      {
        title: "Hey Jude (Beatles)",
        file: HeyJude,
        url: "https://www.youtube.com/watch?v=mQER0A0ej0M",
        thumbnail:
          "https://www.the-paulmccartney-project.com/_images/artworks/hey-jude-revolution/01_big.jpg"
      },
      {
        title: "The Star-Spangled Banner (US national anthem)",
        file: StarSpangledBanner,
        url: "https://www.youtube.com/watch?v=2qZe8aB7plU#t=0s",
        thumbnail:
          "https://americanhistory.si.edu/sites/default/files/blog_files/a/6a00e553a80e10883401901d566282970b-500wi.jpg"
      }
    ]
  },
  {
    intervalName: "Ascending Major 3rd",
    songs: [
      {
        title: "Four Seasons: Spring (Vivaldi)",
        file: AntonioVivaldi,
        url: "https://www.youtube.com/watch?v=RnwuF-MCRuo#t=0s",
        thumbnail:
          "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzE0MzMwNjM4/antonio-lucio-vivaldi-9519560-1-402.jpg"
      },
      {
        title: "Morning has broken",
        file: MorningHasBroken,
        url: "https://www.youtube.com/watch?v=WfBOrtK1sx4#t=15s",
        thumbnail: "https://i.ytimg.com/vi/26pDbgIZIxg/hqdefault.jpg"
      },
      {
        title: "Oh, when the Saints",
        file: OhWhenTheSaints,
        url: "https://www.youtube.com/watch?v=UREnLVrHv4A#t=27s",
        thumbnail: "https://m.media-amazon.com/images/I/715-QkhasmL._SS500_.jpg"
      }
    ]
  },
  {
    intervalName: "Descending Major 3rd",
    songs: [
      {
        title: "Swing Low Sweet Chariot",
        file: SwingLowSweetChariot,
        url: "https://www.youtube.com/watch?v=Thz1zDAytzU#t=5s",
        thumbnail:
          "https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Eric_Clapton_Swing_Low_Sweet_Chariot.jpg/220px-Eric_Clapton_Swing_Low_Sweet_Chariot.jpg"
      },
      {
        title: "Summertime (Gershwin)",
        file: SummerTime,
        url: "https://www.youtube.com/watch?v=UrBCOEjnBP8#t=13s",
        thumbnail:
          "https://kristihillmusic.com/wp-content/uploads/2017/08/Finlandia-2.png"
      },

      {
        title: "Fate- Symphoni No.5 (Beethoven)",
        file: SymphonyNo5,
        url: "https://www.youtube.com/watch?v=mibyHDxLey0",
        thumbnail:
          "https://www.biography.com/.image/t_share/MTI2NTgyMzIxOTcyMjU5NDU5/beethoven-600x600jpg.jpg"
      }
    ]
  },
  {
    intervalName: "Ascending Perfect 4th",
    songs: [
      {
        title: "Love me Tender (Elvis Presley)",
        file: LoveMeTender,
        url: "https://www.youtube.com/watch?v=2lD711_Xh8s#t=5s",
        thumbnail:
          "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNjYxMTgwOTQy/elvis-presley-9446466-1-402.jpg"
      },
      {
        title: "Here comes the Bride - Wedding March (Wagner)",
        file: BridalChorus,
        url: "https://www.youtube.com/watch?v=oBt6Myv75jk#t=30s",
        thumbnail:
          "https://medicitv-c.imgix.net/artist/richard-wagner_tFYDx2R.jpg?auto=format&q=85"
      },
      {
        title: "Amazing Grace",
        file: AmazingGrace,
        url: "https://www.youtube.com/watch?v=MS93Q4jQAO0#t=10s",
        thumbnail:
          "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTMyMjQwMjkwOTY1NjU4MDc4/amazing-grace-v1jpg.jpg"
      }
    ]
  },
  {
    intervalName: "Descending Perfect 4th",
    songs: [
      {
        title: "Eine Kleine Nachtmusik (Mozart)",
        file: EineKleinNachtmusik,
        url: "https://www.youtube.com/watch?v=Qb_jQBgzU-I#t=28s",
        thumbnail:
          "https://www.biography.com/.image/t_share/MTE1ODA0OTcxNzMyNjY1ODY5/wolfgang-mozart-9417115-2-402.jpg"
      },
      {
        title: "Born Free (Movie theme by John Barry)",
        file: BornFree,
        url: "https://www.youtube.com/watch?v=ISWOrI0WaLs#t=26s",
        thumbnail:
          "https://moviemusicuk.files.wordpress.com/2016/02/bornfree.jpg?w=584"
      },

      {
        title: "George of the Jungle theme",
        file: GeorgeOfTheJungle,
        url: "https://www.youtube.com/watch?v=0csGHvZfyMM#t=5s",
        thumbnail:
          "https://yt3.ggpht.com/a/AGF-l7_o5qPbmm0KukULpun3HkEWQq9b00yMBxNUhA=s900-c-k-c0xffffffff-no-rj-mo"
      }
    ]
  },
  {
    intervalName: "Ascending Tritone",
    songs: [
      {
        title: "The Simpsons",
        file: TheSimpsons,
        url: "https://www.youtube.com/watch?v=Xqog63KOANc#t=2s",
        thumbnail:
          "https://pyxis.nymag.com/v1/imgs/b2d/cca/7ef3d90ffe90465f8c9b16448382185286-02-simpsons-couch.rsquare.w700.jpg"
      },
      {
        title: "Maria (West Side Story)",
        file: WestSideStoryTritone,
        url: "https://www.youtube.com/watch?v=DyofWTw0bqY#t=32s",
        thumbnail:
          "https://stagea.blob.core.windows.net/images/show/993/west-side-story-qwctdjqi.koc.jpg"
      }
    ]
  },
  {
    intervalName: "Descending Tritone",
    songs: [
      {
        title: "Danse Macabre (Saint-Saëns)",
        file: LaDanseMacabre,
        url: "https://www.youtube.com/watch?v=71fZhMXlGT4#t=29s",
        thumbnail:
          "https://interlude-cdn-blob-prod.azureedge.net/interlude-blob-storage-prod/2018/10/Saint-Sae%CC%88ns-300x300.jpg"
      },
      {
        title: "YYZ (Rush)",
        file: Rush,
        url: "https://www.youtube.com/watch?v=_mR0tzt9XaM#t=9s",
        thumbnail:
          "https://upload.wikimedia.org/wikipedia/en/4/4a/Moving_Pictures.jpg"
      }
    ]
  },
  {
    intervalName: "Ascending Perfect 5th",
    songs: [
      {
        title: "Bach: Cello Suite No.1-Prelude",
        file: CelloPrelude,
        url: "https://www.youtube.com/watch?v=1prweT95Mo0#t=9s",
        thumbnail:
          "https://interlude-cdn-blob-prod.azureedge.net/interlude-blob-storage-prod/2014/11/bachglasses2-square.jpg"
      },
      {
        title: "Star Wars (main theme)",
        file: StarWars,
        url: "https://www.youtube.com/watch?v=C2wcqRWbdHs#t=9s",
        thumbnail:
          "https://vignette.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest/window-crop/width/200/x-offset/337/y-offset/0/window-width/865/window-height/864?cb=20190313021755"
      },
      {
        title: "Superman",
        file: SupermanTheme,
        url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR017wAcrB7M3xMh_CM0R3cIj4MkWXGENVmFQ&usqp=CAU",
        thumbnail: "https://www.youtube.com/watch?v=e9vrfEoc8_g#t=43s"
      }
    ]
  },
  {
    intervalName: "Descending Perfect 5th",
    songs: [
      {
        title: "Game of Thrones (Main theme)",
        file: GameOfThronesTheme,
        url: "https://www.youtube.com/watch?v=s7L2PVdrb_8#t=9s",
        thumbnail:
          "https://is1-ssl.mzstatic.com/image/thumb/Video49/v4/73/96/43/73964323-87cf-8d7e-7803-bd71f2354575/mzl.oqysqflm.lsr/268x0w.png"
      },
      {
        title: "Minuet In G",
        file: BachMinuetInG,
        url: "https://www.youtube.com/watch?v=p1gGxpitLO8#t=3s",
        thumbnail:
          "https://interlude-cdn-blob-prod.azureedge.net/interlude-blob-storage-prod/2014/11/bachglasses2-square.jpg"
      },
      {
        title: "Swan Lake Suite (Op.20) - Scene (Tchaikovsky)",
        file: SwanLake,
        url: "https://www.youtube.com/watch?v=wEgOM9iYETg#t=7s",
        thumbnail:
          "https://www.biography.com/.image/t_share/MTE5NTU2MzE2Mzg0OTUzODY3/piotr-ilyich-tchaikovsky-9503375-1-402.jpg"
      }
    ]
  },
  {
    intervalName: "Ascending Minor 6th",
    songs: [
      {
        title: "She's a Woman (Beatles)",
        file: ShesAWoman,
        url: "https://www.youtube.com/watch?v=lQomFaLyQ5I#t=10s",
        thumbnail:
          "https://d2s36jztkuk7aw.cloudfront.net/sites/default/files/tile/image/BeatlesForSale_1.jpg"
      },
      {
        title: "The Entertainer (Scott Joplin)",
        file: TheEntertainer,
        url: "https://www.youtube.com/watch?v=fPmruHc4S9Q#t=6s",
        thumbnail:
          "https://www.biography.com/.image/t_share/MTE5NTU2MzE2MjY3NDQ3ODE5/scott-joplin-9357953-1-402.jpg"
      },
      {
        title: "Lonely Man (The Incredible Hulk)",
        file: TheLonelyManHulk,
        url: "https://www.youtube.com/watch?v=4RFEt7cGWzc#t=14s",
        thumbnail:
          "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-the-incredible-hulk-ed-norton-2.jpg"
      }
    ]
  },
  {
    intervalName: "Descending Minor 6th",
    songs: [
      {
        title: "Call Me Maybe (Carly Rae Jepsen)",
        file: CallMeMaybe,
        url: "https://www.youtube.com/watch?v=n0XguJCwIVc#t=35s",
        thumbnail:
          "https://pbs.twimg.com/profile_images/1224420174440402945/DlRC4QSH_400x400.jpg"
      },
      {
        title: "Love Story (theme)",
        file: LoveStory,
        url: "https://www.youtube.com/watch?v=Y4cmPh2peBY#t=24s",
        thumbnail: "https://m.media-amazon.com/images/I/71Ar-CiwsZL._SS500_.jpg"
      },
      {
        title: "Sei Du Mein Frost K.391 (Mozart)",
        file: SeiDuMeinTrost,
        url: "https://www.youtube.com/watch?v=0-jzs-1Zv8M#t=4s",
        thumbnail:
          "https://www.biography.com/.image/t_share/MTE1ODA0OTcxNzMyNjY1ODY5/wolfgang-mozart-9417115-2-402.jpg"
      }
    ]
  },
  {
    intervalName: "Ascending Major 6th",
    songs: [
      {
        title: "Nocturne Op.9 No.2 (Chopin)",
        file: Nocturne,
        url: "https://www.youtube.com/watch?v=kj3CHx3TDzw#t=0s",
        thumbnail:
          "https://i.scdn.co/image/4b0c24c13779dc8dcbdc3140f567d5866d92dc0c"
      },
      {
        title: "NBC Chimes",
        file: NBCChimes,
        url: "https://www.youtube.com/watch?v=fnWfNZc0EtY#t=0s",
        thumbnail:
          "https://www.nbcuniversal.com/_flysystem/s3-flysystem/2019-07/brands_nbc_ent_clr.png"
      }
    ]
  },
  {
    intervalName: "Descending Major 6th",
    songs: [
      {
        title: "Over There (George Cohan)",
        file: OverThereRemembering,
        url: "https://www.youtube.com/watch?v=wbggEGUaE28#t=66s",
        thumbnail:
          "https://img.discogs.com/8624YTn2t4huG_Hnc-Rk9Z9ZA6s=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6930118-1429749833-5922.jpeg.jpg"
      },
      {
        title: "Nobody Knows The Trouble I've Seen",
        file: NobodyKnowsTheTrouble,
        url: "https://www.youtube.com/watch?v=AL3lPVA8QKQ#t=29s",
        thumbnail:
          "https://img.discogs.com/mnQfj1rkJ3GlsUIeuj9APRlazZE=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-4846256-1386670587-4325.jpeg.jpg"
      }
    ]
  },
  {
    intervalName: "Ascending Minor 7th",
    songs: [
      {
        title: "Somewhere (West Side Story)",
        file: SomewhereWestsideStoryMinor7th,
        url: "https://www.youtube.com/watch?v=HtO2iC0KIQ8#t=67s",
        thumbnail:
          "https://stagea.blob.core.windows.net/images/show/993/west-side-story-qwctdjqi.koc.jpg"
      }
    ]
  },
  {
    intervalName: "Descending Minor 7th",
    songs: [
      {
        title: "An American In Paris (Gershwin)",
        file: AnAmericanInParis,
        url: "https://www.youtube.com/watch?v=MWzlivSzpJM#t=0s",
        thumbnail:
          "https://cdn.smehost.net/masterworksbroadwaycom-45pressprod/wp-content/uploads/2015/04/16173959/AAIN_cov_FINAL1.jpg"
      },
      {
        title: "None But The Lonely Heart (Tchaikovsky)",
        file: NoneButTheLonelyHeart,
        url: "https://www.youtube.com/watch?v=5HEQqtoAwjY#t=22s",
        thumbnail:
          "https://www.biography.com/.image/t_share/MTE5NTU2MzE2Mzg0OTUzODY3/piotr-ilyich-tchaikovsky-9503375-1-402.jpg"
      }
    ]
  },
  {
    intervalName: "Ascending Major 7th",
    songs: [
      {
        title: "Don't Know Why (Norah Jones)",
        file: DontKnowWhy,
        url: "https://www.youtube.com/watch?v=tO4dxvguQDk#t=10s",
        thumbnail:
          "https://img.discogs.com/rI8yVZh7Vn8cwJQsrSJkoimCi1I=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-147031-1591695155-2704.jpeg.jpg"
      }
    ]
  },
  {
    intervalName: "Descending Major 7th",
    songs: [
      {
        title: "I Love You (Cole Porter)",
        file: ILoveYou,
        url: "https://www.youtube.com/watch?v=WuLmjCNl44Q#t=11s",
        thumbnail:
          "https://www.biography.com/.image/t_share/MTE5NDg0MDU1MTAzMzA5MzI3/cole-porter-9444679-1-402.jpg"
      }
    ]
  },
  {
    intervalName: "Ascending Octave",
    songs: [
      {
        title: "Singin' in the Rain",
        file: SingingInTheRain,
        url: "https://www.youtube.com/watch?v=D1ZYhVpdXbQ#t=66s",
        thumbnail:
          "https://www.londonboxoffice.co.uk/images/shows/square-poster/resized/250x250/6310-1564139810-sitrsq260719.jpg"
      },
      {
        title: "the Lonely Goatherd (The Sound Of Music)",
        file: TheSoundOfMusic,
        url: "https://www.youtube.com/watch?v=gRo0NlLYvwE#t=14s",
        thumbnail:
          "https://i.guim.co.uk/img/media/444de872dcc5854bc6d728f164cff4489a15d401/285_1186_2552_1531/master/2552.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=bf5a268cbf62faed4d072774716bb939"
      }
    ]
  },
  {
    intervalName: "Descending Octave",
    songs: [
      {
        title: "Acapulco 1922 (Herb alpert)",
        file: Acapulco,
        url: "https://www.youtube.com/watch?v=mpI7EjUOkvg#t=14s",
        thumbnail: "https://m.media-amazon.com/images/I/81sfEOvcWfL._SS500_.jpg"
      },
      {
        title: "Willow Weep For Me",
        file: WillowWeepForMe,
        url: "https://www.youtube.com/watch?v=9KyIEe1B450#t=73s",
        thumbnail:
          "https://img.discogs.com/ABqci71nau82i-MNLHUpok6kQjM=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-810268-1324297111.jpeg.jpg"
      }
    ]
  }
];

export default intervalPlayerJSON;
