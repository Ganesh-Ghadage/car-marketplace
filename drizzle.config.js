/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./src/db/schema/index.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://car-marketplacw_owner:CY7VZrJgtGS6@ep-crimson-resonance-a55qkjlh.us-east-2.aws.neon.tech/car-marketplacw?sslmode=require',
    }
  };