import React from "react";

interface IInputField {
  inputLabel: string;
  inputType: string;
}

const InputField: React.FC<IInputField> = ({ inputLabel, inputType }) => {
  return (
    <div className="flex-initial flex-col w-64">
      <label className="pr-10 pb-2">{inputLabel}</label>
      <input
        className="w-40 min-w-min border border-solid border-black rounded-lg mt-2 p-1 pb-2 sm:w-60 md:w-80"
        type={inputType}
      />
    </div>
  );
};

export default InputField;
