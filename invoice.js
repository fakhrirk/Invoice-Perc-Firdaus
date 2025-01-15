function showAddItemForm() {
  const btntambah = document.getElementById("btntambah");
  btntambah.style.display = "none";
  document.getElementById("addItemForm").style.display = "block";
}

function fetchItemDetails() {
  const itemCode = document.getElementById("itemCode").value;
  const itemDetails = {
    // Rumah Sakit Cahaya Bunda
    RSCB01: { name: "Form Catatan Perkembangan Pasien Terintegrasi (CPPT)", price: 16000 },
    RSCB02: { name: "Form Pengkajian Awal Medis Pasien Rawat Jalan", price: 15000 },
    RSCB03: { name: "Form Pengkajian Keperawatan Pasien Rawat Jalan", price: 16000 },
    RSCB04: { name: "Form Lembar Triage", price: 100000 },
    RSCB05: { name: "Form Tata Tertib Pasien Rawat Jalan", price: 52000 },
    RSCB06: { name: "Form Monitoring Cairan", price: 15000 },
    RSCB07: { name: "Form Pemberian Edukasi,Informasi, Dan Evaluasi", price: 30000 },
    RSCB08: { name: "Form Persetujuan/Penolakan Tindakan Kedokteran", price: 15000 },
    RSCB09: { name: "Kartu Instruksi Pengobatan (KIP)", price: 16000 },
    RSCB10: { name: "Form Hak & Kewajiban Pasien", price: 52000 },
    RSCB11: { name: "Form Pemberian informasi Tindakan Kedokteran", price: 15000 },
    RSCB12: { name: "Form Tata Tertib Pasien Rawat Inap", price: 52000 },
    RSCB13: { name: "Permintaan dan Tanda Terima Barang [2  Ply]", price: 7300 },
    RSCB14: { name: "Profil Ringkas Medis Rawat Jalan", price: 16000 },
    RSCB15: { name: "Resep Dokter", price: 8500 },
    RSCB16: { name: "Surat Pernyataan Peningkatan Kelas Perawatan Atas Permintaan Sendiri", price: 15000 },
    RSCB17: { name: "Formulir Pemilihan DPJP", price: 15000 },
    RSCB18: { name: "Form Pemeriksaan Laboratorium", price: 21000 },
    RSCB19: { name: "Form Transfer Pasien", price: 16000 },
    RSCB20: { name: "Form Monitoring Bundles Hais", price: 15000 },
    RSCB21: { name: "Surat Pernyataan Hal Pemilihan Dokter Anak", price: 15000 },
    RSCB22: { name: "Form Jadwal Pemberian Obat", price: 15000 },
    RSCB23: { name: "Pengkajian Keperawatan UGD", price: 16000 },
    RSCB24: { name: "Persetujuan Umum", price: 52000 },
    RSCB25: { name: "Etiket Gizi", price: 10000 },
    RSCB26: { name: "Form Pemeriksaan Radiologi", price: 21000 },
    RSCB27: { name: "Form Pemberian Informasi Anestesi Spinal", price: 15000 },
    RSCB28: { name: "Pengkajian Medis UGD", price: 16000 },
    RSCB29: { name: "Ringkasan Pasien Pulang", price: 52000 },
    RSCB30: { name: "Form Pengkajian Ulang Resiko Pasien Jatuh Anak", price: 15000 },
    RSCB31: { name: "Surat Rujukan", price: 15000 },
    RSCB32: { name: "Checklist Keselamatan Operasi/Tindakan Invansif", price: 15000 },
    RSCB33: { name: "Form Perincian Harian (PH) Rawat Inap", price: 8000 },
    RSCB34: { name: "Ringkasan Masuk dan Keluar", price: 15000 },
    RSCB35: { name: "Grafik Kurva Harian", price: 15000 },
    RSCB36: { name: "Salinan Resep", price: 5600 },
    RSCB37: { name: "Form Obat dari depo", price: 4200 },
    RSCB38: { name: "Formulir DPJP", price: 8000 },
    RSCB39: { name: "Form Pengkajian Awal Keperawatan Anak Rawat Inap", price: 61000 },
    RSCB40: { name: "Asuhan Keperawatan Perioperatif", price: 45500 },
    RSCB41: { name: "Laporan Anestesi", price: 45500 },
    RSCB42: { name: "Surat Ket Dokter/Surat Ket Sehat [2Ply]", price: 17000 },
    RSCB43: { name: "Surat Ket Dokter/Surat Ket Sakit [2Ply]", price: 9500 },
    RSCB44: { name: "Retur Farmasi", price: 3500 },
    RSCB45: { name: "Amplop 90 PPS Logo", price: 40000 },
    RSCB46: { name: "Bukti Pulang Pasien", price: 4750 },
    RSCB47: { name: "Form Pengkajian Kebidanan Awal Pasien Ranap", price: 46500 },
    RSCB48: { name: "Form Pengkajian Awal Medis Pasien Rawat Inap", price: 15000 },
    RSCB49: { name: "Form Pendaftaran Ranap (One Day Care)", price: 15000 },
    RSCB50: { name: "Form Penandaan Lokasi Operasi", price: 16000 },
    RSCB51: { name: "Form Laporan Operasi", price: 15000 },
    RSCB52: { name: "Form Pengkajian Bayi Lahir", price: 15000 },
    RSCB53: { name: "Form Pengkajian Medis Pra Anestesi / Induksi", price: 15000 },
    RSCB54: { name: "Surat Keterangan Kelahiran ( 2 Play )", price: 34000 },

    // Rumah Sakit Permata Kuningan
    RSPK01: { name: "Map RM", price: 5000 },
    RSPK02: { name: "Map EKG USG", price: 5500 },
    RSPK03: { name: "Formulir surat pengantar ranap ( SPRI )", price: 11000 },
    RSPK04: { name: "Formulir surat pernyataan pasien ranap ( SPPRI )", price: 22000 },
    RSPK05: { name: "Formulir General Concent", price: 17000 },
    RSPK06: { name: "Assesment keperawatan pasien hemodialisis (BB)", price: 17000 },
    RSPK07: { name: "Formulir informed concent pernyataan informasi tindakan anestesi", price: 16000 },
    RSPK08: { name: "Formulir rujukan eksternal", price: 16000 },
    RSPK09: { name: "Surat persetujuan pulang ( 2 ply )", price: 7333.34 },
    RSPK10: { name: "Form CPPO", price: 16000 },
    RSPK11: { name: "Catatan edukasi terintegrasi", price: 17000 },
    RSPK12: { name: "Lembar EKG", price: 700 },
    RSPK13: { name: "Lembar USG", price: 700 },
    RSPK14: { name: "Buku catatan pemberian obat", price: 10500 },
  };

  if (itemDetails[itemCode]) {
    const itemName = itemDetails[itemCode].name;
    const itemPrice = itemDetails[itemCode].price.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
    addInvoiceItem(itemName, itemPrice);
  } else {
    alert("Kode barang tidak ditemukan");
  }
}

function addInvoiceItem(name, price) {
  const table = document.getElementById("invoiceItems");
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  const cell5 = row.insertCell(4);

  cell1.innerHTML = name;
  cell2.innerHTML = '<input type="number" class="form-control" value="1" min="1" onchange="updateTotal(this)" />';
  cell3.innerHTML = price;
  cell4.innerHTML = price;
  cell5.innerHTML = '<button type="button" class="btn btn-danger" onclick="removeInvoiceItem(this)">Hapus</button>';

  updateTotal();
}

function updateTotal() {
  let grandTotal = 0;
  const rows = document.getElementById("invoiceItems").rows;
  for (let i = 0; i < rows.length; i++) {
    const quantity = rows[i].cells[1].querySelector("input").value;
    const price = parseFloat(rows[i].cells[2].innerHTML.replace(/[^0-9,-]+/g, "").replace(",", "."));
    const total = quantity * price;
    rows[i].cells[3].innerHTML = total.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
    grandTotal += total;
  }
  document.getElementById("totalAmount").value = grandTotal.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
}

function addInvoiceItem(name, price) {
  const table = document.getElementById("invoiceItems");
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  const cell5 = row.insertCell(4);

  cell1.innerHTML = name;
  cell2.innerHTML = '<input type="number" class="form-control" value="1" min="1" onchange="updateTotal()" />';
  cell3.innerHTML = price;
  cell4.innerHTML = price;
  cell5.innerHTML = '<button type="button" class="btn btn-danger" onclick="removeInvoiceItem(this)">Hapus</button>';

  updateTotal();
}

function removeInvoiceItem(button) {
  const row = button.closest("tr");
  row.remove();
  updateTotal();
}

function removeInvoiceItem(button) {
  const row = button.closest("tr");
  row.remove();
  updateTotal();
}

// otomatis akan mengatur tanggal saat ini saat menambahkan invoice
$(document).ready(function () {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate().toString().padStart(2, "0")}/${(currentDate.getMonth() + 1).toString().padStart(2, "0")}/${currentDate.getFullYear()}`;
  $("#invoiceDate").val(formattedDate);
});

$("#invoiceForm").submit(function (event) {
  event.preventDefault();
  updateTotalAmount();
});

// print nota

function printNota() {
  const customerName = $("#customerName").val();
  const NoPO = $("#NoPO").val();
  const invoiceDate = $("#invoiceDate").val();
  const items = [];

  $("#invoiceItems tr").each(function () {
    const name = $(this).find("td:eq(0)").text();
    const quantity = $(this).find("td:eq(1) input").val();
    const price = $(this).find("td:eq(2)").text();
    const total = $(this).find("td:eq(3)").text();

    items.push({
      name: name,
      quantity: quantity,
      price: price,
      total: total,
    });
  });

  const totalAmount = $("#totalAmount").val();

  const invoiceContent = `
  <html>
    <head>
        <title>Nota</title>
        <style>
            body{
                font-family: Arial, sans-serif;
                margin: 20px;
            }
      .logo {
        width: 250px;
      }

      .name{
        margin-top: 30px;
      }
            table{
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
            }
            th,td{
                border: 1px solid #dddddd;
                text-align: left;
                padding: 8px;
            }

            .total{
                font-weight: bold;
            }

            .ttd {
              display: flex;
              justify-content: space-around;
              font-weight: bold;
              margin-top: 5%;
            }
        </style>
    </head>

    <body>
        <img src="asssets/Logo1.png">
        <p class="name" ><strong>Nama Customer : </strong>${customerName}</p>
        <p><strong>Nomor PO : </strong>${NoPO}</p>
        <p><strong>Tanggal : </strong>${invoiceDate}</p>
        <table>
            <thead>
                <tr>
                    <th>Nama Barang</th>
                    <th>Jumlah</th>
                    <th>Harga Satuan</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                ${items
                  .map(
                    (item) => `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.quantity}</td>
                        <td>${item.price}</td>
                        <td>${item.total}</td>
                    </tr>
                    `
                  )
                  .join("")}
            </tbody>
        </table>

        <p class="total">Total Harga: ${totalAmount}</p>
    <div class="ttd">
      <p>Pengirim</p>
      <p>Penerima</p>
    </div>
    </body>
</html>
  `;

  const printWindow = window.open("", "_blank");
  printWindow.document.write(invoiceContent);
  printWindow.document.close();
  printWindow.print();
}

// print tanda terima
function printTandaTerima() {
  const customerName = $("#customerName").val();
  const NoPO = $("#NoPO").val();
  const invoiceDate = $("#invoiceDate").val();
  const items = [];

  $("#invoiceItems tr").each(function () {
    const name = $(this).find("td:eq(0)").text();
    const quantity = $(this).find("td:eq(1) input").val();

    items.push({
      name: name,
      quantity: quantity,
    });
  });

  const invoiceContent = `
  <html>
    <head>
        <title>Tanda Terima</title>
        <style>
            body{
                font-family: Arial, sans-serif;
                margin: 20px;
            }
      .logo {
        width: 250px;
      }

      .name{
        margin-top: 30px;
      }
            table{
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
            }
            th,td{
                border: 1px solid #dddddd;
                text-align: left;
                padding: 8px;
            }
          .ttd {
            display: flex;
            justify-content: space-around;
            font-weight: bold;
            margin-top: 5%;
      }
        </style>
    </head>

    <body>
        <img src="asssets/Logo1.png">
        <p class="name"><strong>Nama Customer : </strong>${customerName}</p>
        <p><strong>Nomor PO : </strong>${NoPO}</p>
        <p><strong>Tanggal : </strong>${invoiceDate}</p>
        <table>
            <thead>
                <tr>
                    <th>Nama Barang</th>
                    <th>Jumlah</th>
                </tr>
            </thead>
            <tbody>
                ${items
                  .map(
                    (item) => `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.quantity}</td>
                    </tr>
                    `
                  )
                  .join("")}
            </tbody>
        </table>
    <div class="ttd">
      <p>Pengirim</p>
      <p>Penerima</p>
    </div>
    </body>
</html>
  `;

  const printWindow = window.open("", "_blank");
  printWindow.document.write(invoiceContent);
  printWindow.document.close();
  printWindow.print();
}

function showChat() {
  const sideBar = document.querySelector(".chat-container");
  sideBar.style.display = "flex";
  const btnOpen = document.querySelector(".btnSC-cntnr");
  btnOpen.style.display = "none";
}

function closeChat() {
  const hdnChat = document.querySelector(".chat-container");
  hdnChat.style.display = "none";
  const btnOpen = document.querySelector(".btnSC-cntnr");
  btnOpen.style.display = "flex";
}

const hdnChat = document.querySelector(".btnCls-cntnr");
const chatContainer = document.querySelector(".chat-container");

hdnChat.addEventListener("click", () => {
  chatContainer.classList.remove("show");
  chatContainer.classList.add("hidden");
});

function downloadInvoice() {
  const invoiceElement = document.createElement("div");
  invoiceElement.style.padding = "20px";
  invoiceElement.style.background = "white";

  const customerName = $("#customerName").val();
  const NoPO = $("#NoPO").val();
  const invoiceDate = $("#invoiceDate").val();
  const items = [];

  $("#invoiceItems tr").each(function () {
    const name = $(this).find("td:eq(0)").text();
    const quantity = $(this).find("td:eq(1) input").val();
    const price = $(this).find("td:eq(2)").text();
    const total = $(this).find("td:eq(3)").text();

    items.push({
      name: name,
      quantity: quantity,
      price: price,
      total: total,
    });
  });

  const totalAmount = $("#totalAmount").val();

  invoiceElement.innerHTML = `
    <img src="asssets/Logo1.png">
    <hr>
    <p><strong>Nama Customer:</strong> ${customerName}</p>
    <p><strong>No PO:</strong> ${NoPO}</p>
    <p><strong>Tanggal:</strong> ${invoiceDate}</p>
    <h3>Detail Barang:</h3>
    <table style="width:100%; border-collapse: collapse;">
      <tr>
        <th style="border:1px solid black; padding:8px;">Nama Barang</th>
        <th style="border:1px solid black; padding:8px;">Jumlah</th>
        <th style="border:1px solid black; padding:8px;">Harga</th>
        <th style="border:1px solid black; padding:8px;">Total</th>
      </tr>
      ${items
        .map(
          (item) => `
        <tr>
          <td style="border:1px solid black; padding:8px;">${item.name}</td>
          <td style="border:1px solid black; padding:8px;">${item.quantity}</td>
          <td style="border:1px solid black; padding:8px;">${item.price}</td>
          <td style="border:1px solid black; padding:8px;">${item.total}</td>
        </tr>
      `
        )
        .join("")}
    </table>
    <p style="margin-top:20px;"><strong>Total:</strong> ${totalAmount}</p>
  `;

  document.body.appendChild(invoiceElement);

  // html2canvas(invoiceElement).then((canvas) => {
  //   const pdf = new jsPDF();
  //   const imgData = canvas.toDataURL('image/jpeg', 1.0);
  //   pdf.addImage(imgData, 'JPEG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
  //   pdf.save(`Invoice_${customerName}_${NoPO}.pdf`);
  // });

  html2canvas(invoiceElement).then((canvas) => {
    const imgData = canvas.toDataURL("image/png", 1.0);

    const link = document.createElement("a");
    link.href = imgData;
    link.download = `Invoice_${customerName}_${NoPO}.png`;

    link.click();

    document.body.removeChild(invoiceElement);
  });
}

// dengan kodingan ini user tidak dapat mengklik tombol kiri pada mouse
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

if (/[<>"'`]/g.test(userId) || /[<>"'`]/g.test(password)) {
  alert("Karakter khusus tidak diizinkan");
  return false;
}
