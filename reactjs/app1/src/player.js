export default function Player(props) {
  //create property variables using object destructing 
  let {name, runs, matches,fifty,century} = props;
  //create style object 
  let labelStyle = {fontWeight: "bold",border: "1px solid white",fontSize: "large",color:'white',backgroundColor:'grey',width:'100px' };

  let dataStyle = { border: "1px solid black",color: "blue",fontSize: "large" };

  return (<table style={{ "width": "20%", "border": "1px solid black", "background-color": "aliceblue" }}>
    <tbody><tr>
      <td style={labelStyle}>Name</td>
      <td style={dataStyle}>{name}</td>
    </tr>
      <tr>
        <td style={labelStyle}>Runs</td>
        <td style={dataStyle}>{runs}</td>
      </tr>
      <tr>
        <td style={labelStyle}>Matches</td>
        <td style={dataStyle}>{matches}</td>
      </tr>
      <tr>
        <td style={labelStyle} >fifty</td>
        <td style={dataStyle} >{fifty}</td>
      </tr>
      <tr>
        <td style={labelStyle}>century</td>
        <td style={dataStyle}>{century}</td>
      </tr>
      <tr>
        <td style={labelStyle} >Average</td>
        <td style={dataStyle} >{(parseInt(runs) / parseInt(matches)).toFixed(2)}</td>
      </tr>
    </tbody></table>);
}