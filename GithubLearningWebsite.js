import React, { useState } from "react";

const GithubLearningWebsite = () => {
  const [activeTab, setActiveTab] = useState("intro");

  const content = {
    intro: {
      title: "Belajar GitHub",
      description: "GitHub adalah platform berbasis web yang digunakan untuk version control dan kolaborasi dalam pengembangan perangkat lunak.",
      content: (
        <div className="space-y-4">
          <p>GitHub memungkinkan Anda dan rekan kerja untuk bersama-sama mengerjakan proyek dari mana saja.</p>
          <p>Platform ini menggunakan sistem Git untuk melacak perubahan dalam kode, sehingga Anda dapat melihat siapa yang melakukan perubahan dan kapan.</p>
        </div>
      )
    },
    dasar: {
      title: "Dasar-dasar GitHub",
      description: "Mengenal konsep utama dalam GitHub",
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Repository</h3>
            <p>Sebuah repository berisi semua file proyek dan riwayat perubahan setiap file.</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Commit</h3>
            <p>Commit adalah perubahan individu pada sebuah file atau kumpulan file.</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Branch</h3>
            <p>Branch adalah versi paralel dari repository yang memungkinkan Anda bekerja tanpa mengganggu versi utama.</p>
          </div>
        </div>
      )
    },
    tutorial: {
      title: "Tutorial Praktis",
      description: "Langkah-langkah menggunakan GitHub",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">1. Membuat Repository</h3>
            <p>Klik tombol "New" di halaman utama GitHub, beri nama repository, dan klik "Create repository".</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">2. Clone Repository</h3>
            <p>Gunakan perintah: <code className="bg-muted p-1 rounded">git clone [url-repository]</code></p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">3. Commit Perubahan</h3>
            <p>Setelah mengubah file, gunakan: <code className="bg-muted p-1 rounded">git commit -m "Pesan commit"</code></p>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Header */}
      <header className="bg-white border-b border-border py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="https://placeholder-image-service.onrender.com/image/40x40?prompt=GitHub%20logo%20silhouette%20with%20minimal%20design&id=1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6" 
              alt="Logo GitHub dengan desain sederhana" 
              className="rounded-md"
            />
            <h1 className="text-2xl font-bold">GitHub Learning</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#intro" className="hover:text-primary transition-colors">Beranda</a></li>
              <li><a href="#dasar" className="hover:text-primary transition-colors">Dasar</a></li>
              <li><a href="#tutorial" className="hover:text-primary transition-colors">Tutorial</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-8 px-6">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Pelajari GitHub dengan Mudah</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Panduan lengkap untuk pemula yang ingin menguasai GitHub dari dasar hingga tingkat lanjut.
          </p>
        </section>

        {/* Navigation Tabs */}
        <div className="flex border-b border-border mb-8">
          {Object.keys(content).map((key) => (
            <button
              key={key}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === key
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setActiveTab(key)}
            >
              {content[key].title}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">{content[activeTab].title}</h2>
          <p className="text-muted-foreground mb-6">{content[activeTab].description}</p>
          <div className="prose prose-sm max-w-none">
            {content[activeTab].content}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Keuntungan Menggunakan GitHub</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <img 
                src="https://placeholder-image-service.onrender.com/image/80x80?prompt=Collaboration%20icon%20showing%20multiple%20people%20working%20together&id=6a5b4c3d-2e1f-0g9h-8i7j-k6l5m4n3o2p1" 
                alt="Ikon kolaborasi tim" 
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold mb-2">Kolaborasi Tim</h3>
              <p className="text-muted-foreground">Bekerja bersama dengan tim secara efisien dari mana saja.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <img 
                src="https://placeholder-image-service.onrender.com/image/80x80?prompt=Version%20control%20icon%20with%20timeline%20and%20branches&id=7b8c9d0e-1f2g-3h4i-5j6k-l7m8n9o0p1q2" 
                alt="Ikon kontrol versi" 
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold mb-2">Kontrol Versi</h3>
              <p className="text-muted-foreground">Lacak semua perubahan kode dan kembalikan ke versi sebelumnya jika perlu.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <img 
                src="https://placeholder-image-service.onrender.com/image/80x80?prompt=Deployment%20icon%20showing%20rocket%20launch&id=3c4d5e6f-7g8h-9i0j-1k2l-m3n4o5p6q7r8" 
                alt="Ikon deployment cepat" 
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold mb-2">Deployment Mudah</h3>
              <p className="text-muted-foreground">Terapkan proyek Anda dengan mudah menggunakan GitHub Pages dan Actions.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Siap Memulai?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Daftar akun GitHub gratis sekarang dan mulai berkontribusi pada proyek open source atau buat repository pertama Anda.
          </p>
          <button className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-muted transition-colors">
            Daftar GitHub Gratis
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted text-muted-foreground py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 GitHub Learning. All rights reserved.</p>
          <p className="mt-2">Situs pembelajaran untuk pengembang pemula.</p>
        </div>
      </footer>
    </div>
  );
};

export default GithubLearningWebsite;
