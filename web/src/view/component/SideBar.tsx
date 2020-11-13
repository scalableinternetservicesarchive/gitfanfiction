import * as React from 'react';

export default function SideBar() {
  return (
    <div style={styles["#sidebar"]} id="sidebar">
      <ul>
        <nav style={styles.nav}>Your Recent Stories</nav><br />
        <nav style={styles.nav}>Navigation</nav>
        <ul>
          <a href={'/app/view-story'} style={styles.basicEntry}>Forward</a>
          <a href={'/app/view-story'} style={styles.basicEntry}>Backward</a>
        </ul>
      </ul>
    </div>
  )
}


const styles = {
  "#sidebar": {
    zIndex: 1000,
    position: "sticky",
    top: '130px',
    left: "250px",
    width: "250px",
    height: "500px",
    marginLeft: "0px",
    overflowY: "auto",
    background: "#fff",
    boxShadow: '5px 5px 5px grey',
    border: '1px solid black',
    WebkitTransition: "all 0.5s ease",
    MozTransition: "all 0.5s ease",
    OTransition: "all 0.5s ease",
    transition: "all 0.5s ease",
  } as React.CSSProperties,

  "#sidebar header": {
    backgroundColor: "#263238",
    fontSize: "20px",
    lineHeight: "52px",
    textAlign: "center"
  } as React.CSSProperties,

  "#sidebar header a": {
    color: "#fff",
    display: "block",
    textDecoration: "none"
  } as React.CSSProperties,

  "#sidebar header a:hover": { color: "#fff" },
  "#sidebar .nav": {},
  "#sidebar .nav a": {
    background: "none",
    borderBottom: "1px solid #455A64",
    color: "#CFD8DC",
    fontSize: "14px",
    padding: "16px 24px"
  },

  "#sidebar .nav a:hover": { background: "none", color: "#ECEFF1" },
  "#sidebar .nav a i": { marginRight: "16px" },

  basicEntry: {
    padding: '6px',
    display: 'flex',
    color: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20',
    fontWeight: 'bold',
    padding: '5px',
  } as React.CSSProperties,
}