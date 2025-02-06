// একটি অবজেক্ট {red: "#FF0000", green: "#00FF00", blue: "#0000FF"} তৈরি করো এবং for...in ব্যবহার করে প্রতিটি রঙের নাম এবং তার হেক্স কোড প্রিন্ট করো।


const colors = { red: "#FF0000", green: "#00FF00", blue: "#0000FF" };

for (let colorName in colors) {
  console.log(`${colorName}: ${colors[colorName]}`);
}

