import React from "react";

function OutputData(props) {
  return <div>
    <h3>JSON рецензія:</h3>
    <p>{props.data}</p>
  </div>
}

class BookForm extends React.Component {
  constructor() {
    super();
    this.state = {
      bookName: '',
      authorName: '',
      bookReview: '',
      bookRating: '5stars',
      isAgree: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.defaultState = this.state;
    this.review = '';
  }

  handleChange(event) {
    const { name, value, checked } = event.target;
    const eventValue = name === 'isAgree' ? checked : value;
    this.setState({ [name]: eventValue })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.review = JSON.stringify(this.state);
    this.setState(this.defaultState);
  }
  
  render() {
    return (
      <div className="container">
        <h3>Рецензія на книгу</h3>
        <form className="form-block" onSubmit={this.handleSubmit}>
          <div className="input-block">
            <label htmlFor="bookName">Введіть назву книги</label>
            <input type="text" value={this.state.bookName} onChange={this.handleChange} name="bookName" className="input-field"></input>
          </div>
          <div className="input-block">
            <label htmlFor="authorName">Введіть автора книги</label>
            <input type="text" value={this.state.authorName} onChange={this.handleChange} name="authorName" className="input-field"></input>
          </div>
          <div className="input-block">
            <label htmlFor="bookReview">Напишіть вашу рецензію</label>
            <textarea value={this.state.bookReview} onChange={this.handleChange} name="bookReview" className="input-field" rows={10}></textarea>
          </div>
          <div className="input-block">
            <label htmlFor="bookRating">Виставте рейтинг від 1 до 5 зірок</label>
            <select value={this.state.bookRating} onChange={this.handleChange} name="bookRating" className="input-field">
              <option value="1star">1 зірка</option>
              <option value="2stars">2 зірки</option>
              <option value="3stars">3 зірки</option>
              <option value="4stars">4 зірки</option>
              <option value="5stars">5 зірок</option>
            </select>
          </div>
          <div className="input-block">
            <label htmlFor="isAgree">Згода на публікацію вашої рецензії</label>
            <input name="isAgree" type="checkbox" checked={this.state.isAgree} onChange={this.handleChange}></input>
          </div>
          <div className="input-block last-child">
            <input type="submit" value="Надіслати форму" className="button" />
          </div>
        </form>
        <OutputData data={this.review} />
      </div>
    )
  }
}

export default BookForm;
