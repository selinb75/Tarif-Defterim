# Tarif Defterim

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
src/
├── components/   RecipeCard, RecipeForm, RecipeList
├── hooks/        useRecipes (veri çekme ve CRUD mantığı)
├── interfaces/   tarif şablonu
├── pages/        Home
└── utils/        LocalStorage yardımcıları
```

## Yönergedeki Adımlar
- [x] Kütüphane seçimi: React
- [x] Kurulum ve IDE ile açma
- [x] Components, Pages, Interfaces klasörleri
- [x] Pure CSS
- [x] Ekle, Listele, Güncelle, Sil işlemleri

- [ ] Netlify ile yayına alma
