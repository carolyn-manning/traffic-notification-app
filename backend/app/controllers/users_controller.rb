class UsersController < ApplicationController
   
    def create
        user = User.create(user_params)
        render json: user
    end

    def create
        user = User.create(user_params)
        if user.valid?
          token = encode_token({ user_id: user.id })
          render json: {
                   user: user,
                   jwt: token,
                 },
                 status: :created
        else
          render json: {
                   error: 'failed to create user',
                 },
                 status: :unprocessable_entity
        end
      end

    private 
    def user_params
        params.require(:user).permit(:phone_number)
    end 
    
end
