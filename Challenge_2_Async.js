//! Challenge Time - Perform Operation with Asynchronous Way.
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
const createFolder = fs.mkdir("myDev", (error) => {
  console.log("Folder Created!");
});

//? 2. Create a file it in named bio.txt and data into it.
// const createFile = fs.writeFile(s
//   "./myDev/bio.txt",
//   "Hello my name is Devendra!",
//   (error) => {
//     console.log("File is created!");
//   }
// );

//? 3. Add more data into the file at the end of the existing data.
// const addData = fs.appendFile(
//   "./myDev/bio.txt",
//   ", I am an Computer Science Student!",
//   () => {
//     console.log("Data Appended To the File!");
//   }
// );

//? 4. Read the data without getting buffer data at first.
// const readData = fs.readFile("./myDev/bio.txt", "utf-8", (error, Data) => {
//   console.log(Data);
// });

//? 5. Rename the file name  to myBio.txt.
// const RenameFile = fs.rename(
//   "./myDev/bio.txt",
//   "./myDev/myBio.txt",
//   (error) => {
//     console.log("File is renamed!");
//   }
// );

//? 6. now delete both the file and the folder.
const removeDirectory = fs.rmdir("myDev", (error) => {
  console.log("Directory will be removed!"); //! This will be removed Directory from the path
});
const removeFile = fs.unlink("./myDev/myBio.txt", () => {
  console.log("File Will be removed!"); //! This will be removed file from the path
});
