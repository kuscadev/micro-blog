---
title: "AutoFiler"
description: "Karmaşık İndirilenler klasörünüzü saniyeler içinde düzenleyen minimalist bir Python otomasyon aracı."
slug: autofiler
date: "12/09/2025"
repoURL: "https://github.com/kuscadev/autofiler"
tags:
  - Python
---

## AutoFiler

> *Karmaşık İndirilenler klasörünüzü saniyeler içinde düzenleyen minimalist bir Python otomasyon aracı.*

---

## Nedir?
**AutoFiler**, dağınık dosya dizinlerini (özellikle İndirilenler/Downloads klasörünü) dosya uzantılarına göre otomatik olarak kategorize eden ve ilgili alt klasörlere taşıyan açık kaynaklı bir CLI (Komut Satırı) aracıdır.

Karmaşık `if-else` blokları yerine, genişletilebilir bir **Sözlük (Dictionary) Yapısı** ve `shutil` kütüphanesini kullanır.

## Nasıl Çalışır?

**Öncesi:**
```text
Downloads/
├── odev.docx
├── tatil.jpg
├── kurulum.exe
├── sarki.mp3
└── arsiv.zip
```

**Sonrası**
```text
Downloads/
├── Documents/
│   └── odev.docx
├── Images/
│   └── tatil.jpg
├── Setup_Files/
│   └── kurulum.exe
├── Music/
│   └── sarki.mp3
└── Archives/
    └── arsiv.zip
```

## Özellikler

* **Çapraz Platform:** Linux, Windows ve macOS üzerinde sorunsuz çalışır (`os.path` ile dinamik yol tespiti).
* **Hafif ve Hızlı:** Sadece Python standart kütüphanelerini kullanır, harici bir bağımlılık gerektirmez.
* **Güvenli:** Gizli dosyaları (`.`) ve scriptin kendisini atlar. Hata oluşursa işlemi durdurmaz, raporlar.
* **Kolay Özelleştirilebilir:** Sadece sözlük yapısını düzenleyerek yeni dosya türleri ekleyebilirsiniz.

---

## Kurulum ve Kullanım

Bu projeyi bilgisayarınıza klonlayın ve çalıştırın. Bu kadar basit.

```bash
# 1. Depoyu klonlayın
git clone https://github.com/kuscadev/autofiler.git

# 2. Proje dizinine girin
cd autofiler

# 3. Scripti çalıştırın
python3 autofiler.py