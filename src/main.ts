import * as fs from 'fs';

// import Anthropic from "@anthropic-ai/sdk";

console.log("hello worl");

try {
    const content = fs.readFileSync('src/stuff.txt', 'utf8');
    console.log(content);
} catch (error) {
    console.error('Error reading file:', error);
}

// const anthropic = new Anthropic();

// const msg = await anthropic.messages.create({
//   model: "claude-sonnet-4-20250514",
//   max_tokens: 1000,
//   temperature: 1,
//   system: "Respond only with short poems.",
//   messages: [
//     {
//       role: "user",
//       content: [
//         {
//           type: "text",
//           text: "Why is the ocean salty?"
//         }
//       ]
//     }
//   ]
// });
// console.log(msg);
