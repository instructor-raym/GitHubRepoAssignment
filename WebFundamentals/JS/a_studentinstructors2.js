function printName(arr){
  for (var i=0; i<arr.length; i++){
    console.log(i + ' ' + arr[i].first_name + ' ' + arr[i].last_name + ' ' + (arr[i].first_name.length + arr[i].last_name.length))
    }
}






var users = {
 'Students': [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }

var groups = Object.keys(users);
console.log(groups[0]);
printName(users.Students);
console.log('\n' + groups[1]);
printName(users.Instructors);
