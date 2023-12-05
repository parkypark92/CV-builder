import Input from "./Input";

export default function EditSkills({ data, handleInput }) {
  return (
    <div className="wrapper">
      <h2 className="section-heading">Skills</h2>
      <div className="wrapper inputs">
        <Input
          label="Skill"
          id="skill1"
          data={data.skill1}
          handleInput={handleInput}
        />
        <Input
          label="Skill"
          id="skill2"
          data={data.skill2}
          handleInput={handleInput}
        />
        <Input
          label="Skill"
          id="skill3"
          data={data.skill3}
          handleInput={handleInput}
        />
        <Input
          label="Skill"
          id="skill4"
          data={data.skill4}
          handleInput={handleInput}
        />
        <Input
          label="Skill"
          id="skill5"
          data={data.skill5}
          handleInput={handleInput}
        />
      </div>
    </div>
  );
}
