import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import Banner from "../../components/Banner";
import ActionGrid from "../../components/ActionGrid";
import UserCard from "../../components/UserCard";
import ProductSection from "../../components/ProductSection";
import BottomNav from "../../components/BottomNav";


export default function Home() {

  const [user, setUser] = useState(null);


  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) return;


    axios
      .get("https://yoyo-defective-glutton.ngrok-free.dev/api/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true"
        }
      })
      .then((response) => {

        setUser(response.data.user);

      })
      .catch((error) => {

        console.log("Error obteniendo usuario:", error);

      });


  }, []);



  return (
    <>
      <main className="mx-auto min-h-screen max-w-md bg-gray-50 p-4 pb-28">

        <Header />

        <SearchBar />

        <Banner />

        <ActionGrid />


        <UserCard user={user} />


        <ProductSection />

      </main>


      <BottomNav />
    </>
  );
}