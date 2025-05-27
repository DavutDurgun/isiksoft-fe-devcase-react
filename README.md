# isiksoft-fe-devcase-react

Işıksoft Frontend DevCase Challenge Project

# Ürün Yönetim Paneli (React.js)

Bu proje, React.js kullanılarak geliştirilmiş basit bir ürün yönetim paneli uygulamasıdır. Ürünleri listeleme, filtreleme ve temel ürün istatistiklerini görüntüleme gibi özelliklere sahiptir.

## Proje Yapısı

Proje, iyi organize edilmiş bir klasör yapısına sahiptir:

├── public/
├── src/
│ ├── api/ # API istekleri için Axios instance
│ │ └── axiosInstance.ts
│ ├── assets/ # Statik dosyalar (resimler vb.)
│ ├── components/ # Genel amaçlı yeniden kullanılabilir UI bileşenleri
│ │ ├── Logo.tsx
│ │ ├── Pagination.tsx
│ │ ├── SearchBar.tsx
│ │ └── ToggleButton.tsx
│ ├── features/ # Belirli özelliklere (domain) ait bileşenler, hook'lar, mock veriler
│ │ └── product/
│ │ ├── components/
│ │ │ ├── ProductStatsCards.tsx
│ │ │ └── table/
│ │ │ ├── ProductTable.tsx
│ │ │ └── ProductTableHeader.tsx
│ │ ├── hooks/
│ │ │ └── useSidebarState.ts
│ │ └── mock.ts
│ ├── layouts/ # Uygulama genelinde kullanılan layout'lar
│ │ └── MainLayout.tsx
│ ├── pages/ # Uygulamanın ana sayfaları
│ │ ├── AllProductsPage.tsx
│ │ ├── HomePage.tsx
│ │ └── ... (AddNewProductPage, ScanBarcodePage gibi dummy sayfalar)
│ ├── services/ # API servisleri
│ │ └── productService.ts
│ ├── types/ # TypeScript tip tanımları
│ │ └── product.ts
│ ├── App.tsx # Ana uygulama bileşeni ve yönlendirme
│ ├── index.css # Global CSS stilleri
│ └── main.tsx # Uygulama başlangıç noktası
└── vite-env.d.ts # Vite ortam tip tanımları

## Özellikler

- **Ürün Listeleme**: Tüm ürünleri sayfalandırılmış bir şekilde görüntüler.
- **Sayfalandırma**: Ürünler arasında gezinmek için sayfalandırma özelliği mevcuttur.
- **Ürün Seçimi**: Tablodaki ürünleri tek tek veya toplu seçebilme.
- **Duyarlı Tasarım**: Mobil ve masaüstü görünümlerine uyumlu sidebar ve navbar yapısı.
- **API Entegrasyonu**: `axios` kullanarak sahte bir API'den ürün verilerini çeker.
- **CSS Mor Çizgi Ekleme**: Seçili tablo satırlarının solunda mor bir çizgi (`.selected-row::before`) gösterilir.
- **Navigasyon**: `react-router-dom` ile sayfalar arası yönlendirme.
- **Dark/Light Mode (Hazır)**: Temel dark/light mode geçişi için bir buton (`Navbar.tsx` içinde) bulunmaktadır.
- **Yan Menü (Sidebar)**: Açılıp kapanabilen, durumunu yöneten bir yan menü.

## Kullanılan Teknolojiler

- **React.js**
- **TypeScript**
- **Vite**: Hızlı geliştirme ortamı için.
- **Tailwind CSS**: Hızlı UI geliştirme için.
- **React Router DOM**: Sayfa yönlendirmesi için.
- **Axios**: API istekleri için.
- **Heroicons**: İkonlar için.

## Kurulum ve Çalıştırma

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1.  Depoyu klonlayın:

    ```bash
    git clone <depo-adresiniz>
    cd urun-yonetim-paneli
    ```

2.  Bağımlılıkları yükleyin:

    ```bash
    npm install
    # veya
    bun install
    ```

3.  Geliştirme sunucusunu başlatın:

    ```bash
    npm run dev
    # veya
    bun dev
    ```

    Uygulama genellikle `http://localhost:5173` adresinde çalışacaktır.

4.  Üretim için derleme (build):
    ```bash
    npm run build
    # veya
    bun build
    ```
    Bu komut, uygulamanın statik dosyalarını `dist` klasörüne derleyecektir. Bu klasör, uygulamayı canlıya almak için kullanılabilir.

## API Entegrasyonu

Proje, ürün verilerini `https://devcase.isiksoftyazilim.com/api` adresindeki bir API'den çekmektedir. `ProductService.ts` dosyası, API ile etkileşimi yönetir.

## Geliştirme Notları

- `App.tsx` içinde `AddNewProductPage` ve `ScanBarcodePage` gibi sayfalar şu anda yer tutucu (dummy) içeriklere sahiptir ve ayrı dosyalarda oluşturulmaları önerilir.
- Sidebar'ın açılıp kapanma davranışı ve responsive yapısı `Sidebar.tsx` içinde yönetilmektedir.
- Seçili ürün satırlarına uygulanan mor çizgi stili `all-products-page.css` dosyasında tanımlanmıştır.

## Katkıda Bulunma

Katkıda bulunmak isterseniz, lütfen bir pull request göndermeden önce mevcut kodlama standartlarına uyun.
