export default function EditPersonalStatement({ data, handleInput }) {
  return (
    <div className="wrapper personal-statement">
      <h2 className="section-heading">Personal Statement</h2>
      <textarea
        name=""
        id="statement"
        cols="30"
        rows="10"
        maxLength={500}
        onChange={handleInput}
        value={data}
        placeholder="(Optional)"
      ></textarea>
    </div>
  );
}
