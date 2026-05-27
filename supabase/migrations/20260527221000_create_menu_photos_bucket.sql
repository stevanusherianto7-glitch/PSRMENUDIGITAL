-- Migration: Create menu-photos storage bucket and policies
-- Target: Supabase remote & local DBs

-- 1. Create the bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('menu-photos', 'menu-photos', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- 2. Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Public Access" ON storage.objects;
DROP POLICY IF EXISTS "Public Insert" ON storage.objects;
DROP POLICY IF EXISTS "Public Update" ON storage.objects;

-- 3. Create policies for the bucket
-- Allow public read access to the bucket
CREATE POLICY "Public Access" ON storage.objects
FOR SELECT
USING (bucket_id = 'menu-photos');

-- Allow anon and authenticated users to upload files
CREATE POLICY "Public Insert" ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'menu-photos');

-- Allow anon and authenticated users to update files
CREATE POLICY "Public Update" ON storage.objects
FOR UPDATE
USING (bucket_id = 'menu-photos')
WITH CHECK (bucket_id = 'menu-photos');
