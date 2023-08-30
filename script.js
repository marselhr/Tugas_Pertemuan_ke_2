document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const table = document.querySelector("#tabel-data");
  const tableBody = document.querySelector("#tabel-data tbody");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Ambil nilai dari input dan select
    const nama = document.querySelector("#nama").value;
    const mataKuliah = document.querySelector("#mata-kuliah").value;
    const grade = document.querySelector("#grade").value;

    // melakukan Konversi grade menjadi angka sesuai skala yang diberikan
    let nilai;
    switch (grade) {
      case "A":
        nilai = 4;
        break;
      case "B":
        nilai = 3;
        break;
      case "C":
        nilai = 2;
        break;
      case "D":
        nilai = 1;
        break;
      case "E":
        nilai = 0;
        break;
      default:
        nilai = 0; // Jika nilai tidak valid, anggap sebagai E
        break;
    }

    // Buat baris baru dalam tabel
    const newRow = document.createElement("tr");

    // Tambahkan data ke dalam baris
    newRow.innerHTML = `
        <td>${nama}</td>
        <td>${mataKuliah}</td>
        <td>${grade}</td>
        <td>${nilai}</td>
      `;

    // Tambahkan baris ke dalam tabel di atas (sebagai elemen pertama) dan munculkan tabel
    if (tableBody.firstChild) {
      table.style.display = "block";
      tableBody.insertBefore(newRow, tableBody.firstChild);
    } else {
      tableBody.appendChild(newRow);
    }

    // Kosongkan input setelah data ditambahkan/ dihitung
    document.querySelector("#nama").value = "";
    document.querySelector("#mata-kuliah").value = "";
    document.querySelector("#grade").value = ""; // Mengatur nilai default
  });
});
