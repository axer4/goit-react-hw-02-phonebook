import styles from './Filter.module.css'
export default function Filter({ filter, handleFilterChange }) {
     return <label className = {styles.label}>
                <h3 className = {styles.heading}>Find contacts by name</h3> 
            <input
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                autoComplete="off"
                onChange = {handleFilterChange}
             value={filter}
             className = {styles.input}
         >
             
            </input>
            </label>
 }