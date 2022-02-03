describe("pow", function() {

  describe("функция возводит - x в степень 3", function() {
    
      function makeTest(x) {
      let expected = x * x * x;
      it(`${x} в степени 3 будет ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
      }

      for (let x = 1; x <= 5; x++ ) {
      makeTest(x);
      }
  });
// ... другие тесты, можно писать и describe, и it блоки.
});

//   it("2 в степени 3 будет 8", function() {
//     assert.equal(pow(2, 3), 8);
//       });
//
//   it("3 в степени 3 будет 27", function () {
//     assert.equal(pow(3, 3), 27);
//   });
//
// });
