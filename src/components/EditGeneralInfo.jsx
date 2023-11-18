import Input from "./Input"

export default function EditGeneralInformation({data, handleInput}) {
    return (
        <div className="wrapper">
            <h2 className="section-heading">General Information</h2>
            <div className="wrapper inputs">
                <Input label="Name:" id="name" data={data.name} handleInput={handleInput}/>
                <Input label="Email:" type="email" id="email" data={data.email} handleInput={handleInput}/>
                <Input label="Telephone:" type="number" id="number" data={data.number} handleInput={handleInput}/>
            </div>
        </div>
    )
}