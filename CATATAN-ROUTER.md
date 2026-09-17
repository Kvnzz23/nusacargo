## App Router vs Pages Router

App Router dan Pages Router merupakan dua pendekatan routing yang tersedia di Next.js. Pages Router menggunakan folder `pages` sebagai dasar routing. Setiap file di dalam folder tersebut dapat menjadi sebuah halaman berdasarkan struktur URL. Pages Router juga menggunakan beberapa fitur seperti `getServerSideProps` dan `getStaticProps` untuk kebutuhan pengambilan data.

App Router menggunakan folder `app` dan diperkenalkan untuk mendukung fitur React dan Next.js yang lebih baru. Dengan App Router, komponen dapat menggunakan Server Components secara default, serta menyediakan fitur seperti nested layouts, loading UI, error UI, dan streaming.

Keduanya masih dapat digunakan dalam project Next.js, tetapi App Router menyediakan model arsitektur yang lebih modern. Perbedaan utamanya terletak pada struktur routing, mekanisme pengambilan data, penggunaan Server Components, dan cara mengatur layout. Pemilihan router bergantung pada kebutuhan project dan struktur aplikasi yang ingin dibangun.
