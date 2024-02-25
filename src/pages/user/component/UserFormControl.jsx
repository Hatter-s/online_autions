const UserFormControl = (props) => {
  return (
    <>
      <div className="flex items-center gap-2 text-gray-700 text-lg my-4">
        <label htmlFor={props.inputId}>
            {props.label}
        </label>
        <input type={props.type} value={props.value} onInput={(e) => props.changeValue(e.target.value)} className="focus:outline-0 focus:border-b-2 border-gray-700 w-full max-w-[500px]" readOnly={props.readOnly}/>
      </div>
    </>
  );
};

export default UserFormControl;
