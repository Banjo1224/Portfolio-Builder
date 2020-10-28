const vals = [];
const Page = ({ handleProps }) => {
/**
 * choose background color
 * choose navbar color
 */
  return (
    <div id='pageProps'>
      <h2>Page Properties</h2>
      <label>Page Color: </label>
      <input placeholder='Color Hex Code' onChange={e => {vals[0] = e.target.value}}></input><br />
      <label>Navbar Color: </label>
      <input placeholder='Color Hex Code' onChange={e => {vals[1] = e.target.value}}></input><br />
      <input type='submit' onClick={() => handleProps(vals)}></input>
    </div>
  )
}

export default Page;