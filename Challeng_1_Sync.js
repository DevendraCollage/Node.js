//! Challenge Time
//* 1. Create a folder named its Your Choice.
//* 2. Create a file it in named bio.txt and data into it.
//* 3. Add more data into the file at the end of the existing data.
//* 4. Read the data without getting buffer data at first.
//* 5. Rename the file name  to myBio.txt.
//* 6. now delete both the file and the folder.

//! Import Module for performing file system
const fs = require("fs");

//! Solution
//? 1. Create a folder named its Your Choice.
const folder = fs.mkdirSync("myDev");
console.log(folder);

//? 2. Create a file it in named bio.txt and data into it.
const f = fs.writeFileSync("bio.txt", "Hello my name is Devendra");
console.log(f);

//? 3. Add more data into the file at the end of the existing data.
const addData = fs.appendFileSync(
  "bio.txt",
  ", And I am a Computer Science Student!"
);
console.log(addData);

//? 4. Read the data without getting buffer data at first.
const readData = fs.readFileSync("bio.txt");
console.log(readData.toString());

//? 5. Rename the file name to myBio.txt.
const renameFile = fs.renameSync("./myDev/myBio.txt", "./myDev/myBioData.txt");
console.log(renameFile);

//? 6. now delete both the file and the folder.
const dFileFolder1 = fs.unlinkSync("./myDev/myBioData.txt"); //! This Remove File from the folder
const dFileFolder2 = fs.rmdirSync("C:/Users/Devendra/Desktop/Node.js/myDev"); //! This will remove whole directory
console.log(dFileFolder1);
console.log(dFileFolder2);
