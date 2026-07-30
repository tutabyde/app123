import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import Banner from "../../components/Banner";
import ActionGrid from "../../components/ActionGrid";
import UserCard from "../../components/UserCard";
import ProductSection from "../../components/ProductSection";
import BottomNav from "../../components/BottomNav";

export default function Home() {
  return (
    <>
      <main className="mx-auto min-h-screen max-w-md bg-gray-50 p-4 pb-28">

        <Header />

        <SearchBar />

        <Banner />

        <ActionGrid />

        <UserCard />

        <ProductSection />

      </main>

      <BottomNav />
    </>
  );
}