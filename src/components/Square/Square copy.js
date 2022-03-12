// class Square extends React.Component {
//   render() {
//     // console.log(this.props.value)
//     // console.log(this.state.value)
//     return (
//       // <button className="square" onClick={function() { console.log('click'); }}>
//       //   {this.props.value}
//       // </button>
//       <button className="square" onClick={ () => this.props.onClick()}>
//         {/* Square Shape */}
//         {this.props.value}
//       </button>
//     );
//   }
// }

function Square (props) {
  return(
    <button className="square" onClick={props.onClick}>
        {/* Square Shape */}
        {props.value}
      </button>
  )
}

export default Square