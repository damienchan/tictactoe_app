class Game < ActiveRecord::Base
  cattr_accessor :gameMove

  def initialize(gameMove={})

    gameMove

  end

  def turn(turn='')
    turn
  end



  def move
    move = self.gameMove
  end

end

#$h = {[0]=>nil,[1]=>nil, [2]=>nil, [3]=>nil, [4]=>nil, [5]=>nil, [6]=>nil, [7]=>nil, [8]=>nil, [9]=>nil}