CREATE TABLE "customers" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "name" text NOT NULL,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "agencies" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "address_id" int,
  "order_id" int,
  "agency" text,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "addresses" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "address" text NOT NULL,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "cars" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "model_id" int,
  "car" text NOT NULL,
  "price" int NOT NULL,
  "quantity" int,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "models" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "model" text NOT NULL,
  "description" text NOT NULL,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "orders" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "customer_id" int NOT NULL,
  "agency_id" int NOT NULL,
  "order" text NOT NULL,
  "quantity" int,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "multipleOrders" (
  "multiple_orders" SERIAL PRIMARY KEY NOT NULL,
  "car_id" int,
  "order_id" int
);

ALTER TABLE "multipleOrders" ADD FOREIGN KEY ("car_id") REFERENCES "cars" ("id");

ALTER TABLE "multipleOrders" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

ALTER TABLE "agencies" ADD FOREIGN KEY ("address_id") REFERENCES "addresses" ("id");

ALTER TABLE "cars" ADD FOREIGN KEY ("model_id") REFERENCES "models" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("customer_id") REFERENCES "customers" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("agency_id") REFERENCES "agencies" ("id");
