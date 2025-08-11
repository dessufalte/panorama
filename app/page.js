"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import TentangWebsite from "./about";
// --- ICONS ---
const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);
const MinusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);
const TrashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
  </svg>
);
const ShoppingCartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);
const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
const LogoIcon = () => (
  <Image
    src="/panorama.jpeg"
    alt="Panorama Cafe Logo"
    width={40}
    height={40}
    className="rounded-full"
  />
);
const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-amber-400"
  >
    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
  </svg>
);
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);
const ChevronDownIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

// --- MENU DATA ---
const menuData = {
  makanan: [
    {
      id: 1,
      name: "Pecel Ayam + Nasi",
      price: 20000,
      imageUrl: "/menu/pical-a.jpg",
    },
    {
      id: 2,
      name: "Pecel Lele + Nasi",
      price: 20000,
      imageUrl: "/menu/pical-le.jpeg",
    },
    {
      id: 3,
      name: "Ayam Suwir Kemangi + Nasi",
      price: 20000,
      imageUrl: "/menu/ayam-su.jpg",
    },
    {
      id: 4,
      name: "Ayam Lado Hijau + Nasi",
      price: 20000,
      imageUrl: "/menu/ayam-hi.jpg",
    },
    {
      id: 5,
      name: "Lele Lado Hijau + Nasi",
      price: 20000,
      imageUrl: "/menu/lele-hi.jpg",
    },
    {
      id: 6,
      name: "Ikan Asin Lado Hijau + Jengkol",
      price: 12000,
      imageUrl: "/menu/ikas-hi.jpeg",
    },
    {
      id: 7,
      name: "Nasi Goreng Kampung",
      price: 13000,
      imageUrl: "/menu/nago-k.jpg",
    },
    {
      id: 8,
      name: "Nasi Goreng Ayam",
      price: 22000,
      imageUrl: "/menu/nago-ya.jpg",
    },
    {
      id: 9,
      name: "Nasi Goreng Hongkong",
      price: 18000,
      imageUrl: "/menu/nago-ho.jpeg",
    },
    {
      id: 10,
      name: "Mie Kwetiaw Goreng",
      price: 17000,
      imageUrl: "/menu/kwe-go.jpeg",
    },
    {
      id: 11,
      name: "Mie Kwetiaw Special",
      price: 17000,
      imageUrl: "/menu/kwe-sp.jpg",
    },
    {
      id: 12,
      name: "Mie Goreng",
      price: 12000,
      imageUrl: "/menu/migo.jpg",
    },
    {
      id: 13,
      name: "Mie Goreng Special",
      price: 18000,
      imageUrl: "/menu/migo-sp.jpg",
    },
    {
      id: 14,
      name: "Mie Rebus",
      price: 12000,
      imageUrl: "/menu/mire.jpg",
    },
    {
      id: 15,
      name: "Varian Mie Pedas Topping Telur Original",
      price: 12000,
      imageUrl: "/menu/mipe-te.jpg",
    },
    {
      id: 16,
      name: "Varian Mie Pedas Topping Telur Level 1",
      price: 13000,
      imageUrl: "/menu/mipe-te.jpg",
    },
    {
      id: 50,
      name: "Varian Mie Pedas Topping Telur Level 2",
      price: 14000,
      imageUrl: "/menu/mipe-te.jpg",
    },
    {
      id: 51,
      name: "Varian Mie Pedas Topping Telur Level 3",
      price: 15000,
      imageUrl: "/menu/mipe-te.jpg",
    },
    {
      id: 52,
      name: "Seblak (Opsional)",
      price: null,
      imageUrl: "/menu/sebl.jpg",
    },
  ],
  minuman: [
    {
      id: 17,
      name: "Smoothie Mangga",
      price: 15000,
      imageUrl: "/menu/smo-mg.jpg",
    },
    {
      id: 18,
      name: "Smoothie Alpukat",
      price: 15000,
      imageUrl: "/menu/smo-alp.jpg",
    },
    {
      id: 19,
      name: "Smoothie Naga",
      price: 15000,
      imageUrl: "/menu/smo-ng.jpg",
    },
    {
      id: 20,
      name: "Varian Juice",
      price: 10000,
      imageUrl: "/menu/jus.jpg",
    },
    {
      id: 21,
      name: "Varian Milkshake",
      price: 10000,
      imageUrl: "/menu/smo.jpg",
    },
    {
      id: 22,
      name: "Mocktail",
      price: 10000,
      imageUrl: "/menu/mock.jpg",
    },
    {
      id: 23,
      name: "Teh Telur",
      price: 10000,
      imageUrl: "/menu/tlur.jpg",
    },
    {
      id: 24,
      name: "Kopi Hitam",
      price: 6000,
      imageUrl: "/menu/kop-h.jpeg",
    },
    {
      id: 25,
      name: "Kopi Susu",
      price: 7000,
      imageUrl: "/menu/kop-su.png",
    },
    {
      id: 26,
      name: "Teh Panas",
      price: 6000,
      imageUrl: "/menu/teh.jpg",
    },
    {
      id: 32,
      name: "Teh Hijau",
      price: 6000,
      imageUrl: "/menu/teh-hi.avif",
    },
    {
      id: 33,
      name: "Teh Es",
      price: 6000,
      imageUrl: "/menu/teh-s.jpeg",
    },
    {
      id: 34,
      name: "Es Teler",
      price: 10000,
      imageUrl: "/menu/es-tel.jpg",
    },
    {
      id: 35,
      name: "Kelapa Muda",
      price: 10000,
      imageUrl: "/menu/kel-mu.jpg",
    },
    {
      id: 36,
      name: "Capuccino Panas",
      price: 7000,
      imageUrl: "/menu/cap-pan.jpg",
    },
    {
      id: 37,
      name: "Capuccino Cincau",
      price: 7000,
      imageUrl: "/menu/cap-cin.jpg",
    },
    {
      id: 38,
      name: "Nutri Sari",
      price: 5000,
      imageUrl: "/menu/nut.jpg",
    },
  ],
  snack: [
    {
      id: 27,
      name: "Kentang Goreng",
      price: 10000,
      imageUrl: "/menu/ken.jpeg",
    },
    {
      id: 28,
      name: "Nugget",
      price: 10000,
      imageUrl: "/menu/nug.jpg",
    },
    {
      id: 29,
      name: "Sandwich",
      price: 7000,
      imageUrl: "/menu/san.jpg",
    },
    {
      id: 30,
      name: "Pisang Krispi",
      price: 10000,
      imageUrl: "/menu/pis-kri.jpg",
    },
    {
      id: 31,
      name: "Pisang Coklat",
      price: 10000,
      imageUrl: "/menu/pis-co.jpg",
    },
    {
      id: 53,
      name: "Frozen Food (Opsional)",
      price: null,
      imageUrl: "/menu/froz-f.jpg",
    },
  ],
  wisata: [
    { id: 101, name: "Camping Ground" },
    { id: 102, name: "Family Gathering" },
    { id: 103, name: "Family Karaoke" },
    { id: 104, name: "Meeting Room (Outdoor)" },
    { id: 105, name: "Tour Wisata Tanjung Alai" },
    { id: 106, name: "Dan Lain-lain" },
  ],
};
const allMenuItems = [
  ...menuData.makanan,
  ...menuData.minuman,
  ...menuData.snack,
];

// --- HELPER FUNCTION ---
const formatCurrency = (price) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);

// --- COMPONENTS ---
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Menu", href: "#menu-utama" },
    { name: "Fasilitas", href: "#wisata" },
    { name: "Tentang", href: "#tentang" },
  ];
  return (
    <nav className="bg-white/20 backdrop-blur-xl border-b border-white/30 sticky top-0 z-30 shadow-lg opacity-75">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <LogoIcon />
            </div>
            <div className="ml-4">
              <h1 className="text-xl font-bold text-slate-800">
                Panorama View & Cafe
              </h1>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-700 hover:bg-white/40 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-white/20 inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-800 hover:bg-white/40 focus:outline-none"
            >
              <span className="sr-only">Buka menu</span>
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-700 hover:bg-white/40 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function MenuControls({ onSearch, onSort, onFilter, activeCategory }) {
  const categories = ["semua", "makanan", "minuman", "snack"];
  return (
    <div className="mb-8 p-4 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 shadow-lg">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Cari menu..."
            onChange={(e) => onSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white/50 border border-white/50 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition placeholder:text-slate-500 text-slate-800"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
            <SearchIcon />
          </div>
        </div>
        <select
          onChange={(e) => onSort(e.target.value)}
          className="w-full md:w-auto px-4 py-2 bg-white/50 border border-white/50 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition text-slate-800"
        >
          <option value="default">Urutkan</option>
          <option value="name-asc">Nama A-Z</option>
          <option value="name-desc">Nama Z-A</option>
          <option value="price-asc">Harga Terendah</option>
          <option value="price-desc">Harga Tertinggi</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
              activeCategory === cat
                ? "bg-emerald-500 text-white shadow-md"
                : "bg-white/40 text-slate-700 hover:bg-white/70"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

function MenuItemCard({ item, onAddToCart }) {
  const isOrderable = item.price !== null;
  return (
    <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-105">
      <div className="relative w-full h-40">
        <Image
          src={item.imageUrl}
          alt={item.name}
          layout="fill"
          objectFit="cover"
          className="bg-gray-200"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-slate-800 flex-grow">{item.name}</h3>
        <div className="mt-1 mb-3">
          {isOrderable ? (
            <p className="text-slate-600">{formatCurrency(item.price)}</p>
          ) : (
            <p className="text-sm text-slate-500">Tersedia di lokasi</p>
          )}
        </div>
        {isOrderable && (
          <button
            onClick={() => onAddToCart(item)}
            className="w-full mt-auto bg-emerald-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            <PlusIcon />
            <span>Tambah</span>
          </button>
        )}
      </div>
    </div>
  );
}

function WisataCard({ item }) {
  return (
    <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-xl shadow-lg p-4 flex items-center gap-4">
      <div className="bg-amber-100 p-2 rounded-full">
        <StarIcon />
      </div>
      <h3 className="font-semibold text-slate-800">{item.name}</h3>
    </div>
  );
}

function OrderSidebar({
  orderItems,
  onUpdateQuantity,
  onRemoveItem,
  total,
  onConfirmOrder,
}) {
  return (
    <aside className="w-full lg:w-96 bg-gray-100/50 backdrop-blur-xl border-l border-white/30 flex flex-col h-full">
      <div className="p-6 border-b border-white/30">
        <h2 className="text-xl font-bold text-slate-800">Pesanan Anda</h2>
      </div>
      {orderItems.length === 0 ? (
        <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
          <ShoppingCartIcon />
          <p className="mt-4 text-slate-500">Keranjang kosong.</p>
        </div>
      ) : (
        <div className="flex-grow overflow-y-auto p-4 space-y-3">
          {orderItems.map((item) => (
            <div
              key={item.id}
              className="bg-white/50 backdrop-blur-md p-3 rounded-lg border border-white/40 flex items-center gap-4 shadow-sm"
            >
              <div className="flex-grow">
                <p className="font-semibold text-sm text-slate-800">
                  {item.name}
                </p>
                <p className="text-emerald-700 font-medium text-sm">
                  {formatCurrency(item.price)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onUpdateQuantity(item.id, -1)}
                  className="p-1 rounded-full bg-slate-200/50 hover:bg-slate-200"
                >
                  <MinusIcon />
                </button>
                <span className="w-6 text-center font-semibold text-slate-700">
                  {item.quantity}
                </span>
                <button
                  onClick={() => onUpdateQuantity(item.id, 1)}
                  className="p-1 rounded-full bg-slate-200/50 hover:bg-slate-200"
                >
                  <PlusIcon />
                </button>
              </div>
              <button
                onClick={() => onRemoveItem(item.id)}
                className="text-red-500 hover:text-red-700 p-1"
              >
                <TrashIcon />
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="p-6 border-t border-white/30 bg-white/20 backdrop-blur-lg mt-auto">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-slate-800">Total</span>
          <span className="text-xl font-bold text-emerald-700">
            {formatCurrency(total)}
          </span>
        </div>
        <button
          onClick={onConfirmOrder}
          disabled={orderItems.length === 0}
          className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
        >
          Pesan Sekarang
        </button>
      </div>
    </aside>
  );
}

function CartModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 z-40"
      onClick={onClose}
    >
      <div
        className="fixed bottom-0 left-0 right-0 h-[85vh] bg-gray-100/70 backdrop-blur-xl border-t border-white/30 rounded-t-2xl shadow-xl transform transition-transform duration-300 ease-in-out flex flex-col"
        onClick={(e) => e.stopPropagation()}
        style={{ transform: isOpen ? "translateY(0)" : "translateY(100%)" }}
      >
        <div className="p-4 border-b border-white/30 flex justify-end">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/10"
          >
            <XIcon />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function CategorySection({ title, items, onAddToCart, onToggle, isExpanded }) {
  if (items.length === 0) return null;
  return (
    <section className="mb-8">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left mb-4 p-4 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 shadow-lg"
      >
        <h2 className="text-2xl font-bold capitalize text-slate-800">
          {title}
        </h2>
        <ChevronDownIcon
          className={`transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>
      {isExpanded && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 animate-in fade-in-0 duration-500">
          {items.map((item) => (
            <MenuItemCard key={item.id} item={item} onAddToCart={onAddToCart} />
          ))}
        </div>
      )}
    </section>
  );
}

function ConfirmationModal({ isOpen, onClose, orderItems, total }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white/80 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 scale-95 animate-in fade-in-0 zoom-in-95">
        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold text-slate-800">
            Konfirmasi Pesanan
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Tunjukkan layar ini kepada pegawai.
          </p>
        </div>
        <div className="bg-black/5 p-4 max-h-60 overflow-y-auto border-y border-white/20">
          {orderItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center py-2"
            >
              <div className="text-left">
                <p className="font-semibold text-slate-700">{item.name}</p>
                <p className="text-sm text-slate-500">x {item.quantity}</p>
              </div>
              <p className="font-semibold text-slate-700">
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
          ))}
        </div>
        <div className="p-6 flex justify-between items-center font-bold text-lg text-slate-800">
          <span>Total Bayar</span>
          <span className="text-emerald-700">{formatCurrency(total)}</span>
        </div>
        <div className="p-6 pt-0">
          <button
            onClick={onClose}
            className="w-full bg-slate-200/70 text-slate-800 font-bold py-3 rounded-lg hover:bg-slate-300/80 transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}

// --- MAIN PAGE COMPONENT ---
// --- MAIN PAGE COMPONENT ---
export default function Home() {
  const [orderItems, setOrderItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [activeCategory, setActiveCategory] = useState("semua");
  const [expandedCategories, setExpandedCategories] = useState({
    makanan: true,
    minuman: true,
    snack: true,
  });

  const handleAddToCart = (item) => {
    setOrderItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };
  const handleUpdateQuantity = (itemId, amount) => {
    setOrderItems((prev) => {
      const updated = prev.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: Math.max(1, item.quantity + amount) };
        }
        return item;
      });
      return updated.filter((item) => item.quantity > 0);
    });
  };
  const handleRemoveItem = (itemId) =>
    setOrderItems((prev) => prev.filter((item) => item.id !== itemId));
  const handleConfirmOrder = () => {
    setIsConfirmationOpen(true);
    setIsCartOpen(false);
  };
  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const filteredAndSortedData = useMemo(() => {
    const dataToFilter =
      activeCategory === "semua"
        ? menuData
        : { [activeCategory]: menuData[activeCategory] };

    let filtered = {};

    // Filter berdasarkan pencarian
    Object.keys(dataToFilter).forEach((category) => {
      filtered[category] = dataToFilter[category].filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    // Sorting
    if (sortOrder !== "default") {
      const [key, order] = sortOrder.split("-");
      Object.keys(filtered).forEach((category) => {
        filtered[category] = [...filtered[category]].sort((a, b) => {
          if (key === "name") {
            return order === "asc"
              ? a.name.localeCompare(b.name)
              : b.name.localeCompare(a.name);
          }
          if (key === "price") {
            return order === "asc" ? a.price - b.price : b.price - a.price;
          }
          return 0;
        });
      });
    }

    return filtered;
  }, [searchTerm, sortOrder, activeCategory]);

  const orderTotal = useMemo(
    () =>
      orderItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [orderItems]
  );
  const totalItemsInCart = useMemo(
    () => orderItems.reduce((total, item) => total + item.quantity, 0),
    [orderItems]
  );
  const orderSidebarContent = (
    <OrderSidebar
      orderItems={orderItems}
      onUpdateQuantity={handleUpdateQuantity}
      onRemoveItem={handleRemoveItem}
      total={orderTotal}
      onConfirmOrder={handleConfirmOrder}
    />
  );

  return (
    <div className="font-sans h-screen overflow-hidden bg-slate-100 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-20%] left-[-20%] w-[50%] h-[50%] bg-emerald-300/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[50%] h-[50%] bg-sky-300/30 rounded-full filter blur-3xl animate-pulse [animation-delay:4s]"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[30%] h-[30%] bg-pink-300/30 rounded-full filter blur-3xl animate-pulse [animation-delay:2s]"></div>
      </div>
      <div className="flex flex-col flex-1 h-full">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          <main className="flex-1 overflow-y-auto scroll-smooth">
            <div
              className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8"
              id="menu-utama"
            >
              <MenuControls
                onSearch={setSearchTerm}
                onSort={setSortOrder}
                onFilter={setActiveCategory}
                activeCategory={activeCategory}
              />

              {filteredAndSortedData.all_sorted ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredAndSortedData.all_sorted.map((item) => (
                    <MenuItemCard
                      key={item.id}
                      item={item}
                      onAddToCart={handleAddToCart}
                    />
                  ))}
                </div>
              ) : (
                Object.entries(filteredAndSortedData).map(
                  ([category, items]) => (
                    <CategorySection
                      key={category}
                      title={category}
                      items={items}
                      onAddToCart={handleAddToCart}
                      onToggle={() => toggleCategory(category)}
                      isExpanded={expandedCategories[category]}
                    />
                  )
                )
              )}

              {Object.values(filteredAndSortedData).flat().length === 0 && (
                <p className="text-center text-slate-500 mt-8">
                  Menu yang Anda cari tidak ditemukan.
                </p>
              )}

              <section id="wisata" className="mb-12 scroll-mt-20 pt-8">
                <h2 className="text-4xl font-extrabold mb-6 capitalize text-slate-800">
                  Fasilitas Wisata
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {menuData.wisata.map((item) => (
                    <WisataCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
              <TentangWebsite />
            </div>
          </main>
          <div className="hidden lg:block h-full">{orderSidebarContent}</div>
        </div>
      </div>
      <div className="lg:hidden fixed bottom-4 right-4 z-30">
        <button
          onClick={() => setIsCartOpen(true)}
          className="bg-emerald-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center"
        >
          <ShoppingCartIcon />
          {totalItemsInCart > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
              {totalItemsInCart}
            </span>
          )}
        </button>
      </div>
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}>
        {orderSidebarContent}
      </CartModal>
      <ConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={() => setIsConfirmationOpen(false)}
        orderItems={orderItems}
        total={orderTotal}
      />
    </div>
  );
}
