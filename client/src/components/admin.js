




















// import React from "react";
// import "../App.css";

// class Dropdown extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       displayMenu: false
//     };

//     this.showDropdownMenu = this.showDropdownMenu.bind(this);
//     this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
//   }

//   showDropdownMenu(event) {
//     event.preventDefault();
//     this.setState({ displayMenu: true }, () => {
//       document.addEventListener("click", this.hideDropdownMenu);
//     });
//   }

//   hideDropdownMenu() {
//     this.setState({ displayMenu: false }, () => {
//       document.removeEventListener("click", this.hideDropdownMenu);
//     });

//     // toggle = () => {
//     //   this.setState({
//     //     modal: !this.state.modal
//     //   });
//     // };
//   }

//   render() {
//     return (
//       <div className="dropdown" style={{ width: "100px" }}>
//         <div className="link" onClick={this.showDropdownMenu}>
//           Admin
//         </div>

//         {this.state.displayMenu ? (
//           <ul className="admin1">
//             <li className="admin2">
//               <a
//                 className="active a1"
//                 href="#"
//                 data-toggle="modal"
//                 data-target="modal"
//                 onClick={this.toggle.modal}
//                 href="#"
//               >
//                 Add rooms
//               </a>
//             </li>
//             <li className="admin2">
//               <a href="#Manage Pages">user role</a>
//             </li>
//           </ul>
//         ) : null}
//       </div>
//     );
//   }
// }

// export default Dropdown;
