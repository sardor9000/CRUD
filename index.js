

// Javascript  CRUD 

 // List of cars


 // let cars = [
 //     {id: 1, year: 2002, engine: 1, name: 'Tico'},
 //     {id: 2, year: 1995, engine: 1.2, name: 'Damas'},
 //     {id: 3, year: 2002, engine: 1.6, name: 'Nexia'},
 //     {id: 4, year: 2010, engine: 1.8, name: 'Lacetti'},
 //     {id: 5, year: 1997, engine: 1.5, name: 'Matiz'},
 //     {id: 6, year: 2015, engine: 1.6, name: 'Gentra'},
 //     {id: 7, year: 2020, engine: 2, name: 'Tracker'},
 //     {id: 8, year: 2023, engine: 2, name: 'Onix'},
 // ];




// READ

// cars.map((value) => {
//     console.log(value);
// })



// DELETE
// frst way

// const onDelete = (ids) => {
//   return  cars.filter((value) => value.id !== ids)
// }
// console.log(onDelete(3,));



// DELETE
// second way

// const onDelete = (ids) => {
//      return cars.filter(function(value){
//         return value.id !== ids;
//      })
// }
// console.log(onDelete(4));




// CREATE

 // const onCreate = (car) => {
 //     cars = [...cars, {...car}]
 // }
 // 
 // onCreate({year: 2015, engine: 1.8, name: 'Forza'})
 // onCreate({year: 2010, engine: 2, name: 'Lotze'})
 // onCreate({year: 2017, engine: 2.4, name: 'Sonata'})
 // 
 // console.log(cars);




// UPDATE
// first way update

 // const onUpdate = (car) => {
 //     let updated = cars.map((value) => value.id === car.id ?{...value, year: 2010, engine: 1.5, name: 'Tico redline'} : value )
 //     console.log(updated);
 // }
 // 
 // onUpdate({id: 1})



// UPDATE
// Dynamic way

// const onUpdate =(car) => {
//     let updated = cars.map((value) => value.id === car.id ? {...value, [car.keyType]: car.value} : value)
//     console.log(updated);
// }
// onUpdate({id: 3, keyType: 'engine', value: 2})