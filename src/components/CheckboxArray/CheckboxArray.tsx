import React, { useState } from 'react';
import styles from './CheckboxArray.module.sass';

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
        <div className={styles.width}>
            <div className={styles.CheckboxArray}>
                <h2>{arrayTitle}</h2>
                <div className={options.length > 4 ? styles.scrollable : ''}>
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
                            <label htmlFor={option}>{option}</label>
                        </div>
                    ))}
                </div>
        </div>
    </div>
    );
};