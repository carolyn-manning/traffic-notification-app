class AlertsController < ApplicationController

    def index 
        alerts =  Alert.all 
        render json: alerts

        # build current_user update to work with current_user

    end 

end
