// drizzle.config.ts
import { defineConfig } from 'drizzle-kit';
import 'dotenv/config';

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql', // ✅ PostgreSQL dialect
  dbCredentials: {
    url: process.env.DATABASE_URL!, // ✅ correct key
  },
});
