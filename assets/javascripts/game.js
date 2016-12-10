var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser', {});

function convert(pattern) {
  answer = [];
  array = pattern.split('');
  c_count = 0;
  for (var i = 0; i < array.length; i++) {
    symbol = array[i];
    if (symbol === 'a') {
      answer.push('b');
    } else if (symbol === 'b') {
      answer.push('a');
    } else if (symbol === 'c') {
      if (c_count % 2 === 0) {
        answer.push('b');
      } else {
        answer.push('a');
      }
      c_count += 1;
    } else if (symbol === 'd') {
      answer.push(array[i+1]);
    } else if (symbol === 'e') {
      answer.push(array[i-1]);
    } else {
      answer.push('!');
    }
  }
  return answer.join('');
}

game_state = {
  preload: function() {
    this.load.image('basic_a', 'assets/images/basic_a.png');
    this.load.image('basic_b', 'assets/images/basic_b.png');
    this.load.image('basic_c', 'assets/images/basic_c.png');
    this.load.image('basic_d', 'assets/images/basic_d.png');
    this.load.image('basic_e', 'assets/images/basic_e.png');
  },
  create: function() {
    pattern = 'abddecacb';

    for (var i = 0; i < pattern.length; i++) {
      y = 1 + 64 * i + (1 * i)
      this.add.sprite(1, y, 'basic_' + pattern[i])
    }

    answer = convert(pattern);

    for (var i = 0; i < answer.length; i++) {
      y = 1 + 64 * i + (1 * i)
      this.add.sprite(100, y, 'basic_' + answer[i])
    }
  },
  update: function() {

  },
  render: function() {

  }
}

game.state.add('game_state', game_state);
game.state.start('game_state')
