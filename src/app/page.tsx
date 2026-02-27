"use client";

import { useState } from "react";

type TargetSize = "Perusahaan Besar" | "Perusahaan Kecil-Menengah";
type FieldType =
  | "FMCG"
  | "Banking & Fintech"
  | "Telecommunications"
  | "Technology"
  | "Food & Snacks"
  | "Beverages"
  | "Desserts"
  | "Beauty & Grooming"
  | "Education"
  | "others";

export default function Home() {
  const [companyName, setCompanyName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [targetSize, setTargetSize] = useState<TargetSize>("Perusahaan Besar");
  const [field, setField] = useState<FieldType>("FMCG");
  const [senderName, setSenderName] = useState("");

  const [generatedChat, setGeneratedChat] = useState("");
  const [copied, setCopied] = useState(false);

  const myName = senderName ? senderName : "[Nama Anda]";

  const generateTemplate = () => {
    if (!companyName) {
      alert("Harap isi Nama Perusahaan terlebih dahulu.");
      return;
    }

    const displayName = brandName ? brandName : companyName;

    const intro = `Selamat pagi/siang Bapak/Ibu tim ${displayName},\n\nSemoga pesan ini mendapati Bapak/Ibu dalam keadaan baik. Perkenalkan, saya ${myName} dari Panitia I/O Festival 2026 (BEM FTI UNTAR). Kami sedang mempersiapkan festival teknologi tahunan terbesar kami pada 4-5 Juni 2026, yang akan menjadi pusat berkumpulnya ribuan mahasiswa, Gen Z, dan tech enthusiast di Jakarta.`;

    const outroBesar = `Apabila skema Main Tenant belum sesuai, kami menyediakan berbagai opsi partisipasi branding lainnya. Sebagai referensi, saya telah melampirkan Proposal Sponsorship beserta detail denah lokasinya.\n\nKami sangat terbuka untuk menjadwalkan pertemuan singkat guna membahas potensi kolaborasi ini. Apakah sekiranya Bapak/Ibu memiliki waktu luang di minggu ini?\n\nTerima kasih atas waktu dan perhatiannya.\n\nHormat kami,\n${myName}\nI/O Festival 2026 - BEM FTI UNTAR`;

    // For specific cases like Banking & Fintech, the prompt didn't include "beserta detail denah lokasinya." in outro,
    // but instructed to use the common outro ("semuanya diapit oleh sapaan pembuka dan penutup yang sama seperti pada nomor 1").
    // We will use the FMCG outro for all to keep it simple and compliant with "secara fungsi semuanya diapit oleh sapaan pembuka dan penutup yang sama".

    const outroKecil = `Selain posisi Tenant, kami juga terbuka jika ${displayName} berminat mengambil peran lebih besar sebagai Sponsor Utama. Sebagai referensi, saya telah melampirkan Proposal Sponsorship beserta detail denah lokasinya.\n\nKami sangat terbuka untuk menjadwalkan pertemuan singkat guna membahas potensi kolaborasi ini. Apakah sekiranya Bapak/Ibu memiliki waktu luang di minggu ini?\n\nTerima kasih atas waktu dan perhatiannya.\n\nHormat kami,\n${myName}\nI/O Festival 2026 - BEM FTI UNTAR`;

    let body = "";

    if (field === "FMCG") {
      if (targetSize === "Perusahaan Besar") {
        body = `Produk ${displayName} sudah menjadi bagian dari keseharian. Kami menawarkan mass exposure melalui posisi Main Tenant untuk menjaga top of mind awareness di kalangan Gen Z pada acara kami.\n\nMelalui kolaborasi ini, ${displayName} akan mendapatkan keuntungan strategis berikut:\n\n- Izin roaming sampling ke seluruh area festival.\n- Booth ukuran besar di Zone A yang pasti dilewati pengunjung.\n- Ruang luas untuk brand activation atau games.`;
      } else {
        body = `Kami ingin menawarkan ${displayName} kesempatan untuk menjual paket bundling produk kebutuhan mahasiswa dengan harga spesial di acara kami.\n\nMelalui kolaborasi ini, ${displayName} akan mendapatkan keuntungan strategis berikut:\n\n- Menghabiskan stok produk dengan perputaran cepat.\n- Melihat respon langsung mahasiswa terhadap varian produk Anda.`;
      }
    } else if (field === "Banking & Fintech") {
      if (targetSize === "Perusahaan Besar") {
        body = `Sebagai pemimpin di sektor finansial, kami melihat kehadiran ${displayName} sangat strategis sebagai mitra perbankan utama. Mahasiswa FTI UNTAR adalah digital native yang merupakan target potensial untuk akuisisi nasabah baru.\n\nMelalui kolaborasi ini, ${displayName} akan mendapatkan keuntungan strategis berikut:\n\n- Akses langsung pembukaan rekening/aplikasi ke ribuan mahasiswa.\n- Spot booth paling premium (Zone A) secara eksklusif.\n- Izin roaming untuk membagikan brosur/QRIS keliling area.`;
      } else {
        body = `Kami melihat solusi keuangan yang ditawarkan ${displayName} sangat relevan bagi mahasiswa. Kami mengundang Anda membuka booth untuk memperkenalkan aplikasi atau layanan Anda secara langsung.\n\nKeuntungan yang didapat:\n\n- Kesempatan mendapatkan ratusan downloader baru di tempat.\n- Membantu mahasiswa melakukan registrasi atau KYC langsung di booth.`;
      }
    } else if (field === "Telecommunications") {
      if (targetSize === "Perusahaan Besar") {
        body = `Konektivitas adalah nadi bagi mahasiswa IT. Kami menawarkan ${displayName} posisi Main Tenant untuk mendominasi share of mind di kalangan Gen Z pada acara kami.\n\nKeuntungan strategis:\n\n- Satu-satunya provider di zona utama dengan traffic tertinggi (Zone A).\n- Demo kecepatan internet langsung kepada heavy users.\n- Potensi penjualan paket data secara massal.`;
      } else {
        body = `Paket data adalah kebutuhan pokok mahasiswa. Kami mengundang ${displayName} membuka booth penjualan produk yang pasti dicari oleh ribuan pengunjung kami.\n\nKeuntungan strategis:\n\n- Titik penjualan strategis dengan ribuan target pasar.\n- Kesempatan menawarkan paket promo khusus event.`;
      }
    } else if (field === "Technology") {
      if (targetSize === "Perusahaan Besar") {
        body = `Kehadiran ${displayName} akan sangat prestisius. Kami menawarkan space eksklusif di Zone A untuk melakukan showcase inovasi terbaru Anda di dunia teknologi.\n\nKeuntungan strategis:\n\n- Lokasi terbaik dekat pintu masuk utama.\n- Menarik minat talenta IT terbaik untuk berkarir di tempat Anda.\n- Uji coba produk langsung oleh expert user.`;
      } else {
        body = `Produk aksesoris dan gadget dari ${displayName} sangat diminati mahasiswa FTI. Kami menawarkan space strategis untuk berjualan langsung kepada audiens tech savvy kami.\n\nKeuntungan strategis:\n\n- Akses langsung ke pengunjung yang 100% penggemar teknologi.\n- Potensi konversi transaksi tinggi untuk perlengkapan gadget.`;
      }
    } else if (field === "Food & Snacks") {
      if (targetSize === "Perusahaan Besar") {
        body = `Kami mengundang ${displayName} menghadirkan pengalaman kuliner terbaik. Sebagai Main Tenant, brand Anda akan menjadi destinasi utama saat jam makan siang dan sore.\n\nKeuntungan strategis:\n\n- Booth ukuran besar di area strategis Zone A.\n- Menjadi satu-satunya brand makanan utama di zona premium.\n- Branding maksimal di titik kumpul pengunjung.`;
      } else {
        body = `Kami mengobservasi bahwa produk ${displayName} memiliki potensi pasar yang kuat. Kami mengundang Anda berpartisipasi sebagai Tenant F&B untuk menjangkau pengunjung secara langsung.\n\nKeuntungan strategis:\n\n- Lokasi tenant berada di lalu lintas pengunjung terpadat saat jam istirahat.\n- Potensi transaksi tinggi mengingat durasi acara dari pagi hingga sore.`;
      }
    } else if (field === "Beverages") {
      if (targetSize === "Perusahaan Besar") {
        body = `Di tengah aktivitas festival yang padat, produk ${displayName} adalah pelepas dahaga utama. Kami menawarkan posisi sebagai Main Tenant Minuman di lokasi paling strategis.\n\nKeuntungan strategis:\n\n- Menjadi satu-satunya brand minuman besar di Zone A.\n- Izin menjajakan produk secara keliling ke seluruh area.\n- Potensi penjualan ribuan cup atau botol selama acara.`;
      } else {
        body = `Cuaca Jakarta dan keramaian festival adalah kombinasi sempurna untuk bisnis ${displayName}. Kami menawarkan slot booth yang dipastikan akan memiliki traffic audiens yang haus.\n\nKeuntungan strategis:\n\n- Perputaran produk cepat dan laku keras.\n- Biaya sewa booth cepat tertutup dari volume penjualan harian.`;
      }
    } else if (field === "Desserts") {
      if (targetSize === "Perusahaan Besar") {
        body = `Kami ingin memanjakan pengunjung dengan ${displayName}. Brand Anda akan menjadi pemanis acara yang dicari pengunjung untuk konten sosial media dan kenikmatan rasa.\n\nKeuntungan strategis:\n\n- Spot premium di Zone A untuk menarik perhatian pengunjung sejak pintu masuk.\n- Visual produk mendukung penciptaan konten organik.\n- Izin roaming sales di area acara.`;
      } else {
        body = `Dessert seperti ${displayName} adalah jajanan wajib mahasiswa. Kami menawarkan booth strategis untuk berjualan kepada mahasiswa yang butuh asupan manis setelah beraktivitas.\n\nKeuntungan strategis:\n\n- Produk mudah dibawa sambil jalan, meningkatkan potensi beli.\n- Daya tarik visual yang unik sangat mudah menyebar dari mulut ke mulut.`;
      }
    } else if (field === "Beauty & Grooming") {
      if (targetSize === "Perusahaan Besar") {
        body = `Mahasiswa FTI kini sangat peduli dengan self care. Kami menawarkan posisi eksklusif sebagai Main Tenant untuk menjangkau audiens modern kami secara langsung.\n\nKeuntungan strategis:\n\n- Menjadi satu-satunya brand kecantikan di Zone A.\n- Area strategis untuk skin check atau make over.\n- Produk berpotensi dipromosikan organik oleh mahasiswa di media sosial.`;
      } else {
        body = `Produk ${displayName} sangat relevan dengan tren saat ini. Kami mengundang Anda membuka pop up store, yang akan menjadi momen tepat untuk melakukan flash sale.\n\nKeuntungan strategis:\n\n- Mendorong impulsive buying yang sangat laku di kalangan mahasiswi.\n- Social proof dengan melihat mahasiswa mencoba dan membeli produk langsung.`;
      }
    } else if (field === "Education") {
      if (targetSize === "Perusahaan Besar") {
        body = `Mahasiswa kami selalu mencari cara untuk upskilling. Kami menawarkan kemitraan strategis untuk memperkenalkan program pascasarjana atau sertifikasi dari ${displayName} di lokasi premium kami.\n\nKeuntungan strategis:\n\n- Lokasi Zone A yang ramai untuk konsultasi program.\n- Membangun citra institusi di hadapan ribuan calon mahasiswa atau peserta didik potensial.`;
      } else {
        body = `Program dari ${displayName} adalah solusi tepat bagi mahasiswa. Buka booth di acara kami untuk melakukan konsultasi dan pendaftaran langsung.\n\nKeuntungan strategis:\n\n- Menjelaskan program secara personal kepada calon siswa.\n- Mendorong pendaftaran di tempat dengan promo khusus event.`;
      }
    } else {
      // "others"
      if (targetSize === "Perusahaan Besar") {
        body = `Kami melihat potensi sinergi yang luar biasa dengan ${displayName}. Kami menawarkan posisi Main Tenant di acara kami yang akan memberikan exposure maksimal kepada audiens mahasiswa Gen Z dan tech enthusiast.\n\nMelalui kolaborasi ini, ${displayName} dapat berinteraksi langsung dengan audiens yang melek digital dalam suasana festival yang dinamis.`;
      } else {
        body = `Kami mengundang ${displayName} untuk berpartisipasi membuka booth di acara kami. Acara ini merupakan momen tepat untuk menjangkau ribuan mahasiswa secara langsung.\n\nLokasi acara sangat strategis untuk memperkenalkan produk atau layanan ${displayName} dengan peluang interaksi audiens yang tinggi.`;
      }
    }

    const outro = targetSize === "Perusahaan Besar" ? outroBesar : outroKecil;

    const fullText = `${intro}\n\n${body}\n\n${outro}`;
    setGeneratedChat(fullText);
    setCopied(false);
  };

  const copyToClipboard = () => {
    if (!generatedChat) return;
    navigator.clipboard.writeText(generatedChat);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="app-container">
      <div className="header">
        <h1>iofest chat template</h1>
        <p>made in about 2 hours so apologies if it doesnt look good -arya</p>
      </div>

      <div className="card">
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">nama lengkap</label>
            <input
              type="text"
              className="form-input"
              placeholder="example: Arya Rava Pradana"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">nama perusahaan *</label>
            <input
              type="text"
              className="form-input"
              placeholder="example: PT Arya"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">nama brand (opsional btw)</label>
            <input
              type="text"
              className="form-input"
              placeholder="kopiko, floridina, durex, sutra"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">size perusahaan</label>
            <select
              className="form-input"
              value={targetSize}
              onChange={(e) => setTargetSize(e.target.value as TargetSize)}
            >
              <option value="Perusahaan Besar">Perusahaan Besar</option>
              <option value="Perusahaan Kecil-Menengah">
                Perusahaan Kecil-Menengah
              </option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">bidang perusahaan</label>
            <select
              className="form-input"
              value={field}
              onChange={(e) => setField(e.target.value as FieldType)}
            >
              <option value="FMCG">FMCG</option>
              <option value="Banking & Fintech">Banking & Fintech</option>
              <option value="Telecommunications">Telecommunications</option>
              <option value="Technology">Technology</option>
              <option value="Food & Snacks">Food & Snacks</option>
              <option value="Beverages">Beverages</option>
              <option value="Desserts">Desserts</option>
              <option value="Beauty & Grooming">Beauty & Grooming</option>
              <option value="Education">Education</option>
              <option value="others">Others / Lainnya (pilih ini kalo gaada yang cocok di option atas)</option>
            </select>
          </div>
        </div>

        <button className="btn" onClick={generateTemplate}>
          Generate Template
        </button>
      </div>

      {generatedChat && (
        <div className="output-area">
          <div className="output-header">
            <h2 className="output-title">Hasil Text Gen:</h2>
            <button className="btn-secondary" onClick={copyToClipboard}>
              <svg
                className="copy-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {copied ? (
                  <>
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </>
                ) : (
                  <>
                    <rect
                      x="9"
                      y="9"
                      width="13"
                      height="13"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </>
                )}
              </svg>
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>
          <div className="chat-box">{generatedChat}</div>
        </div>
      )}
    </main>
  );
}
