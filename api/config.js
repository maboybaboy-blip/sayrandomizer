// api/config.js
export default function handler(req, res) {
  // Настройка CORS для безопасности
  const allowedOrigins = [
    'https://sayrandomizer.vercel.app',
    'https://say-randomizer.vercel.app',
    'http://localhost:3000',
    'http://localhost:5000'
  ];
  
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  
  // Возвращаем конфигурацию
  res.status(200).json({
    youtubeApiKey: process.env.YOUTUBE_API_KEY || '',
    hcaptchaSiteKey: process.env.HCAPTCHA_SITE_KEY || '',
    firebaseConfig: {
      apiKey: process.env.FIREBASE_API_KEY || '',
      authDomain: process.env.FIREBASE_AUTH_DOMAIN || '',
      projectId: process.env.FIREBASE_PROJECT_ID || '',
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET || '',
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || '',
      appId: process.env.FIREBASE_APP_ID || ''
    }
  });
}
