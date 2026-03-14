# Not Uygulaması

React ve Bootstrap ile oluşturulan basit ve tatlı bir not alma uygulaması.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=flat&logo=bootstrap)
![Netlify](https://img.shields.io/badge/Deployed-Netlify-00C7B7?style=flat&logo=netlify)

---

## Özellikler

- Başlık ve içerikle yeni not **ekleme**
- Notları **listeleme**
- Herhangi bir notu **düzenleme**
- Notları **silme**

---

## Teknolojiler

| Teknoloji | Amaç |
|---|---|
| [React](https://react.dev/) | UI Framework |
| [Vite](https://vitejs.dev/) | Build Tool |
| [Bootstrap](https://getbootstrap.com/) | Styling |
| [Netlify](https://netlify.com/) | Deployment |

---

## Proje Yapısı

```
src/
├── components/
│   ├── NoteCard.jsx       # Not görüntüleme
│   ├── NoteForm.jsx       # Ekleme ve düzenleme
│   └── NoteList.jsx       # Not tablosu
├── pages/
│   └── HomePage.jsx       # CRUD mantığının olduğu ana sayfa
├── interfaces/
│   └── Note.js            # Not veri yapısı
├── App.jsx
└── main.jsx
```

---

### Kurulum

```
# Repoyu klonla
git clone https://github.com/LordWafflous/sp-note-project.git

# Proje klasörüne git
cd note-app

# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

---

[Netlify](link)

---

## Ekran Görüntüsü

 ![Görüntü](./assets/hero.png)

---

## Öğrendiklerim

- Vite ile React projesi kurmayı,
- Bileşen bazlı mimarisini,
- CRUD işlemlerini,
- Bootstrap ile stillendirmeyi,
- Netlify ile yayınlamayı,
- Github ile sürüm kontrolünü.

---