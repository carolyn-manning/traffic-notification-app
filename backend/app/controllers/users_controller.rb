class UsersController < ApplicationController
   
    def create
        user = User.find_or_create_by(phone_number_params)
        render json: user
    end

    private 
    def user_params
        params.permit(:phone_number) 
    end 
    
end
