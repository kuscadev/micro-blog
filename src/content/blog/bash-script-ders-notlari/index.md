--- 
title: "Bash Script Ders Notlarım - 1"   
description: "Temel bash script yazım kurallarını, değişken kullanımını ve kullanıcı girdisi almayı anlatan kapsamlı bir başlangıç rehberi."
slug: bash-script-ders-notlari-1
date: "2025.04.28"   
draft: false   
tags:   
- Bash Script   
---

Selamlar. Bu yazı, Bash Script yazmaya yeni başlayanlar için temel bilgileri içeriyor. Değişkenler, diziler ve kullanıcı girdisi alma gibi konulara değinerek Bash ile otomasyon sağlamanın temel taşlarını açıklıyorum. İlerleyen yazılarda fonksiyonlar, hata yönetimi ve gelişmiş Bash tekniklerine değineceğim. Serinin sonunda ise ufak bir proje örneği olacak.

## Bash Script Nedir
Bash Scripting, komut satırında otomasyon sağlamak için Bash kabuğunda yazılan betik dosyalarıdır. Komutları sıralı bir şekilde çalıştırarak görevleri otomatikleştirmeye, sistem yönetimini kolaylaştırmaya ve tekrar eden işlemleri hızlandırmaya yardımcı olur.   
## Shebang Nedir?   
```
#!/bin/bash

```
Yukarıdaki şekilde yazılan shebang betiğin hangi yorumlayıcı ile çalıştırılacağını belirlemek için kullanılır. Örnekte `/bin/bash` olarak belirtilmiştir. Yani bu betik bash kabuğu kullanılarak yorumlanacaktır. Benzer şekilde Python için:   
```
#!/bin/python3

```
## Değişkenler   
Bash Scripting'de değişken tanımlarken dikkat etmemiz gereken nokta değişken adı ve eşittir işareti arasında boşluk olmaması gerektiğidir. Eğer boşluk bırakırsak betik hata verecektir.   
```
#!/bin/bash
ad="Dünya"

```
Yukarıdaki örnekte `ad` adında bir değişken oluşturduk ve bu değişkenin değeri olarak "Dünya" kelimesini atadık.   
### Özel Değişkenler   
- $0 : Scriptin adı.   
- $1, $2,... : Komut satırı argümanları.   
- $# : Komut satırı argümanlarının sayısı.   
- $@ : Tüm komut satırı argümanları.   
- $? : Son çalıştırılan kodun çıkış durumu. (Çıktı:0 : Başarılı, Çıktı :0 dışı : Hata)   
- $$ : Scriptin işlem kimliği. (PID)   
- $\_ : Çalıştırılan son komutun son argümanı.   
   
**Örnek:**   
```
#!/bin/bash
echo "Script adı: $0"
echo "Birinci argüman: $1"
echo "Argüman sayısı: $#"

```
Bu script `./script.sh arguman1 arguman2` şeklinde çalıştırıldığında çıktısı:   
```
Script adı: ./script.sh
Birinci argüman: arguman1
Argüman sayısı: 2

```
### Çevresel Değişkenler   
Sistemdeki kullanıcı ve işlem bilgilerini saklar.   
- `HOME` : Kullanıcının ana dizini.   
- `PATH` : Çalıştırılabilir dosyaların aranacağı dizinlerin listesi.   
- `USER` : Geçerli kullanıcı adı.   
- `PWD` : Geçerli çalışma dizini.   
- `SHELL` : Kullanıcının kabuğu.   
   
**Örnek:**   
```
#!/bin/bash
echo "Kullanıcı adı: $USER"
echo "Ana dizin: $HOME"

```
## Sabitler   
Bash'te sabitler değerleri değiştirilemeyen değişkenlerdir.
Bash, değişkenlerin değerlerini değiştirmeyi engelleyen yerleşik bir sabit tanımlama sistemi sunmaz ama sabitler tanımlayabilmek için çeşitli teknikler vardır.   
### Sabit Tanımlama   
Sabit tanımlamak için `readonly` yapısını kullanabiliriz.   
```
#!/bin/bash
readonly PI=3.14

```
Yukarıdaki örnekte PI değişkeni `readonly` yöntemi ile sabit olarak tanımlanmıştır. Değiştirilmek istendiğinde hata verecektir.   
## Diziler   
Bash'ta diziler birden çok değeri tek bir değişkende saklamamızı sağlar.
Diziler, indekslenmiş elemanlar veya anahtar-değer çiftleri olarak tanımlanır.   
### İndekslenmiş Diziler   
İndekslenmiş dizilerde elemanlara indeks numaraları ile erişilir.   
### Dizi Tanımlama ve Atama   
```
#!/bin/bash
# İndekslenmiş Dizi Tanımlama ve Atama:
meyveler=("Elma" "Armut" "Çilek")

# Dizinin belli bir elemanına erişim:
echo "Birinci meyve: ${meyveler[0]}"

# Dizinin tüm elemanlarına erişim:
echo "Tüm elemanlar: ${meyveler[@]}"

# Dizinin uzunluğu:
echo "Dizi uzunluğu: ${#meyveler[@]}"

```
Yukarıdaki örnekte "meyveler" adında bir dizi tanımlanmış ve elemanları olarak "Elma", "Armut", "Çilek" atanmıştır.   
Dizinin belirli bir elemanına erişmek için `dizi\_adı[indeks numarası]` kullanılır. Dizinin tüm elemanlarına erişmek için indeks numarası yerine "@" kullanılır.   
### Anahtar-Değer Çiftleri (Associative Arrays)   
Associative arrays, anahtar-değer çiftlerini saklamak için kullanılır ve Bash 4.0 sonrası sürümlerde desteklenir.   
```
#!/bin/bash
# Associative Array Tanımlama ve Atama:

# Tanımlama:
declare -A calisan

# Atama:
calisan[isim]="Oğuzhan"
calisan[soyisim]="Kuşca"
calisan[yas]=24

# Değerleri okuma:
echo "Çalışan adı: ${calisan[isim]}"
echo "Çalışan yaşı: ${calisan[yas]}"

# Tüm anahtarları ve değerleri listeleme:
echo "Tüm anahtarlar: ${!calisan[@]}"
echo "Tüm değerler: ${calisan[@]}"

```
Yukarıdaki örnekte `declare -A` kullanılarak "calisan" adında bir associative array tanımlanmıştır. Sonrasında `calisan[anahtar]=Değer` şeklinde anahtar-değer atamaları yapılmıştır.   
Elemanlara erişmek için `dizi\_adı[anahtar]` sözdizimi kullanılır.   
***NOT:*** Değişkenler, scriptlerde bilgi saklamak ve işlemek için kullanılırken, çevresel ve özel değişkenler sistem ve kullanıcı bilgilerini sağlar.   
## Kullanıcıdan Girdi Alma   
Bash scriptlerinde kullanıcıdan girdi almak için `read` komutunu kullanabiliriz.   
**Temel kullanım:**   
```
#!/bin/bash
echo "İsminizi girin"
read isim
echo "Merhaba $isim"

```
Yukarıdaki örnekte kullanıcıdan ismini girmesini istedik ve sonrasında bu adı kullanarak mesaj yazdırdık.   
### read Komutunun Seçenekleri   
- -p : Kullanıcıya bir istem mesajı göstermek için kullanılır.   
- -s : Kullanıcı girdisini gizlemek için kullanılır. (Şifre gibi alanlarda kullanılabilir.)   
- -t : Girdi için belirli bir süre beklemek için kullanılır.   
- -n : Belirli sayıda karakter girildikten sonra otomatik olarak devam eder.   
   
**Örnekler:**   
```
#!/bin/bash

# İstem mesajı göstermek:
read -p "Lütfen yaşınızı girin:" yas
echo "Yaşınız: $yas"

# Gizli girdi almak:
read -sp "Lütfen şifrenizi girin:" sifre
echo
echo "Şifreniz alındı."

# Timeout ile girdi alma:
if read -t 5 -p "5 saniye içinde adınızı yazınız:" girdi
then
 echo "Adınız: $girdi"
else
 echo "Zaman aşımı!"
fi

# Belirli sayıda karakter girdikten sonra devam etmek:
read -n 1 -p "Bir karakter giriniz:" karakter
echo
echo "Girdiğiniz karakter: $karakter"

```
---
Bu yazıda Bash script yazmaya başlamanın temellerini öğrendik. Değişkenler, sabitler ve diziler gibi temel konulara göz attık. Bir sonraki yazılarda, daha ileri seviye konulara (örneğin fonksiyonlar, hata yönetimi) geçeceğiz.
