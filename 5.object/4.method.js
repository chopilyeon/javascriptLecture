const apple = {
  name: 'apple',
  display: function () {
    console.log(`${this.name}: π`); // κ°μ²΄ λ΄μμ νλ‘νΌν°μ μ κ·Όν λ this λ₯Ό μ¬μ©ν©λλ€. 
  },
};

apple.display();
