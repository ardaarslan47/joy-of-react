import ContactCard from "./contactCard";

export default App = () => (
  <ul>
    <ContactCard
      name="Sunita Kumar"
      job="Electrical Engineer"
      email="sunita.kumar@acme.co"
    />
    <ContactCard
      name="Henderson G. Sterling II"
      job="Receptionist"
      email="henderson-the-second@acme.co"
    />
    <ContactCard
      name="Aoi Kobayashi"
      job="President"
      email="kobayashi.aoi@acme.co"
    />
  </ul>
);
