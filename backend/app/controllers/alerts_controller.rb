class AlertsController < ApplicationController

    def index 
        alerts =  Alert.all 
        render json: alerts

        # build current_user update to work with current_user
    end 

    def create
        alert = current_user.alert.create(alert_params)
        render json: alert
    end

    private 
    def alert_params
        params.require(:alert).permit(:origin, :destination, :time)
    end 
end
