class Hewan {
    constructor(nama) {
        let _nama = nama; // variabel private

        // getter
        this.getNama = function () {
            return _nama;
        }

        // setter
        this.setNama = function (nama) {
            _nama = nama;
        }
    }
}

let hewan = new Hewan('Kucing');
console.log(hewan.getNama()); // Output: Kucing

hewan.setNama('Anjing');
console.log(hewan.getNama()); // Output: Anjing