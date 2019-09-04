isBetween(5, x, 10) // Check that x is inside the inclusive range [5, 10]
isString(9) // === false
isString("") // === true
hasLengthBetween("abc", 3, 10) // Checks whether length of string is between (inclusively) 3 and 10
hasPropertyFoo({foo: "yes"}) // === true
hasPropertyFoo(null) // === false (should not throw an exception)