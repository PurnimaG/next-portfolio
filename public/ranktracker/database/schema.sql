-- ============================================================
-- RankTracker — PostgreSQL Schema
-- Run this in your Supabase SQL editor or psql
-- ============================================================

-- TABLE 1: clients
-- Stores each client added via the UI form
CREATE TABLE IF NOT EXISTS clients (
  id          SERIAL PRIMARY KEY,
  client_name TEXT NOT NULL,
  domain      TEXT NOT NULL,
  keywords    JSONB NOT NULL DEFAULT '[]',   -- e.g. ["seo tools", "rank tracker"]
  country     TEXT NOT NULL DEFAULT 'US',
  engine      TEXT NOT NULL DEFAULT 'google',
  active      BOOLEAN NOT NULL DEFAULT TRUE,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- TABLE 2: rankings
-- One row per keyword per day (written by the daily n8n workflow)
CREATE TABLE IF NOT EXISTS rankings (
  id         SERIAL PRIMARY KEY,
  client_id  INT NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  keyword    TEXT NOT NULL,
  rank       INT,                              -- NULL = not found in top 100
  checked_at DATE NOT NULL DEFAULT CURRENT_DATE
);

-- Indexes for fast daily queries and joins
CREATE INDEX IF NOT EXISTS idx_rankings_date     ON rankings(checked_at);
CREATE INDEX IF NOT EXISTS idx_rankings_client   ON rankings(client_id);
CREATE INDEX IF NOT EXISTS idx_rankings_keyword  ON rankings(keyword);

-- Unique constraint: one rank entry per client+keyword per day
CREATE UNIQUE INDEX IF NOT EXISTS idx_rankings_unique
  ON rankings(client_id, keyword, checked_at);

-- ============================================================
-- USEFUL QUERIES
-- ============================================================

-- Get all rankings for today with client info
-- SELECT c.client_name, c.domain, r.keyword, r.rank, r.checked_at
-- FROM rankings r
-- JOIN clients c ON c.id = r.client_id
-- WHERE r.checked_at = CURRENT_DATE
-- ORDER BY c.client_name, r.rank NULLS LAST;

-- Get rankings for last 30 days for a specific client
-- SELECT r.keyword, r.rank, r.checked_at
-- FROM rankings r
-- WHERE r.client_id = 1
--   AND r.checked_at >= CURRENT_DATE - INTERVAL '30 days'
-- ORDER BY r.keyword, r.checked_at DESC;

-- Export view: pivot-style for Excel (client + keyword + all dates)
-- Use this query in the n8n Excel download workflow
-- SELECT
--   c.client_name,
--   c.domain,
--   r.keyword,
--   r.rank,
--   r.checked_at
-- FROM rankings r
-- JOIN clients c ON c.id = r.client_id
-- ORDER BY c.client_name, r.keyword, r.checked_at;
