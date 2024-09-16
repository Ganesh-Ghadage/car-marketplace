import { json, numeric, pgTable, serial, varchar, integer } from "drizzle-orm/pg-core";

export const carListing = pgTable('carListing', {
    id: serial('id').primaryKey(),
    title: varchar('title').notNull(),
    tagline: varchar('tagline'),
    originalPrice: numeric('originalPrice').notNull(),
    sellingPrice: numeric('sellingPrice').notNull(),
    modelName: varchar('modelName').notNull(),
    brand: varchar('brand').notNull(),
    category: varchar('category').notNull(),
    vin: varchar('vin').notNull(),
    mileage: numeric('mileage').notNull(),
    door: varchar('door').notNull(),
    engineCC: varchar('engineCC').notNull(),
    color: varchar('color').notNull(),
    fuelType: varchar('fuelType').notNull(),
    transmission: varchar('transmission').notNull(),
    driveType: varchar('driveType').notNull(),
    condition: varchar('condition').notNull(),
    description: varchar('description'),
    features: json('features'),
    userName: varchar('userName').notNull(),
    userIconUrl: varchar('userIconUrl').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt: varchar('createdAt')
})

export const carImages = pgTable('carImages', {
    id: serial('id').primaryKey(),
    imageUrl: varchar('imageUrl').notNull(),
    carListingId: integer('carListingId').notNull().references(()=>carListing.id)
})