// export default getInstituciones = (dataSnapshot) =>{
//     const newArray = [];
//     firebase.firestore().collection("Instituciones").onSnapshot((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             newArray.push({
//                 id:doc.id,
//                 nombre: doc.data().nombre,
//                 Descripción: doc.data().Descripción,
//             })           
//         });
//         dataSnapshot(newArray);
//     });    
// }