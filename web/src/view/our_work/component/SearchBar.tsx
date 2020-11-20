
import { useQuery } from '@apollo/client';
import * as React from 'react';
import { ALLFANDOM } from '../gql/query';


export default function SearchBar({ width = 600, height = 100 }): any {

  const [title, setTitle] = React.useState("");
  const [option, setOption] = React.useState("");


  const fandomNames = useQuery(ALLFANDOM);
  console.log("fandomName", fandomNames);
  React.useEffect(() => {
    if (fandomNames.data == undefined) return;

    const fandoms = fandomNames.data?.fandoms;
    const result = fandoms.filter((f: any) => f.name.includes(title))
    console.log(result);

  }, [fandomNames, title])


  return (
    <div>
      <div style={{ ...styles.main, "width": width }}>
        <div style={{ ...styles.subcontent }}>
          <div style={{ ...styles.searchText }}>{"Search Bar :"}</div>
          <input style={{ ...styles.search }} type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
        </div>
      </div>
      <div style={{ ...styles.optionMenu }}>
        <input type="radio" id="fandomSelect" name="type" value="fandom" onClick={() => setOption("fandom")}></input>
        <label> Fandom</label>
        <br />
        <input type="radio" id="storySelect" name="type" value="story" onClick={() => setOption("story")}></input>
        <label> Story</label>
      </div>
      <a href={`/app/search?query=${title}&option=${option}`}>Search</a>
    </div>
  )
}

const styles = {
  main: {
    "border": 'black 2px solid',
    borderRadius: 10,
    backgroundColor: 'white',
    color: 'black',
  },
  optionMenu: {
    padding: 5
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
    color: 'white',
  }


}