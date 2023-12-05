import Input from "./Input";

export default function EditGeneralInformation({
  data,
  handleInput,
  required,
}) {
  return (
    <div className="wrapper">
      <h2 className="section-heading">General Information</h2>
      <div className="wrapper inputs">
        <Input
          label="Name"
          id="name"
          maxlength={20}
          data={data.name}
          handleInput={handleInput}
        />
        <Input
          label="Email"
          type="email"
          id="email"
          maxlength={35}
          data={data.email}
          handleInput={handleInput}
        />
        <Input
          label="Telephone"
          type="tel"
          id="number"
          maxlength={20}
          data={data.number}
          handleInput={handleInput}
        />
      </div>
    </div>
  );
}
