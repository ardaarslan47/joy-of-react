export default ContactCard = ({ name, job, email }) => {
    return (
      <>
        <li className="contact-card">
          <h2>{name}</h2>
        </li>
        <dl>
          <dt>Job</dt>
          <dd>{job}</dd>
          <dt>Email</dt>
          <dd>{email}</dd>
        </dl>
      </>
    );
  };