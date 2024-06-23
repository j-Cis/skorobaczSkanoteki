
import { 
  Checkbox,
  Confirm,
  Input,
  Number,
  prompt, 
} from "@cliffy/prompt";
// DOCS https://cliffy.io/docs@v1.0.0-rc.4/prompt  
import { walk } from "@std/fs";
const lista_zadan = await Array.fromAsync(walk(".", { includeFiles: false }));
const result = await prompt([{
  name: "name",
  message: "What's your name?",
  type: Input,
}, {
  name: "age",
  message: "How old are you?",
  type: Number,
}, {
  name: "like",
  message: "Do you like animals?",
  type: Confirm,
}, {
  name: "animals",
  message: "Select some animals",
  type: Checkbox,
  options: ["dog", "cat", "snake"],
}]);

//console.log(result);