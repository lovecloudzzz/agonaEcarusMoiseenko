import React, { useState } from 'react';
import '../styles/CheckboxArray.sass';

interface CheckboxArrayProps {
    arrayTitle: string;
    options: string[];
}

export const CheckboxArray: React.FC<CheckboxArrayProps> = ({ arrayTitle, options }) => {
    const [checkedOptions, setCheckedOptions] = useState<string[]>([]);

    const handleCheckboxChange = (option: string) => {
        if (checkedOptions.includes(option)) {
            setCheckedOptions(checkedOptions.filter((o) => o !== option));
        } else {
            setCheckedOptions([...checkedOptions, option]);
        }
    };

    return (
        <div className="width">
            <div className="CheckboxArray">
                <h2>{arrayTitle}</h2>
                <div className={options.length > 4 ? 'scrollable' : ''}>
                    {options.map((option) => (
                        <div key={option}>
                            <input
                                type="checkbox"
                                id={option}
                                name={option}
                                checked={checkedOptions.includes(option)}
                                onChange={() => handleCheckboxChange(option)}
                                className='CheckboxArrayBox'
                            />
                            <label htmlFor={option} className="">{option}</label>
                        </div>
                    ))}
                </div>
        </div>
    </div>
    );
};