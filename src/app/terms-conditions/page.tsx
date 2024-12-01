import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Subscribe from "../../components/Common/Subscribe";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Algemene Voorwaarden"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Algemene Voorwaarden"
        bgImg="/img/page-banner-bg1.jpg"
      />

      <div className="terms-conditions ptb-100">
        <div className="container">
          <div className="single-privacy">
            <h3 className="mt-0">Welkom bij de Algemene Voorwaarden van RTMS Kliniek</h3>
            <p>
              Deze algemene voorwaarden beschrijven de regels en richtlijnen voor het gebruik van de diensten van
              RTMS Kliniek. Door gebruik te maken van onze website en/of diensten gaat u akkoord met deze
              voorwaarden. Lees deze zorgvuldig door voordat u onze diensten gebruikt.
            </p>

            <h3>Gebruik van onze diensten</h3>
            <p>
              Onze diensten zijn uitsluitend bedoeld voor persoonlijke en niet-commerciële doeleinden. U stemt
              ermee in onze diensten te gebruiken in overeenstemming met toepasselijke wet- en regelgeving en om
              geen misbruik te maken van onze website of systemen.
            </p>
            <p>U mag onder meer niet:</p>
            <ul>
              <li>Onjuiste of misleidende informatie verstrekken.</li>
              <li>
                Ongeoorloofde toegang proberen te krijgen tot onze systemen of gegevens.
              </li>
              <li>
                Inbreuk maken op de rechten van anderen, waaronder intellectuele eigendomsrechten.
              </li>
            </ul>

            <h3>Afspraken en annuleringen</h3>
            <p>
              Bij het maken van een afspraak bij RTMS Kliniek verplicht u zich om op het afgesproken tijdstip
              aanwezig te zijn. Annuleringen dienen minimaal 24 uur van tevoren te worden doorgegeven. Bij
              niet-tijdige annulering kan een no-show-tarief in rekening worden gebracht.
            </p>

            <h3>Betalingen</h3>
            <p>
              Betalingen voor onze diensten dienen tijdig te worden voldaan. De tarieven worden vooraf met u
              gecommuniceerd. In geval van betalingsachterstanden behouden wij ons het recht voor om verdere
              diensten op te schorten totdat de openstaande betalingen zijn voldaan.
            </p>

            <h3>Beperking van aansprakelijkheid</h3>
            <p>
              RTMS Kliniek spant zich in om hoogwaardige en veilige diensten te leveren. Wij zijn echter niet
              aansprakelijk voor eventuele schade die voortvloeit uit:
            </p>
            <ul>
              <li>Onjuist gebruik van onze diensten.</li>
              <li>
                Vertragingen of onderbrekingen in de beschikbaarheid van onze website of systemen.
              </li>
              <li>Onvoorziene medische complicaties.</li>
            </ul>
            <p>
              Onze totale aansprakelijkheid is in geen geval hoger dan het bedrag dat u voor de betreffende
              dienst heeft betaald.
            </p>

            <h3>Privacybeleid</h3>
            <p>
              Wij hechten veel waarde aan uw privacy. Alle verzamelde persoonsgegevens worden verwerkt in
              overeenstemming met ons
            </p>

            <h3>Wijzigingen in de voorwaarden</h3>
            <p>
              RTMS Kliniek behoudt zich het recht voor om deze algemene voorwaarden op elk moment te wijzigen.
              Wij raden u aan om deze pagina regelmatig te controleren om op de hoogte te blijven van
              eventuele wijzigingen.
            </p>

            <h3>Contact</h3>
            <p>
              Voor vragen of opmerkingen over deze algemene voorwaarden kunt u contact met ons opnemen via:
            </p>
            <ul>
              <li>
                <strong>E-mail:</strong>{" "}
                <a href="mailto:info@rtmskliniek.nl">info@rtmskliniek.nl</a>
              </li>
              <li>
                <strong>Telefoon:</strong> 085 060 6774
              </li>
              <li>
                <strong>Adres:</strong> Kennemerstraatweg 464 unit 1.03, 1851NG Heiloo
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Subscribe />

      <Footer />
    </>
  );
}
