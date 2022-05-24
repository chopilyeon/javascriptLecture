const apple = {
  name: 'apple',
  display: function () {
    console.log(`${this.name}: 🍎`); // 객체 내에서 프로퍼티에 접근할때 this 를 사용합니다. 
  },
};

apple.display();
