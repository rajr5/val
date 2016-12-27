export default class Config {
 	id: string;
	name: string;
  
	MODULES = [
    //"./modules/chicagoCTA",
    "./modules/clock",
    "./modules/forecastio",
    //"./modules/googleCalendar",
    "./modules/quote",
    //"./modules/uber"
  ];
 	adapters = [
    './adapters/slack',
    './adapters/twilio',
  ];
  plugins = [
    './plugins/mongo-brain',
    // './plugins/log',
    './plugins/remember',
    //'./plugins/echo',
    './plugins/deploy',
    './plugins/help',
    './plugins/frontendQuote/index',
    './plugins/goodmorning',
    './plugins/weather',
    //'../node_modules/hubot-scripts/src/scripts/ackbar.coffee',
    //'../node_modules/hubot-scripts/src/scripts/coin.coffee',
    './node_modules/hubot-scripts/src/scripts/dealwithit.coffee',
    //'../node_modules/hubot-scripts/src/scripts/go-for-it.coffee',
    //'../node_modules/hubot-scripts/src/scripts/xkcd.coffee',
 	];
  UBER_CLIENT_ID = '';
  UBER_CLIENT_SECRET = '';
  UBER_SERVER_TOKEN = '';
  UBER_APP_NAME = 'LIFE';
  LATITUDE = 41.0000;
  LONGITUDE = -87.0000;
  CTA_TRAIN_API_KEY = '';
  CTA_TRAIN_MAP_ID = '41320';
  FORECASTIO_KEY = "5cb5e4d3b5a03f690fb616639e01bc7b";
  GOOGLE_CALENDAR_CLIENT_SECRET = {
    "installed": {
      "client_id": "",
      "project_id": "",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://accounts.google.com/o/oauth2/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_secret": "",
      "redirect_uris": ["urn:ietf:wg:oauth:2.0:oob", "http://localhost"]
    }
  };
  QUOTES = [
    "Look at that sexy dude!",
    "Woah, stylin' today",
    "Damn guuuurrrrl",
    "Such sexy, much handsome, wow",
    "You are having a great hair day",
    "I'm jealous of that shirt",
    "Go kick some ass today!",
    "Who's world is that? Josh Gachnang's world."
  ];
  LAYOUT = {
    topLeft: [
      "clock-simple",
      "google-calendar"
    ],
    topCenter: [
      "reason-sober"
    ],
    topRight: [
      "forecastio-simple"
    ],
    bottomLeft: [
      "cta-train-schedule",
      "uber-estimate"
    ],
    bottomCenter: [],
    bottomRight: [
    ]
  };
  AUTH = {
    'googleAuth': {
      'clientID': '',
      'clientSecret': '',
      'callbackURL': 'https://recipe.nang.in/auth/google/callback'
    }
  };
  JWT_SECRET = "lol";
  SESSION_SECRET = "lmao";
  IMGUR_CLIENT_ID = "";
  IMGUR_CLIENT_SECRET = "";
  IMGUR_PASSWORD = "";
  IMGUR_EMAIL = "";
  // API Token from Slack custom bot integration
  SLACK_TOKEN = "";
  BOT_NAME: string = "R2-D2";
  PLUGINS = {
      DEPLOY: {
        DEPLOY_COMMAND: "cd /var/deploy && make deploy"
      }
    }
};
