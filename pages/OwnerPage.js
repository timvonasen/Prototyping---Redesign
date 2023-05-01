import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import OwnerPage from "@/components/ingredients";
import Header from "@/components/Header";
import OwnerHeader from "@/components/ownerHeader";

export default function Home() {
  return (
    <div>
      <main>
        <OwnerHeader />
        <OwnerPage />
      </main>

      <footer></footer>
    </div>
  );
}
