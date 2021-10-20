import { Component } from "react";
import styles from './ContactForm.module.css'
export default class ContactForm extends Component {
    state = {
        name: this.props.name,
        number: this.props.number,
 }
    render() {
        const { name, number } = this.state;
    return <>
          <form className = {styles.form}>
        <label>
      <h3>Name</h3>
      <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            value = {name}
        required
            onChange={this.props.onChangeInputHandler}
            className = {styles.input}
      /></label>
               <label>
          <h3>Tel. number </h3>
          <input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            value = {number}
            required
            onChange={this.props.onChangeInputHandler}
            className = {styles.input}
          /></label>
        <button type="button" className={styles.button} onClick={this.props.addContactHandler}>Add Contact</button>
      </form></>
} }

