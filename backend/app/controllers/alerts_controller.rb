class AlertsController < ApplicationController

    def index 
        alerts =  current_user.alerts
        render json: alerts
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
