import Input from "./Input"

export default function EditGeneralInformation({data, handleInput}) {
    console.log(data);
    return (
        <div className="wrapper">
            <h2 className="section-heading">General Information</h2>
            <div className="wrapper inputs">
                <Input label="Name:" id="name" data={data.name} handleInput={handleInput}/>
                <Input label="Email:" type="email" id="email"/>
                <Input label="Telephone:" type="number" id="tel"/>
            </div>
        </div>
    )
}