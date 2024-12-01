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
        pageTitle="Privacyverklaring"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Privacyverklaring"
        bgImg="/img/page-banner-bg2.jpg"
      />

      <div className="terms-conditions ptb-100">
        <div className="container">
          <div className="single-privacy">
            <h3 className="mt-0">Welkom bij de Privacyverklaring van RTMS Kliniek</h3>
            <p>
              Bij RTMS Kliniek hechten we veel waarde aan uw privacy en de
              bescherming van uw persoonsgegevens. In deze privacyverklaring
              leggen we uit welke gegevens we verzamelen, waarom we deze
              verzamelen, en hoe we deze beveiligen in overeenstemming met de
              geldende privacywetgeving, zoals de Algemene Verordening
              Gegevensbescherming (AVG).
            </p>

            <h3>Welke gegevens verzamelen wij?</h3>
            <p>
              Wij verzamelen verschillende soorten gegevens om onze diensten
              optimaal te kunnen aanbieden:
            </p>
            <ul>
              <li>
                <strong>Persoonlijke gegevens:</strong> zoals uw naam, adres,
                e-mailadres en telefoonnummer, die u verstrekt bij het maken van
                een afspraak.
              </li>
              <li>
                <strong>Medische gegevens:</strong> indien van toepassing,
                verzamelen wij informatie die nodig is voor uw behandeling,
                zoals medische voorgeschiedenis en huidige klachten.
              </li>
              <li>
                <strong>Technische gegevens:</strong> zoals IP-adressen,
                browsertype, en informatie over uw gebruik van onze website.
              </li>
            </ul>

            <h3>Waarom verzamelen wij gegevens?</h3>
            <p>
              Uw gegevens worden verzameld en gebruikt voor de volgende doelen:
            </p>
            <ul>
              <li>Het maken en beheren van afspraken.</li>
              <li>
                Het bieden van op maat gemaakte behandelingen en medische zorg.
              </li>
              <li>
                Het verbeteren van onze website en diensten door middel van
                analyses.
              </li>
              <li>Het naleven van wettelijke verplichtingen.</li>
            </ul>

            <h3>Hoe beveiligen wij uw gegevens?</h3>
            <p>
              Wij nemen de beveiliging van uw persoonsgegevens zeer serieus.
              Enkele maatregelen die we treffen:
            </p>
            <ul>
              <li>
                Gebruik van versleutelde verbindingen (SSL) om gegevensoverdracht
                te beveiligen.
              </li>
              <li>
                Beperking van toegang tot gegevens tot geautoriseerde
                medewerkers.
              </li>
              <li>
                Regelmatige controles en updates van onze beveiligingssystemen.
              </li>
            </ul>

            <h3>Uw rechten</h3>
            <p>
              U heeft het recht om uw persoonsgegevens in te zien, te corrigeren
              of te verwijderen. Ook kunt u bezwaar maken tegen het gebruik van
              uw gegevens of een verzoek indienen om de verwerking ervan te
              beperken. Neem hiervoor contact met ons op via:
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
                <strong>Adres:</strong> Kennemerstraatweg 464 unit 1.03, 1851NG
                Heiloo
              </li>
            </ul>

            <h3>Bewaartermijn</h3>
            <p>
              Wij bewaren uw gegevens niet langer dan noodzakelijk is voor de
              doeleinden waarvoor deze zijn verzameld, tenzij een langere
              bewaartermijn wettelijk vereist is.
            </p>

            <h3>Wijzigingen in deze privacyverklaring</h3>
            <p>
              Deze privacyverklaring kan van tijd tot tijd worden gewijzigd om
              te voldoen aan wijzigingen in wet- en regelgeving of onze
              dienstverlening. Controleer deze pagina regelmatig om op de
              hoogte te blijven van updates.
            </p>

            <h3>Contact</h3>
            <p>
              Als u vragen heeft over deze privacyverklaring of onze verwerking
              van uw gegevens, neem dan contact met ons op. Wij helpen u graag.
            </p>
          </div>
        </div>
      </div>

      <Subscribe />

      <Footer />
    </>
  );
}
