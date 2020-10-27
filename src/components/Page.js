const Page = (props) => {
/**
 * choose background color
 * choose navbar color
 */
  return (
    <div id='pageProps'>
      <h2>Page Properties</h2>
      <label>Page Color: </label>
      <input placeholder='Color Hex Code' onChange={e => {console.log(e.target.value)}}></input><br />
      <label>Navbar Color: </label>
      <input placeholder='Color Hex Code' onChange={e => {console.log(e.target.value)}}></input><br />
    </div>
  )
}

export default Page;