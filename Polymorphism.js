// Membuat kelas dasar (parent class)
class Hewan {
    bergerak() {
        console.log('Hewan bergerak');
    }
}

// Membuat kelas turunan (child class)
class Burung extends Hewan {
    bergerak() {
        console.log('Burung terbang');
    }
}

class Ikan extends Hewan {
    bergerak() {
        console.log('Ikan berenang');
    }
}

// Membuat objek dari kelas Hewan, Burung, dan Ikan
let hewan = new Hewan();
let burung = new Burung();
let ikan = new Ikan();

// Memanggil metode bergerak pada setiap objek
hewan.bergerak();
burung.bergerak();
ikan.bergerak();