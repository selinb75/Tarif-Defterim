

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
## Canlı demo
```
https://creative-taiyaki-1d11a0.netlify.app
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

└── README.md
```

## Video
```


https://github.com/user-attachments/assets/899464e5-d498-40c7-96a8-0f3f3fe3ec68



<img width="1371" height="1005" alt="selinb" src="https://github.com/user-attachments/assets/895a848b-60e5-4921-9462-869dcb0c28b9" />
```

