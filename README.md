# Tarif Defterim🥙 🥗 🍝

React JS ile geliştirdiğim tarif yönetim uygulaması. 
Web Geliştirme; JavaScript Proje Yönergesi kapsamında hazırlandı. 
Tarif ekleme, listeleme, güncelleme ve silme (CRUD) işlemleri yapılabilir.

## Özellikler
- Örnek tarifler DummyJSON API'sinden `fetch` ile çekilir
- Veriler LocalStorage'da saklanır, sayfa yenilense de kaybolmaz
- Yeni tarif ekleme, mevcut tarifi düzenleme ve silme
- Form doğrulaması (tarif adı boş bırakılamaz)
- Pure CSS ile responsive tasarım

## Kullanılan Teknolojiler
React JS, JavaScript, HTML, CSS, Vite, LocalStorage, REST API

## Kurulum
```
npm install
npm run dev
```

## Klasör Yapısı
```
tarif-defteri/
├── public/
├── src/
│   ├── components/
│   │   ├── RecipeCard.jsx    # tek bir tarifi gösteren kart
│   │   ├── RecipeForm.jsx    # tarif ekleme ve düzenleme formu
│   │   └── RecipeList.jsx    # kartları listeleyen bileşen
│   ├── hooks/
│   │   └── useRecipes.js     # veri çekme ve CRUD mantığı
│   ├── interfaces/
│   │   └── recipe.js         # tarif şablonu
│   ├── pages/
│   │   └── Home.jsx          # ana sayfa
│   ├── utils/
│   │   └── storage.js        # LocalStorage yardımcıları
│   ├── App.jsx               # uygulamanın giriş bileşeni
│   ├── index.css             # tüm stiller
│   └── main.jsx              # React'i sayfaya bağlayan dosya
├── index.html
├── package.json
├── screenshot.png
└── README.md
```

https://stately-dusk-ceeb49.netlify.app
https://github.com/user-attachments/assets/26d5f3b3-88dc-4a2f-9e6d-375f6c1b5d81


