import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import RequestAQuoteForm from "@/components/RequestAQuote/RequestAQuoteForm";
import Footer from "@/components/Layout/Footer";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle
        title="Kariyerinizi bizimle yapın"
        homeText="Anasayfa"
        homeUrl="/"
      />

      <RequestAQuoteForm />

      <Footer />
    </>
  );
}
