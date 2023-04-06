import React from "react";

class BookForm extends React.Component {
  render() {
    return (
      <div className="container">
        <h3>Рецензія на книгу</h3>
        <form className="form-block">
          <div className="input-block">
            <label for="book-name">Введіть назву книги</label>
            <input name="book-name" className="input-field"></input>
          </div>
          <div className="input-block">
            <label for="book-review">Напишіть вашу рецензію</label>
            <textarea name="book-review" className="input-field" rows={10}></textarea>
          </div>
          <div className="input-block">
            <label for="book-rating">Виставте рейтинг від 1 до 5 зірок</label>
            <select name="book-rating" className="input-field">
              <option value="value1">1 зірка</option>
              <option value="value2">2 зірки</option>
              <option value="value3">3 зірки</option>
              <option value="value3">4 зірки</option>
              <option value="value3" selected>5 зірок</option>
            </select>
          </div>
          <div className="input-block">
            <label for="agreement">Ви даєте згоду на публікацію вашої рецензії</label>
            <input name="agreement" type="checkbox"></input>
          </div>
          <div className="input-block">
            <input type="submit" value="Надіслати форму" className="button" />
          </div>
        </form>
      </div>
    )
  }
}

export default BookForm;
