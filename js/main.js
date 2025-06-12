// Method 1

// if (window.location.hash) {
//   if (window.location.hash.indexOf("rabea") === 1) {
//     console.log("Good Rbea Hash Is Found");
//   }
// } else {
//   console.log("Bad Theres No Hash In Link");
// }

// Method 2

if (window.location.hash) {
  let hash = window.location.hash.substring(1);
  if (hash === "rabea") {
    console.log("Good Rbea Hash Is Found");
  }
} else {
  console.log("Bad Theres No Hash In Link");
}
