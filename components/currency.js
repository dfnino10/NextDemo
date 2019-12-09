class Currency extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currency: '',
      rates: []
    }

    this.getRates = this.getRates.bind(this);
  }


  getRates = async function(value) {
    const res = await fetch(`https://api.exchangeratesapi.io/latest?base=${value}`);
    const data = await res.json();

    this.setState({currency: value, rates: data.rates})
  }

  render() {

    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">Exchange rate for {this.state.currency} :
        </li>
        </ul>
        <br/>
        <select onChange={e => this.getRates(e.target.value)} className="form-control">
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
          <option value="MXN">MXN</option>
        </select>
        <br/>
        <ul className="list-group">{Object.keys(this.state.rates).map(key=><li className="list-group-item">{key}: {this.state.rates[key]}</li>)}</ul>
      </div>
    );
  }
}

export default Currency;