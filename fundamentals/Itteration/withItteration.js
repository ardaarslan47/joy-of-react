import data from "./data";
import ContactCard from "./contactCard";

export default App = () => (
  <ul>
    {data.map((contact) => (
      <ContactCard
        key={contact.id}
        name={contact.name}
        job={contact.job}
        email={contact.email}
      />
    ))}
  </ul>
);
