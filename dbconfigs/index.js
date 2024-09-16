import { conf } from '@/conf/conf';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '../src/db/schema/index.js'

const sql = neon(conf.DRIZZLE_DATABASE_URL);

export const db = drizzle(sql, {schema});
