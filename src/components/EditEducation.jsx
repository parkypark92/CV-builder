import Input from "./Input";

export default function EditEducation({ data, handleInput }) {
  return (
    <div className="wrapper ">
      <h2 className="section-heading">Education</h2>
      <div className="wrapper inputs">
        <Input
          label="School Name"
          id="school"
          maxlength={30}
          data={data.school}
          handleInput={handleInput}
        ></Input>
        <Input
          label="Degree/Cert/Diploma"
          id="award"
          maxlength={30}
          data={data.award}
          handleInput={handleInput}
        ></Input>
        <div className="start-end-dates">
          <div className="start-date">
            <p>Start:</p>
            <Input
              label="Start Date"
              type="date"
              id="school-start"
              data={data["school-start"]}
              handleInput={handleInput}
            ></Input>
          </div>
          <div className="end-date">
            <p>End:</p>
            <Input
              label="End Date"
              type="date"
              id="school-end"
              data={data["school-end"]}
              handleInput={handleInput}
            ></Input>
          </div>
        </div>
      </div>
    </div>
  );
}
