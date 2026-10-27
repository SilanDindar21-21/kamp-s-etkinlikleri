AI Kullanım Notları

1. Kullanılan Promptlar

Prompt 1

“Mevcut kampüs web sitemi incele ve sayfaların yapısını açıkla.”

Amaç: HTML dosyalarının yapısını anlamak.

Prompt 2

“Etkinlik başlıklarında arama yapmak için JavaScript kodu öner.”

Amaç: Etkinlikleri arama kutusuna göre filtrelemek.

Prompt 3

“Arama kodunu kontrol et ve büyük-küçük harf, boş arama ve sonuç bulunamaması durumlarını test et.”

Amaç: Arama özelliğinin doğru çalıştığını kontrol etmek.

2. Yapay Zekâ Önerisinin Değerlendirilmesi

Arama özelliği için önerilen JavaScript kodu projeye uyarlandı. Etkinlik başlıkları filtreleniyor ve eşleşme olmadığında kullanıcıya açıklayıcı bir mesaj gösteriliyor. Kodun çalışması tarayıcıda kontrol edildi.

3. Kod Açıklamaları

Event listener: addEventListener("input", ...), kullanıcı arama kutusuna yazı yazdıkça arama fonksiyonunun çalışmasını sağlar.

Filtreleme koşulu: includes() metodu, etkinlik başlığının aranan kelimeyi içerip içermediğini kontrol eder. Eşleşme varsa kart gösterilir, yoksa gizlenir.

4. Test ve Kontrol

Ana sayfa, Etkinlikler ve Hakkımızda sayfaları tarayıcıda açıldı. Etkinlik aramasında eşleşen kartların gösterildiği ve sonuç bulunamadığında açıklayıcı mesaj çıktığı kontrol edildi.