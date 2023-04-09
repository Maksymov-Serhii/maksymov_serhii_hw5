import React from "react";

class ConversionCalc extends React.Component {
  render() {
    return (
      <div className="container">
        <h3>Конвертація</h3>
        <form className="form-block">
          <div className="input-block">
            <label htmlFor="bookName">Для конвертації на 0,5 введіть число</label>
            <input type="number" name="bookName" className="input-field"></input>
          </div>
          <div className="input-block">
            <label htmlFor="authorName">Для конвертації на 0,05 введіть число</label>
            <input type="number" name="authorName" className="input-field"></input>
          </div>
        </form>
      </div>
    )
  }
}

export default ConversionCalc;