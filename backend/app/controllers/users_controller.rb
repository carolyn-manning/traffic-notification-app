class UsersController < ApplicationController
   
    def show
        user = User.find_or_create_by(phone_number)
        render json: user
    end
    
end
