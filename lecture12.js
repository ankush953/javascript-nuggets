const students = [
  {
    name: "ankush",
    address: {
      country: "India",
      details: {
        zip: "12345",
      },
    },
  },
  {
    name: "ankit",
    address: {
      country: "SriLanka",
    },
  },
  {
    name: "Anuj",
    address: {
      country: "Nepal",
      details: {
        zip: "45634",
      },
    },
  },
];

// will throw error because zip is not available for "ankit"
students.map((student) => {
    // below line with throw error
    // console.log(student.address.details.zip);
});

// OPTIONAL CHAINING
students.map((students) => {
    console.log(students?.address?.details?.zip);
})


students.map((students) => {
    console.log(students?.address?.details?.zip || "ZIP not applicable");
})
