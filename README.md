# Travel-API
Tugas PESILAT Alkademi - Memperbaiki Source Code dan Membuat Travel API
# Dokumentasi API

Berikut adalah dokumentasi API untuk layanan Travel API.

## Daftar Endpoint API

### Registrasi Pengguna

**URL**: `/api/auth/signup`
**Metode**: POST
**Deskripsi**: Endpoint ini digunakan untuk melakukan registrasi pengguna baru.

### Masuk Pengguna

**URL**: `/api/auth/signin`
**Metode**: POST
**Deskripsi**: Endpoint ini digunakan untuk melakukan masuk (login) pengguna.

### Daftar Destinasi

**URL**: `/api/users/destination/list`
**Metode**: GET
**Deskripsi**: Endpoint ini digunakan untuk mendapatkan daftar destinasi.

### Pesan Tiket

**URL**: `/api/users/ticket/order`
**Metode**: POST
**Deskripsi**: Endpoint ini digunakan untuk memesan tiket.

### Daftar Tiket yang Dibeli

**URL**: `/api/users/myticket`
**Metode**: GET
**Deskripsi**: Endpoint ini digunakan untuk mendapatkan daftar tiket yang telah dibeli oleh pengguna.

## Penggunaan Token

Beberapa endpoint memerlukan token akses yang valid untuk melakukan permintaan. Token akses harus disertakan dalam header `access-token`.

Contoh penggunaan token dalam header:

