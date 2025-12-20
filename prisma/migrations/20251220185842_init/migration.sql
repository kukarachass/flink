-- CreateTable
CREATE TABLE "SecondProduct" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "SecondProduct_pkey" PRIMARY KEY ("id")
);
