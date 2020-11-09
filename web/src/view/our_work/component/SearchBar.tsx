
import * as React from 'react';


export default function SearchBar({ width = 800, height = 100 }) {

  const [title, setTitle] = React.useState("");

  return (
    <div style={{ ...styles.main, "width": width }}>
      <div style={{ ...styles.subcontent }}>
        <div style={{ ...styles.searchText }}>{"Search Bar :"}</div>
        <input style={{ ...styles.search }} type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </div>
    </div>
  )
}

const styles = {
  main: {
    "border": 'black 2px solid',
    borderRadius: 10,
  },
  subcontent: {
    display: "flex",
    flexDirection: "row" as "row",
    padding: 5,
    paddingLeft: 10,
  },
  searchText: {
    marginRight: 5,
  },
  search: {
    flex: 1,
    // border: 'black 1px solid',
  },
  bold: {
    fontWeight: 'bold' as 'bold'
  },
  underline: {
    textDecorationLine: 'underline'
  },
  rate: {
    padding: 10,
    height: 50
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 5,
    color: 'white',
    height: 30,
    width: 100
  },
  link: {
    color: 'black',
  }


}