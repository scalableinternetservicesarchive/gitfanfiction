
import { useQuery } from '@apollo/client';
import * as React from 'react';
import Select from 'react-select';
import { ALLFANDOM } from '../gql/query';

//small size:
//height: 22, fontsize = 14 width=300
//regular size:
//height: 30, fontsize = 15 width=600
export default function SearchBar2({ width = 300, height = 30, fontSize = 17, setFandomId = console.log }): any {

  const fandomNames = useQuery(ALLFANDOM);
  const [result, setResult] = React.useState([])

  React.useEffect(() => {
    if (fandomNames.data == undefined) return;
    const fandoms = fandomNames.data?.fandoms;
    setResult(fandoms.map((result: any) => ({ label: result.name, value: result.id })));
  }, [fandomNames])


  return (
    <div style={{ "height": height, "width": width, fontSize: fontSize }}>
      <div style={{ ...styles.main, "width": width }}>
        <Select
          options={result}
          styles={customStyles}
          placeholder="Search..."
          menuColor='silver'
          menuPlacement="auto"
          height={height}
          fontSize={fontSize}
          onChange={(opt: any) => setFandomId(opt.value)}
        />
      </div>
    </div>
  )
}



const customStyles = {
  menu: (provided: any, state: any) => ({
    color: state.isSelected ? 'grey' : 'black',
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    background: '#fff',
    border: 0,
    boxShadow: 'none',
    minHeight: state.selectProps.height,
    height: state.selectProps.height,
    fontSize: state.selectProps.fontSize,
  }),
  valueContainer: (provided: any, state: any) => ({
    ...provided,
    height: state.selectProps.height,
    fontSize: state.selectProps.fontSize,
    padding: '0 6px'
  }),
  indicatorsContainer: (provided: any, state: any) => ({
    ...provided,
    height: state.selectProps.height,
  }),
  dropdownIndicator: (provided: any, state: any) => ({
    ...provided,
    fontSize: state.selectProps.fontSize,
  }),
  indicatorSeparator: (provided: any, state: any) => ({
    display: 'none',
  }),
}

const styles = {
  main: {
    border: 'black 2px solid',
    borderRadius: 10,
    backgroundColor: 'white',
    color: 'black',
    padding: 2,
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