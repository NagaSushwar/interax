import FlashSales from "./_components/FlashSales";
import Header from "./_components/Header";
import Page1 from "./_components/page1";

export default function Page() {
  return (
    <main className="mt-0">
      <div>
        <Page1 />
      </div>
      <div>
        <FlashSales />
      </div>
      <div></div>
    </main>
  );
}
