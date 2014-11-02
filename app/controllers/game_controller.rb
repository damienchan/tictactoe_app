class GameController < ApplicationController
  def index

  end


  def create_game
    #puts game_param
    puts 'damienyyyyy'
    @game=Game.new(params.permit(:move, :cell_id, :turn))
    #@turn = @game.turn('p2')
    @move=@game.move()
    #@game=Game
  end

  def update_game

  end

  #private
  #def game_param
  #
  #end

end


#def new
#  @booking = Booking.new
#end
#def create
#  @booking = Booking.new(book_param)
#  if @booking.save
#    redirect_to root_url
#  else
#    flash[:notice_booking_failed] = true
#    redirect_to root_url
#  end
#end
#private
#def book_param
#  params.require(booking).permit(:id, :book_date, :phone)
#end
#

