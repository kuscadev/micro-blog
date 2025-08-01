---
title: C# Ders Notlarım - 1
description: .NET nedir, C#'ta nasıl proje oluşturulur, değişkenler ve veri tipleri nasıl kullanılır? Temelden başlayanlar için sade ve anlaşılır bir rehber.
slug: csharp-ders-notlari-1
date: 2025.08.01
draft: false
tags:
  - C#
---
## .Net Nedir?

**.NET**, Microsoft tarafından geliştirilen, açık kaynak ve platformlar arası (cross-platform) desteğe sahip, çok dilli (multi-language) bir yazılım geliştirme platformudur. Web, masaüstü, mobil, oyun, bulut ve IoT uygulamaları gibi çok çeşitli senaryolarda kullanılabilir. C#, F#, ve VB.NET gibi dillerle çalışmayı destekler ve zengin kütüphane seti ile geliştiricilere modern, performanslı ve güvenli uygulamalar üretme imkanı sunar.

.Net’in ana programlama dili olarak kabul edilen C# (C sharp), C, C++, Java, JavaScript geliştiricileri için yaygın kullanıma sahiptir. F# (F sharp) ML dil ailesine üye, işlevsel odaklı bir programlama dilidir. Visual Basic ise .Net bağlamında tam nesne yönelimli bir programlama olarak kullanılır.

İlk olarak .Net Framework adında çıktı. Bu versiyonda geliştirme sadece Windows işletim sisteminde yapılıyordu. Ardından .Net Core adı altında çıktı. Burada Cross platform destekliyordu, yani Mac OS ve Linux desteği gelmişti. .Net Core 3.8 sürümünden sonra isim karmaşasını önlemek amaçlı sadece .Net çatısı altında birleşti ve yine cross platform olarak geliştirme yapılabiliyor.

### Proje Oluşturma

.Net ile proje oluşturmak için terminalde;

```bash
dotnet new console -n consoleApp
```

Komutunu kullanabiliriz. Bu komut terminalin açık olduğu dizinde bir konsol uygulaması oluşturur. `-n` parametresiyle oluşturduğumuz projeye bir isim verebiliriz. `-n` parametresinden sonra gelen kısım projemize verdiğimiz isimdir.

Oluşturduğumuz projeyi derlemek istediğimizde `dotnet build` komutunu kullanırız. Bu komut projeyi derler ve hata varsa bunları gösterir. İstersek `dotnet run` komutu ile derleme ve çalıştırma işlemini tek seferde yapabiliriz.

#### "Merhaba Dünya"

```csharp
Console.WriteLine("Merhaba Dünya! C# öğreniyorum.");
```

Yukarıdaki kodu build edip çalıştırdığımız zaman terminal ekranında `Merhaba Dünya! C# öğreniyorum.` yazacaktır.

**Not:** Kodumuzda yaptığımız her değişiklik sonrasında proje yeniden derlenir. Proje derlenmeden önce proje klasöründeki `obj` ve `bin` klasörlerinin içi boştur. Bu klasörlerin içine gerekli dosyalar derleme sırasında eklenir. Eğer tüm derlemeleri temizlemek istiyorsak `dotnet clean` komutunu kullanabiliriz. Bu komut `obj` ve `bin` klasörleri içindeki tüm dosyaları silecektir.

**Not:** Eğer kodumuzda bir hata varsa `dotnet build` ya da `dotnet run` komutlarını kullandığımız zaman terminalde hata mesajı alırız ve proje derlenmez, çalıştırılabilir bir dosya oluşturulmaz.

### C# Değişkenler

#### Değişken Nedir?

- Değişkenler, programlama dillerinde veri saklamak için kullanılan isimlendirilmiş alanlardır.
- Değişkenler geçici bellekte saklanır. Uygulama sonlandığı anda bellekteki veriler silinir.
- Bellekte mümkün olduğunca az veri saklanmalıdır. Küçük uygulamalarda bu çok fark yaratmazken daha büyük uygulamalarda bu durum bellek tüketiminde artışa sebep olacaktır.
- Değişkenlerin veri tipleri vardır. Tutmuş oldukları veriye göre bellekte farklı boyutlarda yer tutar.

```csharp
// Değişkenler:
x = 10
y = 20
sonuc = x+y
isim = "Oğuzhan"

```

#### Değişken Tanımlama

`var` anahtar kelimesini kullanarak değişken tanımlayabiliriz.

```csharp
var sayi = 13;
var urunAdi = "Casper";
var satisDurum = true;
```

Değişken isimlendirmelerinde uyulması gereken kurallar vardır. Değişken isimleri;
- Boşluk içeremez.
- Sayı ile başlayamaz.

Ayrıca daha önceden tanımladığımız bir değişkenle aynı isimde bir değişken tanımlamak istersek hata verecektir. Değişkenin değerini ileride değiştirmek istersek `var` anahtar kelimesini kullanmadan değiştirmemiz gerekir.

```csharp
var sayi = 13;
var sayi = 8; // Bu durumda program hata verecektir.
```

```csharp
var sayi = 13;
sayi = 8; // Bu durumda herhangi bir hata vermeyecek.
```

**Not:** Değişken isimlendirmede büyük/küçük harf kullanımına dikkat etmeliyiz. `sayi` ve `Sayi` farklı 2 değişkendir.

### Veri Tipleri

Veri tipleri bellekte saklanma şekillerine göre *value types* ve *reference types* olarak ikiye ayrılır.

- *Value Types*
- char
- bool
- struct
- **Tam Sayı**
	- byte
	- short
	- int
	- long
- **Ondalıklı Sayı**
	- float
	- double
	- decimal
- *Reference Types*
- string
- class
- array
- Interface

Her veri tipi (örneğin `byte`, `short`, `int`, `long`) bellekte farklı miktarda yer kaplar ve farklı aralıklarda değerleri temsil edebilir. Örneğin, `byte` sadece 0–255 arası değerleri tutabilirken sadece 1 byte yer kaplar; bu, büyük veri kümelerinde belleği önemli ölçüde tasarruflu kullanmana olanak sağlar. Öte yandan `long`, çok büyük sayılarla çalışırken kullanılır ama 8 byte yer kaplar.

| C# Type/Keyword |             Range              | Size  |   .NET Type   |
| :-------------: | :----------------------------: | :---: | :-----------: |
|      sbyte      |           -128 / 127           | 8bit  | System.Sbyte  |
|      byte       |            0 / 255             | 8bit  |  System.Byte  |
|      short      |        -32,768 / 32,768        | 16bit | System.Int16  |
|     ushort      |           0 / 65,535           | 16bit | System.UInt16 |
|       int       | -2,147,483,648 / 2,147,483,647 | 32bit | System.Int32  |
|      uint       |       0 / 4,294,967,295        | 32bit | System.UInt32 |

Değişken tanımlarken `var` anahtar kelimesini kullanıyorduk. Ancak, değişkenin türünü özellikle belirtmek istediğimiz durumlarda doğrudan veri tipinin kendisini (`int`, `byte` gibi) kullanarak da değişken tanımlayabiliriz:

```csharp
var sayi = 13;
int sayi2 = 8;
```

Eğer örnekte görüldüğü gibi `int` kullanmak yerine `var` kullanırsak C# otomatik olarak bu değeri `int` olarak tanımlayacaktır. Ancak örnekte de görüldüğü gibi `10` gibi küçük bir sayıyı `var` ya da `int` kullanarak tanımladığımızda bu değişken 4 byte alan kaplayacaktır. Oysa biz bu değeri `byte` ile tanımlamış olsaydık bu atama bellekte daha az yer kaplayacaktı. Yani;

```csharp
int sayi = 10; // Bellekte 4 byte yer kaplar.
byte sayi2 = 10; // Bellekte 1 byte yer kaplar.
```

Özetleyecek olursak;

`var` kullanmak yazım kolaylığı sağlasa da, her zaman en verimli seçenek değildir. Örneğin, `var sayi = 13;` ifadesi C# tarafından `int` olarak değerlendirilir ve bellekte 4 byte yer kaplar. Ancak bu değerin 0–255 arası bir değer olduğunu biliyorsak, `byte sayi = 13;` şeklinde bir tanımlama bellekte daha az yer kaplayacaktır. Özellikle bellek yönetiminin önemli olduğu büyük veri işleme senaryolarında, doğru veri tipi seçimi performans açısından kritik hale gelir.

**Not:**

Ondalıklı sayıları tanımlarken eğer `var` anahtar kelimesini kullanırsak derleyici otomatik olarak bunu `double` olarak kabul edecektir. Eğer biz `float` ya da `decimal` olarak tanımlamak istersek yazımda ufak bir değişiklik yapmamız gerekir:

```csharp
var sayi = 1.18; // Otomatik olarak double kabul edilir.
float sayi2 = 1.18f; // float tanımlarken tanımladığımız sayının sonuna 'f' eklememiz gerekir.
decimal sayi3 = 1.18m; // decimal olarak tanımladığımız sayının sonuna 'm' eklememiz gerekir.
```

#### Veri Tipi Dönüşümü

Veri tipi dönüşümünü *implicit casting (bilinçsiz tür dönüşümü)* ve *explicit casting (bilinçli tür dönüşümü)* olarak ikiye ayırabiliriz.

- **Implicit Casting (Bilinçsiz/Otomatik Tür Dönüşümü):** Küçük kapasiteli bir türden, daha büyük kapasiteli bir türe dönüşüm yapıldığında C# bunu otomatik olarak gerçekleştirir. Bu tür dönüşümlerde veri kaybı riski yoktur.

	```csharp
	byte x = 100;
	int y = x; // Otomatik dönüşüm: byte'tan int'e
	```

	Burada `byte`, `int`’ten daha küçük olduğu için dönüştürme işlemi otomatik gerçekleşir.
- **Explicit Casting (Bilinçli Tür Dönüşümü):** Büyük kapasiteli bir türden daha küçük bir türe dönüşüm yapılmak istendiğinde, C# senin bu işlemi bilinçli olarak yaptığından emin olmak ister. Çünkü veri kaybı veya biçim bozulması riski vardır. Bu durumda casting yani dönüştürme işlemini manuel belirtmen gerekir.

	```csharp
	double a = 13.8;
	int b = (int)a; // Dönüştürme açıkça yapıldı
	```

	Bu örnekte `a` değişkenindeki 13.8 sayısı ondalıklı bir sayı olmasına rağmen biz bunu tam sayıya dönüştürmek istedik ve bu dönüştürme işlemi sonunda bir veri kaybı olacak. (Kısaca "Başıma gelebilecek şeylerin farkındayım ve bunu göze alıyorum diyoruz. :D")

	Benzer bir şekilde `int` değeri `string` 'e çevirmek istediğimiz zaman da yine bilinçli tür dönüşümü yapmamız gerekir.

	```csharp
	int a = 13;
	string b = a.ToString();
	```

Özetleyecek olursak;

|   **Özellik**   | **Implicit Casting** | **Explicit Casting** |
| :-------------: | :------------------: | :------------------: |
|     **Yön**     |   Küçükten Büyüğe    |   Büyükten Küçüğe    |
| **Veri Kaybı**  |         Yok          |       Olabilir       |
| **Yazım Şekli** |       Otomatik       | (type) belirtilmeli. |

##### Veri Tipi Dönüşümüne Neden İhtiyaç Duyarız?

Veri tipi dönüşümünü tanımlamadan önce neden veri tipi dönüşümüne ihtiyaç duyduğumuzu basit bir örnek üzerinden inceleyelim:

```csharp
Console.Write("1. Sayı: ");
var sayi1 = Console.ReadLine();
Console.Write("2. Sayı: ");
var sayi2 = Console.ReadLine();
var toplam = sayi1 + sayi2;
Console.WriteLine(toplam);
```

Yukarıdaki örneğe baktığımızda `Console.Write` ile kullanıcıdan bir sayı alıyoruz ve hemen ardından `Console.ReadLine` ile bu sayıyı okuyup `sayi1` ve `sayi2` değişkenlerine atıyoruz. Sonrasında bu iki değişkeni toplamak istediğimizde beklenmedik bir sonuç bizi karşılıyor. Örnek vermek gerekirse `sayi1 = 10` ve `sayi2 = 20` olsun. `toplam` değeri 30 olmalı. Ama ekranda "1020" yazıyor. Peki neden? Çünkü `Console.ReadLine` otomatik olarak bu girdileri `string` olarak alıyor ve iki string'i toplamak istediğimizde de arka arkaya yazdırıyor. Yani bizim bu toplama işlemini yapabilmemiz için kullanıcıdan aldığımız değerleri önce sayıya çevirmemiz gerekiyor.

İşte bu ve benzeri birçok durum için veri tipleri arasında dönüşüm yapmamız gereken zamanlar oluyor.

##### Veri Tipi Dönüşümü Nasıl Yapılır?

Yukarıda verdiğimiz örnekten devam edelim ve az önce yapamadığımız toplama işlemini yapalım. Bunun için `string` veri tipine sahip olan değerlerimizi `int` veri tipine çevirmemiz lazım. Bu tür dönüşümünü yapmak için `Convert` sınıfını kullanacağız:

```csharp
Console.Write("1. Sayı: ");
var sayi1 = Convert.ToInt32(Console.Readline());
Console.Write("2. Sayı: ");
var sayi2 = Convert.ToInt32(Console.Readline());
var toplam = sayi1 + sayi2;
Console.WriteLine(toplam);
```

Örnekte `Convert` sınıfından sonra kullandığımız `ToInt32` ile `Console.ReadLine()` ile gelen string'i integer'a çevirmiş olduk. Bunu yaptıktan sonra `sayi1` ve `sayi2` artık `int` türünde değerler tuttuğu için toplama işlemimizi normal bir şekilde yapabiliriz.

Benzer şekilde eğer `int` olarak tanımladığımız bir değişken varsa ve biz bu değişkeni `string` veri türüne çevirmek istiyorsak `toString` kalıbını kullanırız.

```csharp
int x = 13;
string z = x.toString();
```

##### Nullable Types

Veri tiplerini sınıflandırırken *"value types* ve *"reference types"* olarak ikiye ayırmıştık. Value type ile çalışırken eğer bir değişken tanımlar ve bu değişkene bir değer atamazsak programımız hata verecektir. Ancak reference types olarak adlandırdığımız veri türleri varsayılan olarak nullable oluyor ve herhangi bir değer ataması yapmamız gerekmiyor.

Örnek üzerinden gidecek olursak bir veri tabanından gelen verilerle işlem yaptığımız bir senaryoda kullanıcının maaş bilgisini bir değişkene atayacağımızı düşünelim. Eğer bu veri tabanında maaş bilgisi boş bırakılmışsa ve biz bu değişkeni `int` gibi bir value type değişkene atamışsak programımız hata verecektir.

```csharp
int maas = null; // Bu satır hata verecektir, çünkü "value types" null değerini alamaz.
Console.WriteLine(maas);
```

Yukarıdaki problemi çözmek için ise kullanabileceğimiz yöntem şudur:

```csharp
int? maas = null;
Console.WriteLine(maas);
```

`int?` yazdığımız zaman bu değişken `null` değerini alabilir. Yukarıdaki kodu çalıştırdığımızda eğer `maas` değişkenine atanan bir değer yoksa ekrana herhangi bir şey yazdırılmaz. Ancak ilk örneği çalıştırmayı denersek programımız direkt hata verecektir.

Nullable veriler üzerinden erişebileceğimiz farklı bilgiler vardır. Farklı metotlar kullanarak birden fazla bilgi edinebiliriz. Örneğin `HasValue` metodunu kullanarak değişkenimize atanmış herhangi bir değer olup olmadığını öğrenebiliriz. Yukarıdaki örneğin devamında `Console.WriteLine(maas.HasValue);` satırı olsaydı bu satırın çıktısı `False` olacaktı. Bir başka metot olarak `GetValueorDefault` kullanabiliriz. Bu metot da bize varsa değeri, yoksa varsayılan değeri yazar. Örneğimizde `int` veri türünü kullandığımız için varsayılan değer sıfır olacaktır.

Özetleyecek olursak;

```csharp
int? maas = null; // '?' kullanılarak nullable bir int tanımlanıyor
Console.WriteLine(maas); // Ekrana hiçbir şey yazmaz çünkü değer yok
Console.WriteLine(maas.HasValue); // False döner
Console.WriteLine(maas.GetValueOrDefault()); // 0 döner, çünkü int’in varsayılanı sıfırdır
```

### Strings

**String**, C#’ta **karakterlerden oluşan metinleri** ifade etmek için kullanılan referans tipli bir veri türüdür. Tek bir karakter (`char`) yerine kelimeleri, cümleleri hatta paragrafları saklamak için kullanılır. Stringler;

- Çift tırnak içinde yazılır.
- `System.String` sınıfına dayanır ve aslında bir **karakter dizisidir**.
- Değeri değiştirilemez (_immutable_) — yani bir kez oluşturulduğunda içeriği değiştirilemez, sadece yeni bir string oluşturulur.

```csharp
string ad = "Oğuzhan";
string soyad = "Kuşca";
string yas = "25";
```

Yukarıdaki örnekte tanımladığımız stringleri kullanarak başka stringler de oluşturabiliriz. Buna *string concat (string birleştirme)* denir.

```csharp
string kisiBilgi = ad + " " + soyad + " " + "adlı kişi" + " " + yas + " " + "yaşındadır.";
```

Yukarıda daha önceden tanımladığımız `ad` , `soyad` , `yas` değişkenlerini kullanarak `kisiBilgi` adında bir tanımlama yaptık. Burada dikkat etmemiz gereken nokta daha önceden belirlediğimiz stringler arasında boşluk bırakmak için *bir boşluktan oluşan* stringler kullandık.

String birleştirme işlemini daha kolay bir şekilde de yapabiliriz. Buna *string interpolation* denir:

```csharp
string kisiBilgi = $"{ad} {soyad} adlı kişi {yas} yaşındadır."
```

Yukarıdaki örnekte önce string başına `$` koyduk ve string içinde değişkenleri kullanmak için de `{}` kullandık.

Şimdi yukarıdaki örneği direkt stringleri belirterek değil de kullanıcıdan bu verileri alarak yapalım:

```csharp
Console.Write("Ad: ");
var ad = Console.ReadLine();
Console.Write("Soyad: ");
var soyad = Console.ReadLine();
Console.Write("Yaş: ");
var yas = Console.ReadLine();
var mesaj = $"{ad} {soyad} isimli kullanıcı {yas} yaşındadır.";
Console.WriteLine(mesaj);
```

Yukarıdaki örnekte önce `Console.Write()` ile kullanıcıdan veri aldık ve `var` anahtar kelimesini kullanarak bu aldığımız değerleri değişkenlere atadık. Sonrasında da tüm bu değişkenleri kullanarak mesajımızı yazdırdık.

**Not:** Örnekte `var` yerine `string` anahtar kelimesini kullanıyor olsaydık `string?` şeklinde yazmamız gerekecekti. Çünkü böyle yapmazsak kullanıcıdan bir veri gelmediği durumlarda nullable yapı olmadığı için hata alırdık.
  
#### String Metotları

String metotları, C#’ta string veri tipi üzerinde işlem yapmamıza olanak tanıyan yerleşik fonksiyonlardır. Bu metotlar sayesinde bir string’in uzunluğunu ölçebilir, küçük/büyük harfe çevirebilir, belirli bir kısmını kesip alabilir ya da başka bir ifadeyle değiştirebiliriz.

Örnekler üzerinden bu metotları inceleyelim.

```csharp
string mesaj = "Merhaba Dünya, C# öğreniyorum.";

// String uzunluğunu öğrenmek için:
var uzunluk = mesaj.Length;
// String içinden bir karakteri seçmek için:
var karakter = mesaj[2]; // Index numaralarının 0'dan başladığını unutma!
// Tüm karakterleri küçük harfe çevirmek için:
var kucuk = mesaj.ToLower();
// Tüm karakterleri büyük harfe çevirmek için:
var buyuk = mesaj.ToUpper();
// Baştaki ve sondaki boşlukları silmek için:
var bosluk = mesaj.Trim(); // Eğer sadece baştaki boşlukları silmek istiyorsak 'TrimStart', sadece sondaki boşlukları silmek istiyorsak 'TrimEnd' kullanabiliriz.
// Tüm içeriği dizi içine almak için:
var dizi = mesaj.Split(","); // Parantez içine yazdığımız, stringi diziye dönüştürken ayırma işleminin yapılacağı noktayı belirler. (Örneğimizde "Merhaba Dünya" ilk parça "C# öğreniyorum" ikinci parça)
var diziSec = mesaj.Split(",")[1]; // Yukarıdaki örnekte böldüğümüz stringin 1. elemanını almamızı sağlar. (Örnekte "C# öğreniyorum" kısmı alınır.)
// İlk ve son elemanı kontrol etmek için:
var ilk = mesaj.StartsWith("M"); // String "M" ile başladığı için "True" değerini verecek.
var son = mesaj.EndsWith("L"); // String "L" ile bitmediği için "False" değerini verecek.
// String içinde arama yapmak için:
var ara = mesaj.Contains("C#"); // String içinde verdiğimiz değeri arar. Verdiğimiz değer string içinde olduğu için "True" değerini verecek.
// String içinde yaptığımız aramanın index değerini öğrenmek için:
var sira = mesaj.IndexOf("C#"); // Aradığımız kelimenin başlangıcının index değerini verir. Eğer yoksa "-1" verir.
// Stringin belirli bir kısmını almak için:
var kes = mesaj.Substring(10,19) // Parantez içine yazdığımız ilk sayı başlangıç indexini, ikinci sayı başlangıç indexinden itibaren kaç karakter alınmasını istediğimizi belirtir. Eğer string'in sonuna kadar istiyorsak sadece başlangıç indexini belirtmemiz yeterli.
```

#### DateTime Nedir

`DateTime`, C#’ta tarih ve saat bilgilerini temsil etmek için kullanılan bir **struct (değer tipi)** veri türüdür. Güncel zamanı alabilir, özel tarih nesneleri oluşturabilir veya tarihleri biçimlendirebiliriz.

```csharp
var simdi = DateTime.Now;
Console.WriteLine(simdi);
```

Yukarıdaki örnek `DateTime` veri türünün `Now` özelliğini kullanarak bilgisayarın o anki tarih ve saat bilgilerini alır ve ekrana yazdırır. Dilersek bu örneği çeşitlendirebiliriz.

```csharp
Console.WriteLine(simdi.Year); // Yıl bilgisi için.
Console.WriteLine(simdi.Month); // Ay bilgisi için.
Console.WriteLine(simdi.Day); // Gün Bilgisi için.
Console.WriteLine(simdi.DayOfWeek); // Haftanın kaçıncı gününde olduğunu öğrenmek için.
```

`Now` parametresi ile anlık tarih/saat bilgisine erişebildiğimiz gibi kendimiz de farklı tarih/saat ayarlamaları yapabiliriz.

```csharp
DateTime tarih = new DateTime(2023, 04, 23);
```

`new` anahtar kelimesini kullanarak yeni bir tarih oluşturduk. `DateTime()` içindeki sıralama ise "Yıl > Ay > Gün" şeklinde ilerliyor.

Oluşturduğumuz tarihe eklemeler yapabiliriz. Bunun için `AddYears` `AddHours` gibi anahtar kelimeleri kullanabiliriz. Aynı şekilde farklı tarihleri kullanarak işlemler yapabiliriz.

```csharp
var simdi = DateTime.Now;
DateTime tarih = new DateTime(2024, 06, 24, 11, 43);
var fark = simdi - tarih;
Console.WriteLine(fark.TotalDays);
```

Yukarıdaki örnekte bilgisayarın anlık tarih/saat bilgisini ve kendi oluşturduğumuz bir tarih/saat bilgisini birbirinden çıkardık ve bunun sonucunu `fark` değişkenine atadık. Artık bu değişken üzerinde çeşitli özellikler kullanarak (`TotalDays` gibi) işlemler yapabiliriz. `TotalDays` özelliği iki tarih arasındaki toplam gün sayısını bize söyleyecektir.

### Diziler

Diziler (arrays), aynı türden birden fazla veriyi tek bir değişkende saklamamızı sağlayan yapılardır. Programlama dilinde her veri için ayrı ayrı değişken tanımlamak yerine, bu verileri bir arada tutan dizilerle çalışmak hem daha düzenli hem de daha verimli olur. Diziler sıfırdan başlayan index numaralarıyla sıralanır ve her bir elemana bu index numarası üzerinden ulaşılır.

Diziler *tek boyutlu diziler* ve *çok boyutlu diziler* olarak ikiye ayrılır.

- **Tek Boyutlu Diziler**
	- Aynı türden verilerin **tek bir sıra halinde** tutulduğu dizilerdir.
	- Index numarası **0’dan başlar**.
	- Tanımlama şekli şöyledir:
	
	```csharp
	string[] sehirler = { "Ankara", "İstanbul", "Kayseri" };
	Console.WriteLine(sehirler[1]); // "İstanbul"
	```

	```csharp
	int[] sayilar = new int[3];
	sayilar[0] = 10;
	sayilar[1] = 20;
	sayilar[2] = 30;
	```

- **Çok Boyutlu Diziler**
	- **Tablo yapısında** veri tutmak için kullanılır. Genellikle satır ve sütun ilişkisi vardır.
	- Tanımlama sırasında iki adet köşeli parantez kullanılır: `[ , ]`
	
	```csharp
	int[,] tablo = new int[2,3] {
	{ 1, 2, 3 },
	{ 4, 5, 6 }
	};
	Console.WriteLine(tablo[1,2]); // 6
	```
	
	Yukarıdaki örnekte:
	- **2 satır**, **3 sütun** vardır.
	- `tablo[0,0] → 1` ve `tablo[1,2] → 6`

|  **Özellik**   |   **Tek Boyutlu Dizi**   |    **Çok Boyutlu Dizi**     |
| :------------: | :----------------------: | :-------------------------: |
|      Yapı      |          Liste           |         Satır/Sütun         |
| Kullanım Alanı | Basit Listeleme-Sıralama |    Tablo, Koordinat vs.     |
|  Tanım Şekli   | int[] sayilar = [1,2,3]  | int[,] tablo = new int[2,3] |
|     Erişim     |        sayilar[1]        |         tablo[1,2]          |

#### Dizi Tanımlama

Dizi tanımlarken kullanabileceğimiz birden fazla yöntem vardır. Bunları örnekler ile inceleyelim:

```csharp
var kursAdi = ".NET 9 ile C# Programlama Dili".Split();
Console.WriteLine(kursAdi[0]);
```

`kursAdi` adında bir değişken oluşturup bu değişkene `string` bir değer atadık ve sonrasında `Split()` metodunu kullanarak bu stringi bir diziye dönüştürdük. `Split()` metodunda parantezler içine herhangi bir ifade yazmadığımız için varsayılan olarak stringi boşluklardan böldü. Bu durumda `0` index numarası `.NET` , `1` index numarası `9` şeklinde devam etti.

```csharp
string[] isimler = new string[5];
isimler[0] = "Ali";
isimler[1] = "Ahmet";
isimler[2] = "Ayşe";
isimler[3] = "Arda";
isimler[4] = "Aslı";
Console.WriteLine(isimler[3]);
```

Bu örnekte ise önce `isimler` adında string dizisi oluşturduk ve `new string[5]` ifadesi ile bu dizinin 5 elemanlı olacağını belirttik. Sonrasında `isimler[index]` ile değer atamalarını yaptık.

Yukarıdaki örneği istersek `int` veri tipi için de yapabiliriz:

```csharp
int[] sayilar = new int[4];
sayilar[0] = 245;
sayilar[1] = 12;
sayilar[2] = 54;
sayilar[3] = 33;
Console.WriteLine(sayilar[1]);
```

Değerleri sonradan atamak yerine istersek diziyi tanımlarken de atayabiliriz:

```csharp
string[] isimler = {"Ali", "Ahmet", "Ayşe" , "Arda", "Aslı"};
Console.WriteLine(isimler[3]);
int[] sayilar = {245,12,54,33};
Console.WriteLine(sayilar[3]);
```

#### Dizi Metotları

C#’ta dizilerle çalışırken `Array` sınıfına ait bazı hazır metotlar sayesinde veriler üzerinde daha hızlı ve etkili işlemler yapabiliriz. Bu metotlar sayesinde dizileri sıralayabilir, ters çevirebilir, eleman arayabilir ya da boş bir dizi oluşturabiliriz. Dizi işlemlerini kolaylaştıran bu metotlar, kodun daha okunabilir ve kısa yazılmasına da katkı sağlar.

Şimdi bu metotlara örnekler üzerinden bakalım:

```csharp
string[] sehirler = {"İstanbul", "Ankara", "İzmir"};

sehirler[0] = "Samsun"; // Tıpkı bir değişkene yeni değer atıyor gibi yapabiliriz.
sehirler.SetValue("Samsun", 0);

Console.WriteLine(sehirler.GetValue(0));
Console.WriteLine(sehirler.Length);
```

`SetValue("yeni değer", index_no)` ile ilk olarak yeni değeri ardından da hangi değerin yerine yazılacağını belirlemek için o değerin index numarasını yazabiliriz. Örnekte `0` index numaralı değer `İstanbul`, `Samsun` değeri ile değiştirilecektir.

`GetValue(index_no)` metoduyla belirttiğimiz index numarasına sahip değeri seçebiliriz.

Tıpkı stringlerde olduğu gibi dizilerde de `Length` metodunu kullanarak seçtiğimiz dizinin uzunluğunu yani kaç elemanı olduğunu öğrenebiliriz.

Dizi içinde arama yapmak için:

```csharp
string[] sehirler = {"İstanbul", "Ankara", "İzmir"};

Console.WriteLine(Array.IndexOf(sehirler, "Ankara"));
```

Burada dikkat etmemiz gereken nokta söz dizimine de baktığımızda göreceğimiz şekilde `sehirler.IndexOf` yapısı yerine `Array.IndexOf` yapısını kullanıyoruz. `Array` sınıfı içinde `sehirler` dizisinde `"Ankara"` ögesini arıyoruz. Eğer aradığımız değer dizi içinde yoksa yine stringlerde olduğu gibi `-1` değerini verir programımız.

Dizi içinde alfabetik sıralama yapmak istersek `Sort` metodunu kullanabiliriz. Bu metodu da tıpkı `IndexOf` metodunda olduğu gibi `Array` sınıfı üzerinde kullanırız.

```csharp
string[] sehirler = {"İstanbul", "Ankara", "İzmir"};
Array.Sort(sehirler);
Console.WriteLine(sehirler.GetValue(0));
```

Yukarıdaki örnekte `Sort` metodunu kullandığımız için dizinin ilk elemanı `Ankara` olacaktır ve ekrana da bu değer yazdırılacaktır.

`Sort` metodunu `int` dizilerinde de kullanabiliriz. Bu durumda da tıpkı alfabetik sıralama gibi küçükten büyüğe sıralama yapılır.

```csharp
int[] sayilar = {24, 12, 44, 67, 346};
Array.Sort(sayilar);
Console.WriteLine(sayilar.GetValue(0)); // => 12
```

`Reverse` metodunu kullanarak diziyi ters çevirebiliriz.

```csharp
int[] sayilar = {24, 12, 44, 67, 346};
Array.Reverse(sayilar);
Console.WriteLine(sayilar.GetValue(0)); // => 346
```

Bir dizi içeriğini silmek (diziyi temizlemek) istersek `Clear` metodunu kullanabiliriz. `IndexOf`, `Sort` ve `Reverse` metotlarında olduğu gibi bunu kullanırken de `Array` sınıfı üzerinde kullanabiliriz.

```csharp
string[] sehirler = {"İstanbul", "Ankara", "İzmir"};
Array.Clear(sehirler);
Console.WriteLine(sehirler.GetValue(0));
Console.WriteLine(sehirler.GetValue(1));
Console.WriteLine(sehirler.GetValue(2));

int[] sayilar = {24, 12, 44, 67, 346};
Array.Clear(sayilar);
Console.WriteLine(sayilar.GetValue(0));
Console.WriteLine(sayilar.GetValue(1));
Console.WriteLine(sayilar.GetValue(2));
```

Yukarıdaki örneği çalıştırdığımızda `sehirler` dizisi için 3 boş satır, `sayilar` dizisi için ise her bir index değerine `0` yazdırılacaktır. Bunun sebebi `string` veri tipinin *nullable* yapıda olması ve `int` veri tipinin ise varsayılan değerinin 0 olmasıdır.

```csharp
int[] sayilar = {24, 12, 44, 67, 346};
Array.Clear(sayilar, 0, 1);
Console.WriteLine(sayilar.GetValue(0));
Console.WriteLine(sayilar.GetValue(1));
Console.WriteLine(sayilar.GetValue(2));
```

Eğer yukarıda yaptığımız gibi `Clear` metoduna 2 değer daha girersek bu programa *"sayilar dizininde 0. indexten başla ve 1 eleman sil"* demek oluyor. Burada girdiğimiz ilk sayısal değer başlangıç index değeri, ikinci sayısal değer ise başlangıçtan itibaren kaç elemanın silineceğini belirtmekte kullanılıyor. Yukarıdaki örnekte ise çıktımız `0` `12` `44` şeklinde olacaktır.

#### Array Slicing

**Array slicing**, bir dizinin içinden **belirli bir aralığı seçme işlemidir**. Mesela elimizde 6 elemanlı bir sayı dizisi varsa ve biz sadece ortadaki 3 elemanı almak istiyorsak bunu "slicing" ile yaparız.

```csharp
int[] sayilar = { 10, 20, 30, 40, 50, 60 };
```

Yukarıda `sayilar` adında bir dizi tanımladık. Eğer bu diziden `30` `40` ve `50` elemanlarını almak istiyorsak:

```csharp
var parca = sayilar.Skip(2).Take(3).ToArray();
```

Burada;

`Skip(2)`: İlk iki elemanı atla,
`Take(3)`: Sonraki üç elemanı al,
`ToArray()`: Sonucu yeni bir dizi olarak döndür, anlamına gelir.

Böylece `parca` değişkeninin içeriği `{30, 40, 50}` olur. Array slicing ile diziyi bölüp sadece işimize yarayan kısmı kullanmış oluruz.

Bir diğer yöntem ise:

```csharp
var parca = sayilar[2..5];
```

Bu yöntemde ise `..` elemanını kullanarak dizinin istediğimiz bölümünü aldık. Köşeli parantezler içinde yer alan ilk sayı **başlangıç indexi** ikinci sayı ise **bitiş indexi** olarak kullanılır. Burada dikkat edilmesi gereken nokta başlangıç indexi sayıma dahilken bitiş indexi dahil değildir. Yani örnek üzerinden bakacak olursak index numarası 2 olan elemandan başlayıp index numarası 5 olan elemana kadar olan bölümü almış olduk. Index numarası 5 olan eleman (60) dahil edilmedi.

**Not:**
Eğer başlangıç indexini yazmayıp `[..bitis]` şeklinde yazarsak otomatik olarak dizinin en başından başlayacaktır.
Benzer şekilde başlangıç indexini yazıp bitiş indexini yazmazsak da belirttiğimiz başlangıç indexinden başlar ve dizinin sonuna kadar gider. Bitiş indexi yazmadığımız için son elemanı da dahil eder.
Eğer başlangıç ve bitiş indexi kullanmazsak yani `[..]` şeklinde yazarsak dizinin tamamını alır.