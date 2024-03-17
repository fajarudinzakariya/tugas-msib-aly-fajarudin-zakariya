// Membuat kelas dasar (parent class)
class Hewan {
    constructor(nama) {
        this.nama = nama;
    }

    bergerak() {
        console.log(`${this.nama} bergerak.`);
    }
}

// Membuat kelas turunan (child class)
class Burung extends Hewan {
    constructor(nama) {
        super(nama); // Memanggil constructor dari kelas Hewan
    }

    terbang() {
        console.log(`${this.nama} terbang.`);
    }
}

// Membuat objek dari kelas Burung
let burungKecil = new Burung("Burung Kecil");

// Memanggil metode dari kelas Hewan dan Burung
burungKecil.bergerak();
burungKecil.terbang();