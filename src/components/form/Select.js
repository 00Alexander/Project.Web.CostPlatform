import styles from './Select.module.css';

function Select({ text, name, optins, handleOnChage, value }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select
                name={name}
                id={name}>
                    <optins>Selecione uma opção</optins>
            </select>
        </div>
    )
}

export default Select