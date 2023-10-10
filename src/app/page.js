"use client"
import Appbar from "./components/Appbar";
import Bottom from "./components/Bottom";
import Drawer from "./components/Drawer";
import React, {useState} from "react";

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState();

  const handleMenuToggle = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <main className="min-h-screen">
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>

      <Bottom></Bottom>
    </main>
  );
}
 