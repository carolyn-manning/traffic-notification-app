class UsersController < ApplicationController
   
    def create
        user = User.create(phone_number_params)
        render json: user
    end

    private 
    def phone_number_params
        params.require(:user).permit(:phone_number)
    end 
    
end
