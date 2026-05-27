-- Migration: Tambah kolom platform_order_id ke tabel transactions
-- Digunakan untuk menyimpan nomor pesanan dari platform delivery (GoFood, GrabFood, ShopeeFood)
ALTER TABLE public.transactions
  ADD COLUMN IF NOT EXISTS platform_order_id text;

COMMENT ON COLUMN public.transactions.platform_order_id IS
  'Nomor order dari platform delivery eksternal (GoFood, GrabFood, ShopeeFood). Nullable untuk transaksi non-delivery.';
